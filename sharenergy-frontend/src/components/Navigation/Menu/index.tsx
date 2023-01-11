import { Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Box } from "@mui/system";

type MenuProps = {
  primary: string;
  children: React.ReactNode;
};

export default function Menu(props: MenuProps) {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Divider />

          <Box flex={1} flexDirection="column" display="flex" justifyContent="center">
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>Oi</Icon>
                </ListItemIcon>
                <ListItemText primary={props.primary} />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
