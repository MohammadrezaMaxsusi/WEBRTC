import sequelize from "./connectToDB";

export async function syncdb() {
  await sequelize.sync({ alter: true });
  process.exit(0);
}
