import { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
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

export function MobileBottomAppBar() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          display: { xs: "flex", md: "none" },
          top: "auto",
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          {buttonList.map((buttonData, index) => {
            return (
              <Link
                key={index}
                href={buttonData.link}
                sx={{ textDecoration: "none" }}
              >
                <IconButton
                  sx={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  color="inherit"
                  aria-label="open drawer"
                >
                  {buttonData.icon}
                  <Typography variant="caption" sx={{ color: "black" }}>
                    {buttonData.label}
                  </Typography>
                </IconButton>
              </Link>
            );
          })}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
