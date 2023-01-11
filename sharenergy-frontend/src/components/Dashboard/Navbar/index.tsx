import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { CardMedia, Grid, styled } from "@mui/material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardNavbarRoot = styled(AppBar)({
  backgroundColor: "#303030",
  boxShadow: "none",
});

type DashboardNavbar = {
  onSidebarOpen: () => void;
};

export const DashboardNavbar = (props: DashboardNavbar) => {
  const { onSidebarOpen, ...other } = props;
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("auth");
    localStorage.removeItem("remember");
    navigate("/");
  };

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
            justifyContent: "space-between",
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
                color: "#ffffff",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Grid
            sx={{
              display: {
                xs: "none",
                lg: "inline-flex",
              },
            }}
          ></Grid>

          <CardMedia
            component="img"
            image="/src/assets/logo_color.png"
            sx={{
              width: { xs: "40%", sm: "20%", md: "15%", lg: "15%" },
              float: "center",
            }}
          />

          <IconButton
            onClick={logout}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "inline-flex",
                color: "#ffffff",
              },
            }}
          >
            <LogoutIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};
