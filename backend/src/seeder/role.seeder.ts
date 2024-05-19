import { hash } from "bcrypt";
import { configurations } from "../config/configurations";
import sequelize from "../database/connectToDB";
import Role from "../roles/role.schema";
import { MAIN_ROLES_ENUM } from "../shared/enums/main-roles.enum";
import { ensureBaseRoleExists } from "../shared/functions/ensureBaseRoleExists.function";
import { ensureSuperAdminRoleExists } from "../shared/functions/ensureSuperAdminRoleExists.function";

const roleRepo = sequelize.getRepository(Role);

export async function roleSeeder() {
  await ensureSuperAdminRoleExists();
  await ensureBaseRoleExists();
}
