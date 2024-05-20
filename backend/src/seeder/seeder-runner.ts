import sequelize from "../database/connectToDB";
import { roleSeeder } from "./role.seeder";
import { superAdminUserSeeder } from "./super-admin-user.seeder";

export async function SeederRunner() {
  await roleSeeder();
  await superAdminUserSeeder();
  console.log("Seeder Executed...");

  return;
}
//
