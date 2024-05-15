export interface ListMetaData {
  totalCount: number;
  totalPage?: number;
}

export interface IResponseData {
  data?: unknown;
  message?: string;
  statusCode?: number;
  error?: boolean;
  metadata?: ListMetaData;
}
