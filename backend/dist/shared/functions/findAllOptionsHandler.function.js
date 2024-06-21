"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllOptionsHandler = void 0;
function findAllOptionsHandler(data) {
    let order = sortHandler(data);
    let limit = data.limit || 20;
    let offset = ((data.page || 1) - 1) * limit;
    return {
        order,
        limit,
        offset,
    };
}
exports.findAllOptionsHandler = findAllOptionsHandler;
function sortHandler(data) {
    const DEFAULT_SORT_KEY = "createdAt";
    const DEFAULT_SORT_ORD = "DESC";
    let sortby = [];
    let sortkey;
    let sortval;
    if (data.sort) {
        sortkey = data.sort;
    }
    else {
        sortkey = DEFAULT_SORT_KEY;
    }
    if (data.asc) {
        sortval = "ASC";
    }
    else {
        sortval = DEFAULT_SORT_ORD;
    }
    sortby.push([sortkey, sortval]);
    return sortby;
}
