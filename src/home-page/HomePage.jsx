import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import homepageAdBanner from "./assets/homepageTopBanner.png";
import mobilePromotionBanner from "./assets/mobilePromotionBanner.jpeg";

import { PromotionSlider, FashionBanner, CategoriesSlider } from "./";

export function HomePage() {
  return (
    <Box>
      {/* homepage promocode banner */}
      <Link href="/">
        <img src={homepageAdBanner} alt="" style={{ width: "100%" }} />
      </Link>
      <Link href="/" sx={{ display: { xs: "flex", md: "none" } }}>
        <img src={mobilePromotionBanner} alt="" style={{ width: "100%" }} />
      </Link>
      <Grid container sx={{ pl: { xs: 0, md: 8 } }}>
        {/* homepage promotion slider */}
        <Grid item xs={12} md={8}>
          <PromotionSlider />
        </Grid>
        {/* homepage fashion banner */}
        <Grid item md={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <FashionBanner />
        </Grid>
      </Grid>
      <CategoriesSlider />
    </Box>
  );
}
