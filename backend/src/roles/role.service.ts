import { IRole } from "./role.interface";
import { IResponseData } from "../shared/interfaces/response-data.interface";
import httpStatus from "http-status";
import {
  RoleErrorMessages,
  RoleSuccessMessages,
} from "./enums/role-messages.enum";
import { listOptions } from "../shared/dtos/requests/list-options.dto";
import _ from "lodash";
import { IParamIdDto } from "../shared/dtos/requests/param-id.dto";
import { MAIN_ROLES_ENUM } from "../shared/enums/main-roles.enum";
import Role from "./role.schema";
import sequelize from "../database/connectToDB";
import { findAllOptionsHandler } from "../shared/functions/findAllOptionsHandler.function";

const roleRepo = sequelize.getRepository(Role);

export const createRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const duplicateRole = await roleRepo.findOne({ where: { name: data.name } });

  if (duplicateRole) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: RoleErrorMessages.DUPLICATE,
    };
  }

  const result = await roleRepo.create(data);

  return {
    statusCode: httpStatus.CREATED,
    message: RoleSuccessMessages.CREATED,
    data: result,
  };
};

export const findAllRoles = async (
  data: Partial<IRole> & listOptions
): Promise<IResponseData> => {
  const options: listOptions = _.pick(data, ["asc", "limit", "page", "sort"]);
  data = _.omit(data, ["asc", "limit", "page", "sort"]);

  const listOptions = findAllOptionsHandler(options);

  const result = await roleRepo.findAll({
    where: { ...data },
    ...listOptions,
  });

  const count = await roleRepo.count({ where: { ...data } });

  return {
    data: result,
    metadata: { totalCount: count },
  };
};

export const findOneRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const result = await roleRepo.findOne({ where: { ...data } });

  if (!result) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  return {
    message: RoleSuccessMessages.FOUND,
    data: result,
  };
};

export const updateOneRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const roleExists = await roleRepo.findOne({
    where: { id: data.id },
  });

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  if (roleExists.name === MAIN_ROLES_ENUM.SUPER_ADMIN) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: RoleErrorMessages.FORBIDDEN_UPDATE_SUPER_ADMIN_ROLE,
    };
  }

  const duplicateRole = await roleRepo.findOne({ where: { name: data?.name } });

  if (duplicateRole && roleExists?.id !== duplicateRole?.id) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: RoleErrorMessages.DUPLICATE,
    };
  }

  const result = await roleRepo.update(
    { ..._.omit(data, ["id"]) },
    { where: { id: data.id } }
  );

  return {
    message: RoleSuccessMessages.UPDATED,
  };
};

export const deleteOneRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const roleExists = await roleRepo.findOne({
    where: { id: data.id },
  });

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  if (roleExists.name === MAIN_ROLES_ENUM.SUPER_ADMIN) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: RoleErrorMessages.FORBIDDEN_DELETE_SUPER_ADMIN_ROLE,
    };
  }

  const result = await roleRepo.destroy({
    where: { id: data.id },
  });

  return {
    message: RoleSuccessMessages.DELETED,
  };
};

// export const hardDeleteOneRole = async (
//   data: IParamIdDto
// ): Promise<IResponseData> => {
//   const roleExists = await roleRepo.destroy({ where: { ...data } });

//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: RoleErrorMessages.NOT_FOUND,
//     };
//   }

//   return {};
// };

// export const getPermissions = async (
//   data: IParamIdDto
// ): Promise<IResponseData> => {
//   const roleExists = await roleRepo.findOne({where:{...data}, });

//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: RoleErrorMessages.NOT_FOUND,
//     };
//   }

//   return {
//     data: await permissionRepo.getRolePermissions(data._id),
//   };
// };
