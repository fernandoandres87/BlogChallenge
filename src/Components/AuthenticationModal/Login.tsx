import { useState, FC } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import {
  WrapperFormComponents,
  StackCustom,
} from "./AuthenticationModal.styles";

interface User {
  username: string;
  password: string;
}

interface Props {
  handleLogin: (value: User) => void;
}

export const Login: FC<Props> = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: false,
    passwordError: false,
    formValid: null as null | string,
    success: null as null | boolean | string,
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailBlur = () => {
    if (!formData.username) {
      setErrors((prev) => ({ ...prev, emailError: true }));
    } else {
      setErrors((prev) => ({ ...prev, emailError: false }));
    }
  };

  const handlePasswordBlur = () => {
    const { password } = formData;
    if (!password || password.length < 5 || password.length > 20) {
      setErrors((prev) => ({ ...prev, passwordError: true }));
    } else {
      setErrors((prev) => ({ ...prev, passwordError: false }));
    }
  };

  const handleSubmit = () => {
    const { username, password } = formData;

    if (errors.emailError || !username) {
      setErrors((prev) => ({
        ...prev,
        formValid: "Email is Invalid. Please Re-Enter",
      }));
      return;
    }

    if (errors.passwordError || !password) {
      setErrors((prev) => ({
        ...prev,
        formValid:
          "Password is set btw 5 - 20 characters long. Please Re-Enter",
      }));
      return;
    }

    setErrors((prev) => ({
      ...prev,
      formValid: null,
      success: "Login successful!",
    }));

    handleLogin({ username, password });
  };

  return (
    <>
      <WrapperFormComponents>
        <TextField
          label="User name"
          fullWidth
          error={errors.emailError}
          variant="standard"
          sx={{ width: "100%" }}
          value={formData.username}
          InputProps={{}}
          size="small"
          onBlur={handleEmailBlur}
          onChange={handleInputChange}
          name="username"
        />
      </WrapperFormComponents>
      <WrapperFormComponents>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel error={errors.passwordError} htmlFor="loginPassword">
            Password
          </InputLabel>
          <Input
            error={errors.passwordError}
            onBlur={handlePasswordBlur}
            id="loginPassword"
            type={showPassword ? "text" : "password"}
            onChange={handleInputChange}
            value={formData.password}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </WrapperFormComponents>

      <WrapperFormComponents changeMargin>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </WrapperFormComponents>

      {errors.formValid && (
        <StackCustom spacing={2}>
          <Alert severity="error">{errors.formValid}</Alert>
        </StackCustom>
      )}

      {errors.success && (
        <StackCustom spacing={2}>
          <Alert severity="success">{errors.success}</Alert>
        </StackCustom>
      )}
    </>
  );
};
