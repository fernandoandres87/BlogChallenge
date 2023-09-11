import { FC, useState } from "react";
import { HeaderNavigation, HeaderButtonsActions } from "../../Components";
import { HeaderLayout } from "../../Layouts/Header";
import { useLocalStorage } from "../../hook";
import { getContextValues } from "../../utils";

type HeaderProps = {
  handleShowModal: (value: string) => void;
};
export const Header: FC<HeaderProps> = ({ handleShowModal }) => {
  const localstorage = useLocalStorage();
  const [showModalLogout, setShowModalLogout] = useState(false);
  const { handleSetSnackBar, handleSetUserEmail, handleSetSection } =
    getContextValues();

  const handleLogout = () => {
    handleSetUserEmail("");
    handleSetSnackBar({ show: true, severity: "success" });
    handleSetSection("home");
    localstorage.removeLocalStorage("user");
    localstorage.removeLocalStorage("favorite");
    setShowModalLogout(false);
  };

  return (
    <HeaderLayout>
      <HeaderNavigation />
      <HeaderButtonsActions
        handleLogout={handleLogout}
        handleShowModal={handleShowModal}
        setShowModalLogout={setShowModalLogout}
        showModalLogout={showModalLogout}
      />
    </HeaderLayout>
  );
};
