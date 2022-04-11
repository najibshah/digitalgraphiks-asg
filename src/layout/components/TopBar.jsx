import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FaceIcon from "@mui/icons-material/Face";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CssBaseline from "@mui/material/CssBaseline";
import AppLogo from "../../assets/logo192.svg";
import countryFlag from "../../assets/ae.svg";

import { SearchField } from "./";

export function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static">
        {/*Logo, Search Bar and user menu */}
        <Toolbar sx={{ backgroundColor: { xs: "white", md: "#FEEE00" } }}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="website logo"
            sx={{ mr: 2 }}
          >
            <img src={AppLogo} alt="website logo" style={{ height: "40px" }} />
          </IconButton>
          <Button
            variant="text"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={countryFlag} alt="" />
            <p
              style={{
                margin: "0 0 0 10px",
                fontSize: "11px",
                color: "black",
                textAlign: "initial",
                textTransform: "capitalize",
              }}
            >
              Deliver to <b>Dubai</b>
            </p>
            <ExpandMoreIcon />
          </Button>
          <SearchField />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              <b> العربية </b>
            </Button>

            <Button
              variant="text"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              <b> Sign In </b>
              <FaceIcon sx={{ fontSize: 20, ml: 1 }} />
            </Button>
            <Button
              variant="text"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              <b>Cart</b> <ShoppingCartIcon sx={{ fontSize: 20, ml: 1 }} />
            </Button>
          </Box>
        </Toolbar>
        {/* Desktop to mobile top bar menu (Deliver to dubai) button shift */}
        <Toolbar
          sx={{ backgroundColor: "white", display: { xs: "flex", md: "none" } }}
        >
          <Button
            variant="text"
            sx={{
              color: "black",
              textTransform: "capitalize",
            }}
          >
            Deliver To Dubai <ExpandMoreIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
