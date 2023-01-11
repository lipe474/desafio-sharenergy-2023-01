import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  code: string[];
  message?: string[];
  value: string;
  children: React.ReactNode;
  onChange: (event: SelectChangeEvent) => void;
};

export default function SelectAutoWidth(props: Props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          label="Status Code"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.code.map((item) => (
            <MenuItem value={item}>{props.message}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
