import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import UserAvatar from "./UserAvatar.jsx";
import Logout from "@/features/authentication/components/Logout.jsx";
const drawerWidth = 240;

function Navbar(props) {
  const { window, user } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Stack onClick={handleDrawerToggle} sx={{ p: 2, gap: 2 }}>
      <UserAvatar />
      <Divider />
      <Logout />
    </Stack>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            {user ? (
              <Stack direction={"row"} alignItems={"center"}>
                <UserAvatar />
                <Typography>Welcome {user?.displayName}</Typography>
              </Stack>
            ) : (
              <Typography>Welcome to GitHub Auth</Typography>
            )}
            <Stack
              direction={"row"}
              sx={{ display: { xs: "none", sm: "flex" } }}
              columnGap={2}
              alignItems={"center"}
            >
              <Logout />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  user: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
  }),
};

export default Navbar;
