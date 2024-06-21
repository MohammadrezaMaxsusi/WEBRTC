import { NextFunction, Response } from "express";
import { IResponseData } from "../interfaces/response-data.interface";
import { IPayload } from "../../auth/interfaces/jwt-payload.interface";
import httpStatus from "http-status";
import { Types } from "mongoose";
import { RequestWithPayload } from "../interfaces/request-with-payload.interface";
import sequelize from "../../database/connectToDB";
import Permission from "../../permissions/permission.schema";
import Role from "../../roles/role.schema";
import PermissionRole from "../../permissionRole/permissionRole.schema";
import { Op } from "sequelize";
import { MAIN_ROLES_ENUM } from "../enums/main-roles.enum";

const permissionRepo = sequelize.getRepository(Permission);
const roleRepo = sequelize.getRepository(Role);
const permissionRoleRepo = sequelize.getRepository(PermissionRole);

const errorResponse: IResponseData = {
  data: {},
  error: true,
  message: "دسترسی غیر مجاز",
  statusCode: httpStatus.FORBIDDEN,
};

export const Authorization = (permissionName: string) => {
  return async (req: RequestWithPayload, res: Response, next: NextFunction) => {
    const reqCopy: any = req;

    const payload: IPayload = reqCopy.payload;

    if (!payload || !payload?.roleIds) {
      return res.status(httpStatus.FORBIDDEN).json(errorResponse);
    }

    const isSuperAdmin = await roleRepo.findOne({
      where: {
        id: { [Op.in]: payload.roleIds },
        name: MAIN_ROLES_ENUM.SUPER_ADMIN,
      },
    });

    if (isSuperAdmin) {
      return next();
    }

    const permission = await permissionRepo.findOne({
      where: {
        name: permissionName,
        // roles:  payload.roleId,
      },
    });

    const hasPermission = await permissionRoleRepo.findOne({
      where: {
        roleId: payload.roleIds,
        permissionId: permission.id,
      },
    });

    if (!hasPermission) {
      return res.status(httpStatus.FORBIDDEN).json(errorResponse);
    }

    return next();
  };
};
