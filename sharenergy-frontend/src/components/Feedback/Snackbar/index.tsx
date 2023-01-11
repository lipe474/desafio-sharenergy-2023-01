import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type SnackbarProps = {
  open: boolean;
  autoHideDuration: number;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  severity: "success" | "error" | "info" | "warning";
  message: string;
};

export default function CustomizedSnackbars(props: SnackbarProps) {
  return (
    <Snackbar open={props.open} autoHideDuration={props.autoHideDuration} onClose={props.onClose}>
      <Alert onClose={props.onClose} severity={props.severity} sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}
