import Button from "@mui/material/Button";

type ButtonProps = {
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  startIcon?: React.ReactNode;
  fullWidth?: boolean;
};

export default function ButtonSizes(props: ButtonProps) {
  return (
    <Button
      variant={props.variant}
      size={props.size}
      style={props.style}
      type={props.type}
      onClick={props.onClick}
      startIcon={props.startIcon}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </Button>
  );
}
