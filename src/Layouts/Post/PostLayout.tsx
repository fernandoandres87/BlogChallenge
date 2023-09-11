import { PropsWithChildren } from "react";
import { PostLayoutStyles } from "./PostLayout.styles";

export const PostLayout = ({ children }: PropsWithChildren) => (
  <PostLayoutStyles>{children}</PostLayoutStyles>
);
