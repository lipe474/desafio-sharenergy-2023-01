import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

type TextFieldProps = {
  id?: string;
  label: string;
  multiline?: boolean;
  maxRows?: number;
  fullWidth?: boolean;
  name: string;
  size?: "small" | "medium";
  variant?: "standard" | "filled" | "outlined";
  error?: boolean;
  helperText?: string;
  value?: string;
  inputProps?: {
    maxLength: number;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CssTextField = styled(TextField)({
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

export default function MultilineTextFields(props: TextFieldProps) {
  return <CssTextField {...props} />;
}
