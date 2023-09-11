import { get } from "../utils/fetch";

export const getPost = async () => await get({ url: "/posts" });

export const getPostsByUser = async (user: string) =>
  await get({ url: "/posts", value: `?author=${user}` });
