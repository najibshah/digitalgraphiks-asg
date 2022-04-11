import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import AppLogo from "../../assets/favicon.ico";

export function MobileBanner() {
  const [bannerVisibility, setBannerVisibility] = useState(true);
  return (
    <Toolbar
      sx={{
        display: { xs: ` ${bannerVisibility ? "flex" : "none"}`, md: "none" },
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#87CEEB",
      }}
    >
      <Button
        variant="text"
        sx={{ color: "black", textTransform: "capitalize" }}
        onClick={() => setBannerVisibility(false)}
      >
        <CloseIcon />
      </Button>
      <img src={AppLogo} alt="website logo" style={{ height: "25px" }} />
      <Box>
        <Typography variant="subtitle2">noon is better on the app</Typography>
        <Typography variant="caption">Get app-exclusive deals.</Typography>
      </Box>
      <Button
        variant="contained"
        sx={{ color: "white", textTransform: "capitalize" }}
      >
        Open
      </Button>
    </Toolbar>
  );
}
