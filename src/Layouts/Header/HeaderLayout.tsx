import { PropsWithChildren } from "react";
import { Wrapper } from "./HeaderLayout.styles";

export const HeaderLayout = ({ children }: PropsWithChildren) => (
  <Wrapper>{children}</Wrapper>
);
