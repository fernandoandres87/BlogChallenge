import { Button } from "../../Components/Button";
import { getContextValues } from "../../utils/getContextValues";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { AvatarCustom, Content, LogoutModalStyle, LogoutStyle } from "./styles";
import { Dispatch, FC, SetStateAction } from "react";

type HeaderButtonsActionsProps = {
  showModalLogout: boolean;
  setShowModalLogout: Dispatch<SetStateAction<boolean>>;
  handleShowModal: (value: string) => void;
  handleLogout: () => void;
};
export const HeaderButtonsActions: FC<HeaderButtonsActionsProps> = ({
  showModalLogout,
  setShowModalLogout,
  handleShowModal,
  handleLogout,
}) => {
  const { userEmail } = getContextValues();

  return (
    <Content>
      {!userEmail ? (
        <>
          <Button onClick={() => handleShowModal("register")}>Registrar</Button>
          <Button onClick={() => handleShowModal("login")}>Login</Button>
        </>
      ) : (
        <>
          <AvatarCustom
            aria-label="recipe"
            onClick={() => setShowModalLogout((prev) => !prev)}
          >
            {userEmail.charAt(0).toUpperCase()}
          </AvatarCustom>
          {showModalLogout && (
            <LogoutModalStyle onClick={handleLogout}>
              <LogoutStyle>
                <LogoutIcon />
                <p>Logout</p>
              </LogoutStyle>
            </LogoutModalStyle>
          )}
        </>
      )}
    </Content>
  );
};
