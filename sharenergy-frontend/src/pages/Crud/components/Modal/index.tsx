import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { Clients, Snackbar, style } from "../../utils";
import ButtonSizes from "../../../../components/Inputs/Button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues, initialValues, schema } from "../../utils";
import { MaskCpf } from "../../../../utils/validateCpf";
import { SubmitHandler } from "react-hook-form/dist/types";
import { createClient, updateClient } from "../../../../requests";
import CustomizedSnackbars from "../../../../components/Feedback/Snackbar";
import { TextField } from "@mui/material";
import { styled } from "@mui/material";

type ModalProps = {
  client?: Clients;
  open: boolean;
  setOpenModal: () => void;
};

export default function BasicModal(props: ModalProps) {
  const [openSnack, setOpenSnack] = useState<Snackbar>({
    open: false,
    severity: "error",
    message: "",
  });

  const { control, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { name, email, phone, address, cpf } = data;
    const response = props.client
      ? await updateClient(props.client.id, data)
      : await createClient(name, email, phone, address, cpf);
    if (response?.status === 201 || response?.status === 204) {
      setOpenSnack({
        open: true,
        message: props.client ? "Cliente atualizado com sucesso" : "Cliente cadastrado com sucesso!",
        severity: "success",
      });
      reset();
      return;
    }
    setOpenSnack({ ...openSnack, open: true, message: "Erro ao tentar realizar a operação!", severity: "error" });
  };

  const CssTextField = styled(TextField)({
    "& label.MuiInputLabel-outlined": {
      color: "gray",
    },
    "& .MuiOutlinedInput-input": {
      color: "#3c3c3c",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "#3c3c3c",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3c3c3c",
      },
    },
  });

  useEffect(() => {
    if (props.client) {
      reset({
        name: props.client.name,
        email: props.client.email,
        phone: props.client.phone,
        address: props.client.address,
        cpf: props.client.cpf,
      });
    }
  }, [props.client]);

  return (
    <div>
      <CustomizedSnackbars
        severity={openSnack.severity}
        autoHideDuration={6000}
        onClose={() => {
          setOpenSnack({ ...openSnack, open: false });
        }}
        open={openSnack.open}
        message={openSnack.message}
      />
      <Modal
        open={props.open}
        onClose={props.setOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid component="form" container spacing={2} onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12} justifyContent="center" display="flex">
              <Typography variant="h6"> Cadastre um novo cliente</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Nome"
                    name="name"
                    fullWidth
                    helperText={formState.errors.name?.message}
                    error={!!formState.errors.name}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Email"
                    name="email"
                    fullWidth
                    helperText={formState.errors.email?.message}
                    error={!!formState.errors.email}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Telefone"
                    name="phone"
                    fullWidth
                    helperText={formState.errors.phone?.message}
                    error={!!formState.errors.phone}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Controller
                control={control}
                name="cpf"
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Cpf"
                    name="cpf"
                    fullWidth
                    helperText={formState.errors.cpf?.message}
                    error={!!formState.errors.cpf}
                    inputProps={{ maxLength: 14 }}
                    onChange={(e) => {
                      onChange(MaskCpf(e.target.value));
                    }}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="address"
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Endereço"
                    name="address"
                    fullWidth
                    helperText={formState.errors.address?.message}
                    error={!!formState.errors.address}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <ButtonSizes size="large" variant="outlined" fullWidth onClick={props.setOpenModal}>
                Cancelar
              </ButtonSizes>
            </Grid>
            <Grid item xs={6}>
              <ButtonSizes
                size="large"
                variant="contained"
                type="submit"
                fullWidth
                style={{ background: "rgba(0, 162, 162, 0.8)" }}
              >
                Salvar
              </ButtonSizes>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
