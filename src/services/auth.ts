import { get } from "../utils/fetch";

export const auth = (email: string) => get({ url: "/users", value: email });
