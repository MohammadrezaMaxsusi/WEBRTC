import { Types, isValidObjectId } from "mongoose";
import { RequestWithPayload } from "../../interfaces/request-with-payload.interface";

export const incomingDataCollector = (req: RequestWithPayload) => {
  let data: any;
  if (req.method === "GET") {
    data = {
      ...req.params,
      ...req.query,
    };
  } else {
    data = {
      ...req.body,
      ...req.params,
      ...req.query,
    };
  }

  if (data.asc && typeof data.asc === "string") {
    if ((data.asc as string).toLowerCase() === "true") {
      data.asc = true;
    } else if ((data.asc as string).toLowerCase() === "false") {
      data.asc = false;
    }
  }

  return data;
};
