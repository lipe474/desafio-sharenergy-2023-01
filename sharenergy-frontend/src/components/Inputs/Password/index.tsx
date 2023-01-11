import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import { styled } from "@mui/material";

type PasswordProps = {
  id?: string;
  label: string;
  name: string;
  size?: "small" | "medium";
  variant?: "standard" | "filled" | "outlined";
  style?: React.CSSProperties;
  error: boolean;
  helperText: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CssInputLabel = styled(FormControl)({
  "& label.MuiInputLabel-outlined": {
    color: "gray",
  },
  "& .MuiOutlinedInput-input": {
    color: "#d6d8d9",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "#a7a8a9",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a7a8a9",
    },
  },
});

export default function InputAdornments(props: PasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <CssInputLabel size={props.size} variant={props.variant}>
      <InputLabel htmlFor="outlined-adornment-password" sx={{ color: "gray" }}>
        Password
      </InputLabel>
      <OutlinedInput
        id={props.id}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              style={{ color: "gray" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
        error={props.error}
        value={props.value}
        onChange={props.onChange}
      />{" "}
      {Boolean(props.error) && <FormHelperText error>{props.helperText}</FormHelperText>}
    </CssInputLabel>
  );
}
