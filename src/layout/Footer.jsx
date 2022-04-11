import { Fragment } from "react";
import AppBar from "@mui/material/AppBar";

export function Footer() {
  return (
    <Fragment>
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
