import { hash } from "bcrypt";
import { configurations } from "../config/configurations";
import sequelize from "../database/connectToDB";
import Role from "../roles/role.schema";
import { ensureSuperAdminRoleExists } from "../shared/functions/ensureSuperAdminRoleExists.function";
import { ensureUserRoleExists } from "../shared/functions/ensureUserRoleExists.function";
import UserRole from "../userRole/userRole.schema";
import User from "../users/user.schema";

const roleRepo = sequelize.getRepository(Role);
const userRepo = sequelize.getRepository(User);
const userRoleRepo = sequelize.getRepository(UserRole);

export async function superAdminUserSeeder() {
  const superAdminUser = await ensureUserExists();
  const superAdminRole = await ensureSuperAdminRoleExists();
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
