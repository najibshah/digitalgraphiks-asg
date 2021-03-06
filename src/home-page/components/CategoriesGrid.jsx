import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { categoryGridImages } from "../assets/categoryGridImages/categoryGrid";

export function CategoriesGrid() {
  return (
    <Box sx={{ backgroundColor: "#EBEBEB" }}>
      <Grid
        container
        rowSpacing={1}
        sx={{
          textAlign: "center",
          py: 2.5,
        }}
      >
        {categoryGridImages.map((imageData, index) => (
          <Grid item xs={3}>
            <img src={imageData.image} alt="" style={{ width: "80%" }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
