import axios from "axios";

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

export const wrapper = (
  method: "post" | "get" | "put" | "delete",
  url: string,
  headers?: { [key: string]: string }
) =>
  axios
    .request({
      method,
      url,
      headers
    })
    .then(checkResponse)
    .catch(catchError);
