import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

type FreeSoloProps = {
  freeSolo: boolean;
  options: any[];
  key: string;
  onChange: (event: React.ChangeEvent<{}>, value: string | null) => void;
  onInputChange: (event: React.ChangeEvent<{}>, value: string, reason: string) => void;
};

export default function SearchBar(props: FreeSoloProps) {
  return (
    <Autocomplete
      id="grouped-demo"
      freeSolo={props.freeSolo}
      options={props.options}
      getOptionLabel={(option) => option[props.key]}
      renderInput={(params) => <TextField {...params} label="Pesquisa" fullWidth />}
    />
  );
}
