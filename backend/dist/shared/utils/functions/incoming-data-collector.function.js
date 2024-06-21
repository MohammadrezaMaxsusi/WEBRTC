"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomingDataCollector = void 0;
const incomingDataCollector = (req) => {
    let data;
    if (req.method === "GET") {
        data = Object.assign(Object.assign({}, req.params), req.query);
    }
    else {
        data = Object.assign(Object.assign(Object.assign({}, req.body), req.params), req.query);
    }
    if (data.asc && typeof data.asc === "string") {
        if (data.asc.toLowerCase() === "true") {
            data.asc = true;
        }
        else if (data.asc.toLowerCase() === "false") {
            data.asc = false;
        }
    }
    return data;
};
exports.incomingDataCollector = incomingDataCollector;
