import { RefObject, forwardRef } from "react";
import { BackdropProps } from "./Background.interface";
import { SCCHMBackdrop } from "./Background.style";

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ zIndex = 1 }, ref) => {
    return <SCCHMBackdrop zIndex={zIndex} ref={ref} />;
  }
);
