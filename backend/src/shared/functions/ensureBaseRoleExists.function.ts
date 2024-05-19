import sequelize from "../../database/connectToDB";
import Role from "../../roles/role.schema";
import { MAIN_ROLES_ENUM } from "../enums/main-roles.enum";

const roleRepo = sequelize.getRepository(Role);

export const ensureBaseRoleExists = async (): Promise<Role> => {
  let thisRole = await roleRepo.findOne({
    where: {
      name: MAIN_ROLES_ENUM.BASE_USER,
    },
  });

  if (!thisRole) {
    thisRole = await roleRepo.create({
      name: MAIN_ROLES_ENUM.BASE_USER,
    });
  }

  return thisRole;
};
