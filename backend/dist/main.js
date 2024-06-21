"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configurations_1 = require("./config/configurations");
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const http_status_1 = __importDefault(require("http-status"));
const seeder_runner_1 = require("./seeder/seeder-runner");
const cors_1 = __importDefault(require("cors"));
const syncDB_1 = require("./database/syncDB");
// Create App Instance
const app = (0, express_1.default)();
const corsOptions = {
    origin: "*", // Replace with the URL of your React app
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: false,
};
app.use((0, cors_1.default)(corsOptions));
// Run Seeder
(0, seeder_runner_1.SeederRunner)();
// Request Logger
app.use((0, morgan_1.default)("dev"));
// Body Parser
app.use(express_1.default.json(), express_1.default.urlencoded({ extended: false }));
// Routing
app.use("/", index_1.default);
app.use("*", (req, res, next) => {
    let response = {
        statusCode: http_status_1.default.NOT_FOUND,
        message: "مسیر یافت نشد",
        error: true,
        data: {},
    };
    return res.status(404).json(response);
});
// Run App
app.listen(configurations_1.configurations.app.port, () => {
    if (process.env.sync === "true") {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, syncDB_1.syncdb)();
        }))();
    }
    console.log(`Server running on port ${configurations_1.configurations.app.port}`);
});
