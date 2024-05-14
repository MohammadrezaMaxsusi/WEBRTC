import sequelize from "../database/connectToDB";
import { superAdminUserSeeder } from "./super-admin-user.seeder";

export async function SeederRunner() {
  await superAdminUserSeeder();
  console.log("Seeder Executed...");

  return;
}
//
