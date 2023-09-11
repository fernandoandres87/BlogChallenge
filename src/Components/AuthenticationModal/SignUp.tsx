import { useState, FC, ChangeEvent, MouseEvent } from "react";
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
import { isEmail } from "../../utils/validations";
import {
  WrapperFormComponents,
  StackCustom,
} from "./AuthenticationModal.styles";

type SignUpProps = {
  handleRegister: (user: User) => void;
};

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

type Errors = {
  username: boolean;
  email: boolean;
  password: boolean;
};

export const SignUp: FC<SignUpProps> = ({ handleRegister }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<User>({
    id: 0,
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({
    username: false,
    email: false,
    password: false,
  });

  const [formValid, setFormValid] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleInputChange =
    (name: keyof User) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const errorHandlers = {
    username: () => setErrors({ ...errors, username: !formData.username }),
    email: () => setErrors({ ...errors, email: !isEmail(formData.email) }),
    password: () =>
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: !(
          formData.password &&
          formData.password.length >= 5 &&
          formData.password.length <= 20
        ),
      })),
  };

  const handleBlur = (name: keyof Omit<User, "id">) => () => {
    const errorHandler = errorHandlers[name];
    if (errorHandler) {
      errorHandler();
    }
  };

  const handleSubmit = () => {
    setSuccess(null);

    const { username, email, password } = formData;

    if (errors.username || !username) {
      setFormValid(
        "Username is set btw 5 - 15 characters long. Please Re-Enter"
      );
      return;
    }

    if (errors.email || !email) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    if (errors.password || !password) {
      setFormValid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }

    setFormValid(null);

    setSuccess("Form Submitted Successfully");

    handleRegister({
      id: Math.floor(Math.random() * 100),
      username,
      password,
      email,
    });
  };

  return (
    <div>
      <WrapperFormComponents>
        <TextField
          error={errors.username}
          label="Username"
          id="userNameRegister"
          variant="standard"
          sx={{ width: "100%" }}
          size="small"
          value={formData.username}
          InputProps={{}}
          onChange={handleInputChange("username")}
          onBlur={handleBlur("username")}
        />
      </WrapperFormComponents>

      <WrapperFormComponents>
        <TextField
          label="Email Address"
          fullWidth
          error={errors.email}
          id="emailRegister"
          variant="standard"
          sx={{ width: "100%" }}
          value={formData.email}
          InputProps={{}}
          size="small"
          onBlur={handleBlur("email")}
          onChange={handleInputChange("email")}
        />
      </WrapperFormComponents>

      <WrapperFormComponents>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel error={errors.password} htmlFor="passwordRegister">
            Password
          </InputLabel>
          <Input
            error={errors.password}
            onBlur={handleBlur("password")}
            id="passwordRegister"
            type={showPassword ? "text" : "password"}
            onChange={handleInputChange("password")}
            value={formData.password}
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
          SignUp
        </Button>
      </WrapperFormComponents>

      {formValid && (
        <StackCustom spacing={2}>
          <Alert severity="error">{formValid}</Alert>
        </StackCustom>
      )}

      {success && (
        <StackCustom spacing={2}>
          <Alert severity="success">{success}</Alert>
        </StackCustom>
      )}
    </div>
  );
};
