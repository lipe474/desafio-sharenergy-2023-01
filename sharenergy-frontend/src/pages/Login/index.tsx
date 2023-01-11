// @react
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Controller, useForm } from "react-hook-form";

// @material
import { Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";

// @components
import Images from "../../components/Data display/Image";
import Password from "../../components/Inputs/Password";
import ButtonSizes from "../../components/Inputs/Button";
import CheckboxLabels from "../../components/Inputs/Checkbox";
import MultilineTextFields from "../../components/Inputs/TextField";

// @utils
import { schema } from "./utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

type Inputs = {
  username: string;
  password: string;
  checkbox: boolean;
};

export function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = sessionStorage.getItem("auth");
    const remember = localStorage.getItem("remember");

    if (auth || remember) {
      navigate("/random-user-generator");
    }
  }, []);

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      username: "",
      password: "",
      checkbox: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sessionStorage.setItem("auth", JSON.stringify(data.username));

    if (data.checkbox) {
      localStorage.setItem("remember", JSON.stringify(data.checkbox));
    }
    navigate("/random-user-generator");
  };

  const onErrors = (errors: any) => console.log(errors);

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ background: "#fff" }}
      display="flex"
      onSubmit={handleSubmit(onSubmit, onErrors)}
    >
      <Grid
        item
        xs={11}
        sm={10}
        md={7}
        lg={4}
        bgcolor="#303030"
        minHeight="40.1vh"
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
          m: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          color="white"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          Login <LockIcon />
        </Typography>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <MultilineTextFields
              label="Username"
              size="medium"
              value={value}
              onChange={onChange}
              name="username"
              error={Boolean(formState.errors?.username)}
              helperText={Boolean(formState.errors?.username) ? `${formState.errors?.username?.message}` : ""}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Password
              label="Password"
              size="medium"
              value={value}
              onChange={onChange}
              name="password"
              error={Boolean(formState.errors?.password)}
              helperText={Boolean(formState.errors?.password) ? `${formState.errors?.password?.message}` : ""}
            />
          )}
        />
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sm={7} md={5} lg={6}>
            <Controller
              control={control}
              name="checkbox"
              render={({ field: { onChange, value } }) => (
                <CheckboxLabels
                  label="Manter conectado"
                  labelPlacement="start"
                  defaultChecked={false}
                  color="#a7a8a9"
                  onChange={onChange}
                  value={value}
                  name="checkbox"
                />
              )}
            />
          </Grid>
        </Grid>
        <ButtonSizes
          variant="contained"
          size="medium"
          type="submit"
          style={{
            background: "#00A2A2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 1,
          }}
        >
          Confirmar <LoginIcon />
        </ButtonSizes>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
        <Images
          component="img"
          alt="Logo da empresa Sharenergy"
          image="/src/assets/logo_color.png"
          sx={{
            position: "relative",
            width: { xs: "40%", sm: "35%", md: "30%", lg: "20%" },
          }}
        />
      </Grid>
    </Grid>
  );
}
