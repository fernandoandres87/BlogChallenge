import { MouseEvent, PropsWithChildren, useRef } from "react";
import { CustomButton } from "./Button.style";

export type ButtonProps = PropsWithChildren & {
  onClick: (e: any) => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const BUTTON_REF = useRef<HTMLButtonElement>(null);
  const handleClick = (e: any) => {
    onClick(e);
  };
  return (
    <CustomButton
      onClick={handleClick}
      disabled={disabled}
      ref={BUTTON_REF}
      disableRipple
      onMouseOut={(event: MouseEvent<HTMLButtonElement>) =>
        event.currentTarget.blur()
      }
    >
      {children}
    </CustomButton>
  );
};
