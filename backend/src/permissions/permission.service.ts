import { IPermission } from "./permission.interface";
import { IResponseData } from "../shared/interfaces/response-data.interface";
import httpStatus from "http-status";
import sequelize from "../database/connectToDB";
import Permission from "./permission.schema";
import Role from "../roles/role.schema";
import { ICreatePermissionDto } from "./dto/request/create-permission.dto";
import { IParamIdDto } from "../shared/dtos/requests/param-id.dto";
import _ from "lodash";
import { listOptions } from "../shared/dtos/requests/list-options.dto";
import { findAllOptionsHandler } from "../shared/functions/findAllOptionsHandler.function";
import { IUpdatePermissionDto } from "./dto/request/update-permission.dto";
import { IAddRoleToPermissionDto } from "./dto/request/add-role-to-permission.dto";
import PermissionRole from "../permissionRole/permissionRole.schema";

const permissionRepo = sequelize.getRepository(Permission);
const roleRepo = sequelize.getRepository(Role);
const permissionRoleRepo = sequelize.getRepository(PermissionRole);

export const createPermission = async (
  data: ICreatePermissionDto
): Promise<IResponseData> => {
  const duplicatePermission = await permissionRepo.findOne({
    where: { name: data.name },
  });

  if (duplicatePermission) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: "نام دسترسی تکراری است",
    };
  }

  const result = await permissionRepo.create(data);

  return {
    statusCode: httpStatus.CREATED,
    message: "دسترسی ایجاد شد",
    data: result,
  };
};

export const findOnePermission = async (
  data: IParamIdDto
): Promise<IResponseData> => {
  const result = await permissionRepo.findOne({ where: { id: data.id } });

  if (!result) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "دسترسی پیدا نشد",
    };
  }

  return {
    data: result,
  };
};

export const findAllPermissions = async (
  data: listOptions
): Promise<IResponseData> => {
  const options: listOptions = _.pick(data, ["asc", "limit", "page", "sort"]);
  data = _.omit(data, ["asc", "limit", "page", "sort"]);

  const listOptions = findAllOptionsHandler(options);

  const result = await permissionRepo.findAll({
    where: { ...data },
    ...listOptions,
  });
  const count = await permissionRepo.count({ where: { ...data } });

  return {
    data: result,
    metadata: { totalCount: count },
  };
};

export const updateOnePermission = async (
  data: IUpdatePermissionDto
): Promise<IResponseData> => {
  const permissionExists = await permissionRepo.findOne({
    where: { id: data.id },
  });

  if (!permissionExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "دسترسی پیدا نشد",
    };
  }

  const result = await permissionRepo.update(
    { name: data.name },
    { where: { id: data.id } }
  );

  return {};
};

export const deleteOnePermission = async (
  data: IParamIdDto
): Promise<IResponseData> => {
  const permissionExists = await permissionRepo.findOne({
    where: { id: data.id },
  });

  if (!permissionExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "دسترسی با این شناسه پیدا نشد",
    };
  }

  const result = await permissionRepo.destroy({ where: { id: data.id } });

  return {};
};

// export const hardDeleteOnePermission = async (
//   data: IParamIdDto
// ): Promise<IResponseData> => {
//   const permissionExists = await permissionRepo.findOneAndHardDelete(data);

//   if (!permissionExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "دسترسی با این شناسه پیدا نشد",
//     };
//   }

//   return {};
// };

export const addRoleToPermission = async (
  data: IAddRoleToPermissionDto
): Promise<IResponseData> => {
  const permissionExists = await permissionRepo.findOne({
    where: { id: data.permissionId },
  });

  if (!permissionExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "دسترسی با این شناسه پیدا نشد",
    };
  }

  const roleExists = await roleRepo.findOne({
    where: { id: data.roleId },
  });

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "نقش با این شناسه پیدا نشد",
    };
  }

  if (
    await permissionRoleRepo.findOne({
      where: { roleId: data.roleId, permissionId: data.permissionId },
    })
  ) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: "این دسترسی قبلا به این نقش داده شده است",
    };
  }

  await permissionRoleRepo.create(data);

  return {
    statusCode: httpStatus.CREATED,
  };
};

export const removeRoleFromPermission = async (
  data: IAddRoleToPermissionDto
): Promise<IResponseData> => {
  if (
    !(await permissionRoleRepo.findOne({
      where: { roleId: data.roleId, permissionId: data.permissionId },
    }))
  ) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "این دسترسی برای این نقش تعریف نشده است",
    };
  }

  const permissionExists = await permissionRepo.findOne({
    where: { id: data.permissionId },
  });

  if (!permissionExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "دسترسی با این شناسه پیدا نشد",
    };
  }

  const roleExists = await roleRepo.findOne({
    where: { id: data.roleId },
  });

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "نقش با این شناسه پیدا نشد",
    };
  }

  await permissionRoleRepo.destroy({
    where: { roleId: data.roleId, permissionId: data.permissionId },
  });

  return {};
};

// export const checkAccessRoleToPermission = async (
//   data: Partial<ICheckAccessDto>
// ): Promise<IResponseData> => {
//   data.permissionId = new Types.ObjectId(data.permissionId);
//   data.roleId = new Types.ObjectId(data.roleId);

//   const permissionExists = await permissionRepo.findOne({
//     _id: data.permissionId,
//   });

//   if (!permissionExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "مجوز پیدا نشد",
//     };
//   }

//   const roleExists = await roleRepo.findOne({ _id: data.roleId });

//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "نقش پیدا نشد",
//     };
//   }

//   const roleHasThisPermission = permissionExists.roles?.some(
//     (role) => role._id?.toString() === data.roleId?.toString()
//   );

//   if (!roleHasThisPermission) {
//     return {
//       message: "این نقش به این مجوز دسترسی ندارد",
//       data: { access: false },
//     };
//   }

//   return {
//     message: "این نقش به این مجوز دسترسی دارد",
//     data: { access: true },
//   };
// };
