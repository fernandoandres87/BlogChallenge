import { forwardRef } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { getContextValues } from "../../utils/getContextValues";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar = () => {
  const { snackbar, handleSetSnackBar } = getContextValues();

  const handleCloseSnackBar = () => {
    handleSetSnackBar({ show: false });
  };
  return (
    <Snackbar
      open={snackbar.show}
      autoHideDuration={3000}
      onClose={handleCloseSnackBar}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleCloseSnackBar}
        severity={snackbar.severity}
        sx={{ width: "100%" }}
      >
        This is a success message!
      </Alert>
    </Snackbar>
  );
};
