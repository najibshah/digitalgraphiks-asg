import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import fashionBannerMen from "../assets/fashionBannerLeft.png";
import fashionBannerWomen from "../assets/fashionBannerRight.png";

export function FashionBanner() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Link href="/mensFashion">
          <img src={fashionBannerMen} alt="" style={{ width: "100%" }} />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link href="/womensFashion">
          <img src={fashionBannerWomen} alt="" style={{ width: "100%" }} />
        </Link>
      </Grid>
    </Grid>
  );
}
