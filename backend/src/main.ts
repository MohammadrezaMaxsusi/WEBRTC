import express, { Request, Response } from "express";
import { configurations } from "./config/configurations";
import connectDB from "./database/connectToDB";
import morgan from "morgan";
import appRoutes from "./routes/index";
import { IResponseData } from "./shared/interfaces/response-data.interface";
import httpStatus from "http-status";
import { SeederRunner } from "./seeder/seeder-runner";
import syncDb from "./database/syncDB";

// Create App Instance
const app = express();

// Conncet To Database
// connectDB();

// Run Seeder
SeederRunner();

// Request Logger
app.use(morgan("dev"));

// syncDb();

// Body Parser
app.use(express.json(), express.urlencoded({ extended: false }));

// Routing
app.use("/", appRoutes);

app.use("*", (req, res, next) => {
  let response: IResponseData = {
    statusCode: httpStatus.NOT_FOUND,
    message: "مسیر یافت نشد",
    error: true,
    data: {},
  };

  return res.status(404).json(response);
});

// Run App
app.listen(configurations.app.port, () => {
  console.log(`Server running on port ${configurations.app.port}`);
});
