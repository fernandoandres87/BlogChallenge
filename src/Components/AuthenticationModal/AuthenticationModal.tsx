import { PropsWithChildren, useRef } from "react";
import { Backdrop } from "../Backdrop";
import { Cross } from "../Icons";
import {
  CloseIcon,
  ContentModal,
  HeaderModal,
  WrapperModal,
} from "./AuthenticationModal.styles";

export type AuthenticationModalProps = {
  label: string;
  handleCloseModal: () => void;
};
export const AuthenticationModal = ({
  children,
  label,
  handleCloseModal,
}: PropsWithChildren<AuthenticationModalProps>) => {
  const modalBackdropRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Backdrop ref={modalBackdropRef} zIndex={1} />
      <WrapperModal>
        <ContentModal>
          <HeaderModal>
            <div>{label}</div>
            <CloseIcon onClick={handleCloseModal}>
              <Cross variant="regular" color="black" width="20" height="20" />
            </CloseIcon>
          </HeaderModal>
          {children}
        </ContentModal>
      </WrapperModal>
    </>
  );
};
