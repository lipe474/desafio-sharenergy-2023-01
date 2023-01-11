import { useEffect, useState } from "react";

// @Mui/Material
import { Box, Card, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// @UseForm
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types";

// @Components
import ButtonSizes from "../../components/Inputs/Button";
import SimpleTable from "../../components/Table";

// @Requests
import { Clients, Column, columns, FormValues, initialValues, Row, schema } from "./utils";
import BasicModal from "./components/Modal";
import { deleteClient, getClients } from "../../requests";
import VirtualizedTable from "../../components/Virtualized Table";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export const Crud = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [clients, setClients] = useState<Clients[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [clientId, setClientId] = useState<Clients>();

  const getAllClients = async (amount: number, skip: number) => {
    const response = await getClients(amount, skip);
    response?.data && setClients(response.data);
    setRows(
      response?.data[0].map((client: Clients) => ({
        name: `${client.name}`,
        email: client.email,
        phone: client.phone,
        actions: (
          <Grid>
            <IconButton
              onClick={() => {
                deleteClientById(client.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setOpenModal(true);
                setClientId(client);
              }}
            >
              <EditIcon />
            </IconButton>
          </Grid>
        ),
      })),
    );
    console.log(response?.data);
  };

  const handleChangePage = async (event: unknown, newPage: number) => {
    await getAllClients(rowsPerPage, newPage * rowsPerPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await getAllClients(+event.target.value, 0);
    setRowsPerPage(+event.target.value);
  };

  const deleteClientById = async (id: string) => {
    await deleteClient(id);
    await getAllClients(rowsPerPage, page);
  };

  useEffect(() => {
    getAllClients(rowsPerPage, page);
  }, []);

  return (
    <Box component="main" flexGrow={1} py={8} pt={1}>
      <BasicModal
        open={openModal}
        setOpenModal={() => {
          setOpenModal(false);
        }}
        client={clientId}
      />
      <Grid container sx={{ padding: "1rem" }}>
        <Card sx={{ width: "100%", mb: "1rem" }}>
          <Grid component="form" container item spacing={2} sx={{ padding: "1rem" }}>
            <Grid item xs={12}>
              <Grid item xs={12} justifyContent="space-between" alignItems="center" display="flex" gap={2}>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <PersonIcon fontSize="large" />
                  Clientes
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => setOpenModal(true)}
                  sx={{ bgcolor: "rgba(0, 162, 162, 0.8)" }}
                >
                  Adicionar Cliente
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ width: "100%", mb: "1rem" }}></Card>
        <VirtualizedTable
          count={(clients[1] as unknown as number) || 10}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleChangePage={handleChangePage}
          rows={rows}
          columns={columns}
          rowsPerPage={rowsPerPage}
          page={page}
        />
      </Grid>
    </Box>
  );
};
