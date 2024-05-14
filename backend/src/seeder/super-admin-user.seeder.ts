import { hash } from "bcrypt";
import { configurations } from "../config/configurations";
import sequelize from "../database/connectToDB";
import Role from "../roles/role.schema";
import { SUPER_ADMIN_ROLE } from "../shared/constants/super-admin-role.constant";
import UserRole from "../userRole/userRole.schema";
import User from "../users/user.schema";

const roleRepo = sequelize.getRepository(Role);
const userRepo = sequelize.getRepository(User);
const userRoleRepo = sequelize.getRepository(UserRole);

export async function superAdminUserSeeder() {
  const superAdminUser = await ensureUserExists();
  const superAdminRole = await ensureRoleExists();
  const superAdminUserRole = await ensureUserRoleExists(
    superAdminUser,
    superAdminRole
  );
}

async function ensureUserExists(): Promise<User> {
  let thisUser = await userRepo.findOne({
    where: { username: configurations.app.superAdmin.username },
  });

  if (!thisUser) {
    const hashedPassword = await hash(
      configurations.app.superAdmin.password,
      10
    );

    thisUser = await userRepo.create({
      firstName: "ادمین کل",
      lastName: "-",
      username: configurations.app.superAdmin.username,
      password: hashedPassword,
    });
  }

  return thisUser;
}

async function ensureRoleExists(): Promise<Role> {
  let thisRole = await roleRepo.findOne({
    where: {
      name: SUPER_ADMIN_ROLE,
    },
  });

  if (!thisRole) {
    thisRole = await roleRepo.create({
      name: SUPER_ADMIN_ROLE,
    });
  }

  return thisRole;
}

async function ensureUserRoleExists(
  thisUser: User,
  thisRole: Role
): Promise<UserRole> {
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
}
