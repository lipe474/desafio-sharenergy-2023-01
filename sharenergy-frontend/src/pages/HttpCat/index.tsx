import { useState } from "react";

// @Utils
import { HTTP_STATUS_CODES } from "./utils";

// @Components
import Images from "../../components/Data display/Image";

// @MUI
import { Box } from "@mui/system";
import { Autocomplete, Card, Grid, IconButton, TextField, Tooltip, Typography } from "@mui/material";

// @Icons
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";

export function HttpCat() {
  const [statusCode, setStatusCode] = useState(HTTP_STATUS_CODES[0]);

  const handleChange = (value: any) => {
    setStatusCode(value);
  };

  return (
    <Grid container p={2}>
      <Grid item xs={12} mb={4}>
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h4" component="h1">
            <PetsIcon /> HTTP Cat
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Autocomplete
              options={HTTP_STATUS_CODES}
              getOptionLabel={(option) => option.code + " - " + option.message}
              sx={{ width: 300 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Status Code" />}
              onChange={(event, value) => handleChange(value)}
              disableClearable
            />
            <Tooltip
              title="HTTP Status Codes são códigos de resposta de requisições HTTP. Eles são divididos em 5 classes: Informações, Sucesso, Redirecionamento, Erro do cliente e Erro do servidor."
              placement="top"
              arrow
            >
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Images
            component="img"
            alt={`Imagens vindas da API HTTP Cat, que mostra imagens de gatos para cada código de status HTTP. Código de status: ${statusCode}`}
            image={`https://http.cat/${statusCode.code}`}
            sx={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
