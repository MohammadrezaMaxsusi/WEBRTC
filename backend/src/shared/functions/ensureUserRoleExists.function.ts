import sequelize from "../../database/connectToDB";
import Role from "../../roles/role.schema";
import UserRole from "../../userRole/userRole.schema";
import User from "../../users/user.schema";

const userRoleRepo = sequelize.getRepository(UserRole);

export const ensureUserRoleExists = async (
  thisUser: User,
  thisRole: Role
): Promise<UserRole> => {
  let thisUserRole = await userRoleRepo.findOne({
    where: {
      userId: thisUser.id,
      roleId: thisRole.id,
    },
  });

  if (!thisUserRole) {
    thisUserRole = await userRoleRepo.create({
      userId: thisUser.id,
      roleId: thisRole.id,
    });
  }

  return thisUserRole;
};
