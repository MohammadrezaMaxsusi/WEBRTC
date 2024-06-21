import { listOptions } from "../dtos/requests/list-options.dto";

export function findAllOptionsHandler(data: listOptions) {
  let order = sortHandler(data);
  let limit = data.limit || 20;
  let offset = ((data.page || 1) - 1) * limit;

  return {
    order,
    limit,
    offset,
  };
}

function sortHandler(data: listOptions) {
  const DEFAULT_SORT_KEY = "createdAt";
  const DEFAULT_SORT_ORD = "DESC";

  let sortby: Array<[string, string]> = [];
  let sortkey: string;
  let sortval: "ASC" | "DESC";

  if (data.sort) {
    sortkey = data.sort;
  } else {
    sortkey = DEFAULT_SORT_KEY;
  }

  if (data.asc) {
    sortval = "ASC";
  } else {
    sortval = DEFAULT_SORT_ORD;
  }

  sortby.push([sortkey, sortval]);

  return sortby;
}
