import { wrapper } from "../../utils/wrapper";
import { mainUrl, urls } from "../../constants/urls";

export const getChatList = (params: { [key: string]: any }) => {
  let url = `${mainUrl}${urls.list}?`;
  Object.entries(params).forEach(([key, value]) => (url += `${key}=${value}&`));
  return wrapper("get", url, {
    accept: "application/json",
    version: "0.0"
  });
};

export const getMessages = (params: { [key: string]: any }) => {
  let url = `${mainUrl}${urls.message}?`;
  Object.entries(params).forEach(([key, value]) => (url += `${key}=${value}&`));
  return wrapper("get", url, {
    accept: "application/json",
    version: "0.0"
  });
};
