import { useEffect, useState } from "react";

// @mui/material
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// @components
import Images from "../../components/Data display/Image";
import ButtonSizes from "../../components/Inputs/Button";

// @requests
import { useRandomDog } from "../../requests/index";

// @mui/icons
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";

export const RandomDog = () => {
  const [randomDog, setRandomDog] = useState("");

  const fetchRandomDog = async () => {
    const response = await useRandomDog();
    setRandomDog(response);
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <Grid container p={2}>
      <Grid item xs={12} mb={4}>
        <Card
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography variant="h6" component="h1">
            <PetsIcon /> Random Dog
          </Typography>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={1}>
            <ButtonSizes
              variant="contained"
              size="medium"
              type="submit"
              style={{ background: "#00A2A2" }}
              onClick={fetchRandomDog}
            >
              Refresh
            </ButtonSizes>

            <Tooltip
              title="Ao ser clicado, será retornado uma imagem aleatória da api Random Dog"
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
      <Grid item xs={12} p={1}>
        <Images
          component="img"
          image={randomDog}
          alt="Random dog"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "84vh",
            borderRadius: "10px",
          }}
        />
      </Grid>
    </Grid>
  );
};
