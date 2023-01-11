import { FC } from "react";

import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";

import { NavItem } from "../NavItem";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PetsIcon from "@mui/icons-material/Pets";
import { useNavigate } from "react-router-dom";

const items = [
  {
    href: "/random-user-generator",
    icon: <AccountBoxIcon fontSize="small" />,
    title: "API Random User Generator",
  },
  {
    href: "/http-cat",
    icon: <PetsIcon fontSize="small" />,
    title: "API HTTP Cat",
  },
  {
    href: "/random-dog",
    icon: <PetsIcon fontSize="small" />,
    title: "API Random Dog",
  },
  {
    href: "/crud-backend",
    icon: <AccountBoxIcon fontSize="small" />,
    title: "API CRUD Backend",
  },
];

type DashboardSidebar = {
  onClose: () => void;
  open: boolean;
};

export const DashboardSidebar: FC<DashboardSidebar> = (props) => {
  const { open, onClose } = props;
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:1200px)");

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
            }}
            onClick={() => navigate("/random-user-generator")}
          >
            Desafio Sharenergy
          </Typography>
        </Box>
        <Divider
          sx={{
            borderColor: "#a7a8a9",
            my: 3,
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>

        <Divider
          sx={{
            borderColor: "#a7a8a9",
          }}
        />
      </Box>
    </>
  );

  if (matches) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#303030",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#303030",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
