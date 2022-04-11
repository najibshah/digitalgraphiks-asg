import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const buttonList = [
  { label: "Electronics", link: "/electronics" },
  { label: "Men", link: "/men" },
  { label: "Women", link: "/women" },
  { label: "Home", link: "/home" },
  { label: "Beauty & Fragrance", link: "/beautyFragrance" },
  { label: "Baby & Toys", link: "/babyToys" },
  { label: "Grocery", link: "/grocery" },
  { label: "Sports", link: "/sports" },
  { label: "Bestsellers", link: "/bestsellers" },
  { label: "Sell on noon", link: "/sellOnNoon" },
];

export function MenuBar() {
  return (
    <Fragment>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          top: "auto",
          bottom: 0,
        }}
      >
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Grid>
            <Button
              variant="text"
              sx={{
                color: "black",
                fontWeight: "600",
                pr: 1,
              }}
            >
              Categories <ExpandMoreIcon />
            </Button>
            {buttonList.map((buttonData, index) => {
              return (
                <Link
                  key={index}
                  href={buttonData.link}
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontSize: "12px",
                      color: "black",
                      fontWeight: "600",
                      pr: 1,
                    }}
                  >
                    {buttonData.label}
                  </Button>
                </Link>
              );
            })}
          </Grid>
        </AppBar>
      </Box>
    </Fragment>
  );
}
