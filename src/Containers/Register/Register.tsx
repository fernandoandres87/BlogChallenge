import { register } from "../../services/register";
import { getContextValues } from "../../utils/getContextValues";
import { useLocalStorage } from "../../hook";
import {
  AuthenticationModal,
  SignUp,
} from "../../Components/AuthenticationModal";

export const Register = ({ handleCloseModal }: any) => {
  const { handleSetSnackBar, handleSetUserEmail } = getContextValues();
  const localStorage = useLocalStorage();

  const handleRegister = async (user: any) => {
    const res = await register(user);
    if (res) {
      handleSetSnackBar({ show: true, severity: "success" });
      localStorage.setLocalStorage("user", user.username);
      handleSetUserEmail(user.username);
      handleCloseModal();
    }
  };
  return (
    <AuthenticationModal label="SignUp" handleCloseModal={handleCloseModal}>
      <SignUp handleRegister={handleRegister} />
    </AuthenticationModal>
  );
};
