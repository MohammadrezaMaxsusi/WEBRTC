import sequelize from "./connectToDB";


async function syncDb() {
  await sequelize.sync({ alter: true });
}
