import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";
import { SPACING_HALF } from "core/utils/constants/spacing";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ margin: "24px" }}>
      <Helmet>
        <title>{t("Dashboard")}</title>
      </Helmet>
      <Grid container spacing={SPACING_HALF}>
        <Grid item xs={12}>
          <Typography fontSize="19px" fontWeight={400}>
            {t("Welcome to the admin panel")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
