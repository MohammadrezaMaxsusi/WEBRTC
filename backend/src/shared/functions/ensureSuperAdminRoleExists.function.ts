import sequelize from "../../database/connectToDB";
import Role from "../../roles/role.schema";
import { MAIN_ROLES_ENUM } from "../../shared/enums/main-roles.enum";

const roleRepo = sequelize.getRepository(Role);

export const ensureSuperAdminRoleExists = async (): Promise<Role> => {
  let thisRole = await roleRepo.findOne({
    where: {
      name: MAIN_ROLES_ENUM.SUPER_ADMIN,
    },
  });

  if (!thisRole) {
    thisRole = await roleRepo.create({
      name: MAIN_ROLES_ENUM.SUPER_ADMIN,
    });
  }

  return thisRole;
};
