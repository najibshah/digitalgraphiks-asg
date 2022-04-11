import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";

import homepageAdBanner from "./assets/homepageTopBanner.png";
import mobilePromotionBanner from "./assets/mobilePromotionBanner.jpeg";

import {
  PromotionSlider,
  FashionBanner,
  CategoriesSlider,
  CategoriesGrid,
  RecommendationSlider,
} from "./";

export function HomePage() {
  return (
    <Box>
      <CssBaseline />
      <Link href="/">
        <img src={homepageAdBanner} alt="" style={{ width: "100%" }} />
      </Link>
      <Link href="/" sx={{ display: { xs: "flex", md: "none" } }}>
        <img src={mobilePromotionBanner} alt="" style={{ width: "100%" }} />
      </Link>
      <Grid container>
        <Grid item sx={{ width: { xs: "100%", md: "70%" } }}>
          <PromotionSlider />
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "flex" }, width: "30%" }}>
          <FashionBanner />
        </Grid>
      </Grid>
      <CategoriesSlider />
      <CategoriesGrid />
      <RecommendationSlider />
    </Box>
  );
}
