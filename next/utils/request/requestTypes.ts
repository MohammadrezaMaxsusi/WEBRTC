export interface KeyValueType {
  id: number;
  value: string | number;
}

export const contentTypes = {
  applicationJson: "application/json",
  applicationFormUrlEncoded: "application/x-www-form-urlencoded",
  applicationFormData: "multipart/form-data",
};
