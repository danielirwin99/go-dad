import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BsPerson, BsArrowRight } from "react-icons/bs";
import { BiHelpCircle, BiCart } from "react-icons/bi";
import godaddy from "../../assets/go-daddy.png";
import "../../styles/NavBar.css";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function BurgerBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        style={{ color: "white" }}
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 1, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "350px",
            boxSizing: "border-box",
            display: "flex",
            padding: "10px 10px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <a href="/">
            <img className="navLeft__logo burger__logo" src={godaddy} alt="" />
          </a>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <div className="burger__list">
          <div className="burger__list--container">
            <div className="burger__list--wrapper">
              <h4 className="burger__list--header">Domain Names</h4>
              <BsArrowRight />
            </div>
            <div className="burger__list--wrapper">
              <h4 className="burger__list--header">Websites & Hosting</h4>
              <BsArrowRight />
            </div>
            <div className="burger__list--wrapper">
              <h4 className="burger__list--header">Email & Marketing</h4>
              <BsArrowRight />
            </div>
          </div>
          <ul className="burger__links--wrapper">
            <li className="burger__links">
              <BiHelpCircle />
              <p className="burger__link">Help Center</p>
            </li>
            <li className="burger__links">
              <BsPerson />
              <p className="burger__link">Account</p>
            </li>
            <li className="burger__links">
              <BiCart />
              <p className="burger__link">Basket</p>
            </li>
          </ul>
        </div>
      </Drawer>
    </Box>
  );
}
