import { useEffect, useState } from "react";

// @Mui/Material
import { Box, Card, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// @UseForm
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types";

// @Components
import ButtonSizes from "../../components/Inputs/Button";
import SimpleTable from "../../components/Table";

// @Requests
import { useRandomUsers } from "../../requests";
import { columns, FormValues, initialValues, RandomUsers, Row, schema } from "./utils";

export const RandomUserGenerator = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [users, setUsers] = useState<RandomUsers[]>([]);
  const { control, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, username, email } = data;

    const searchUser = (user: RandomUsers) => {
      const { first, last } = user.name;
      const fullName = `${first} ${last}`.trim().toLowerCase();
      return (
        (name && fullName.startsWith(name.trim().toLowerCase())) ||
        (username && user.login.username.trim().toLowerCase().startsWith(username.trim().toLowerCase())) ||
        (email && user.email.trim().toLowerCase().startsWith(email.trim().toLowerCase()))
      );
    };

    const filteredUsers = users.filter(searchUser);
    setRows(
      filteredUsers.map((user) => ({
        image: <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
      })),
    );
  };

  const getRandomUsers = async () => {
    const response = await useRandomUsers(10);
    setUsers(response);
    setRows(
      response.map((user: RandomUsers) => ({
        image: <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
      })),
    );
  };

  const clearForm = () => {
    reset();
    setRows(
      users.map((user) => ({
        image: <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
      })),
    );
  };

  useEffect(() => {
    getRandomUsers();
  }, []);

  return (
    <Box component="main" flexGrow={1} py={8} pt={1}>
      <Grid container sx={{ padding: "1rem" }}>
        <Card sx={{ width: "100%", mb: "1rem" }}>
          <Grid component="form" onSubmit={handleSubmit(onSubmit)} container item spacing={2} sx={{ padding: "1rem" }}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="div" gutterBottom>
                Opções de busca
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name="Nome"
                    label="Nome"
                    inputProps={{ maxLength: 50 }}
                    fullWidth
                    size="small"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name="Username"
                    label="Username"
                    fullWidth
                    inputProps={{ maxLength: 50 }}
                    size="small"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    name="Email"
                    label="Email"
                    inputProps={{ maxLength: 200 }}
                    fullWidth
                    size="small"
                    onChange={onChange}
                    error={!!formState.errors.email}
                    helperText={formState.errors.email?.message}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} justifyContent="flex-end" display="flex" gap={2}>
              <ButtonSizes variant="outlined" size="medium" startIcon={<HighlightOffIcon />} onClick={clearForm}>
                Limpar
              </ButtonSizes>
              <ButtonSizes type="submit" variant="contained" size="medium" startIcon={<SearchIcon />}>
                Confirmar
              </ButtonSizes>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ width: "100%", mb: "1rem" }}></Card>
        <SimpleTable rows={rows} columns={columns} />
      </Grid>
    </Box>
  );
};
