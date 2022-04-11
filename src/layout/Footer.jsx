import { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FaceIcon from "@mui/icons-material/Face";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";

const buttonList = [
  { label: "Home", link: "/", icon: <HomeIcon /> },
  { label: "Categories", link: "/categories", icon: <CategoryIcon /> },
  {
    label: "Fashion Deals",
    link: "/fashionDeals",
    icon: <CheckroomIcon />,
  },
  { label: "Account", link: "/account", icon: <FaceIcon /> },
  { label: "Cart", link: "/cart", icon: <ShoppingCartIcon /> },
];

export function Footer() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          display: { xs: "none", md: "flex" },
          top: "auto",
          bottom: 0,
          backgroundColor: "gray",
          height: "100px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Footer</p>
      </AppBar>
    </Fragment>
  );
}
