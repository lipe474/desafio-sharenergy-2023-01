import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material";

type CheckboxProps = {
  label: string;
  defaultChecked?: boolean;
  labelPlacement?: "start" | "end";
  color?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  name: string;
};

const CssCheckbox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    color: "#a7a8a9",
  },
});

export default function CheckboxLabels(props: CheckboxProps) {
  return (
    <FormGroup>
      <FormControlLabel
        labelPlacement={props.labelPlacement}
        label={props.label}
        control={
          <CssCheckbox
            defaultChecked={props.defaultChecked}
            sx={{ color: props.color }}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
          />
        }
        sx={{ color: props.color }}
      />
    </FormGroup>
  );
}
