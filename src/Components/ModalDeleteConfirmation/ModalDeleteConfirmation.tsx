import { FC } from "react";
import { Button } from "../Button";
import {
  WrapperButtons,
  WrapperModalDelete,
} from "./ModalDeleteConfirmation.styles";

type ModalDeleteConfirmationProps = {
  onClose: () => void;
  onConfirm: (value: number) => void;
  postId: number;
};

export const ModalDeleteConfirmation: FC<ModalDeleteConfirmationProps> = ({
  onClose,
  onConfirm,
  postId,
}) => {
  return (
    <WrapperModalDelete>
      <p>Delete Post</p>
      <span>Are you sure you want to delete the post?</span>
      <WrapperButtons>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onConfirm(postId)}>Confirm</Button>
      </WrapperButtons>
    </WrapperModalDelete>
  );
};
