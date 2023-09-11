import { useState } from "react";
import { Header } from "../Header";
import { Content } from "../Content";
type ShowModalProps = {
  login: boolean;
  register: boolean;
};
export const MainContainer = () => {
  const [showModal, setShowModal] = useState<ShowModalProps>({
    login: false,
    register: false,
  });

  const handleShowModal = (type: string) => {
    if (typeof type !== "string") {
      setShowModal({ login: false, register: false });
      return;
    }
    setShowModal((prev) => ({
      ...prev,
      [type]: !prev[type as keyof ShowModalProps],
    }));
  };

  return (
    <>
      <Header handleShowModal={handleShowModal} />
      <Content handleShowModal={handleShowModal} showModal={showModal} />
    </>
  );
};
