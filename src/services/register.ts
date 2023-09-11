import { post } from "../utils/fetch";

export const register = (body: any) =>
  post({
    url: "/users",
    values: body,
  });
