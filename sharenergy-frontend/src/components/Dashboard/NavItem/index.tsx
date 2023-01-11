import { Box, Button, ListItem } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type NavItem = {
  href: string;
  icon: React.ReactNode;
  title: string;
};

export const NavItem = (props: NavItem) => {
  const { href, icon, title, ...others } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const active = href ? location.pathname === href : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <Button
        component="a"
        startIcon={icon}
        disableRipple
        onClick={() => navigate(href)}
        sx={{
          backgroundColor: "#00A2A2",
          borderRadius: 1,
          color: active ? "#303030" : "#ffffff",
          fontWeight: "fontWeightBold",
          justifyContent: "flex-start",
          px: 3,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButton-startIcon": {
            color: active ? "#303030" : "#ffffff",
          },
          "&:hover": {
            backgroundColor: "rgba(0, 162, 162, 0.8)",
          },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            textAlign: "left",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Box>
      </Button>
    </ListItem>
  );
};
