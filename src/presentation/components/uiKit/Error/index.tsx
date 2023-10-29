import { Button, Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import ServerError from "assets/images/server-error.svg?url";
type Props = {
  title?: string | null;
  onClick?: () => void;
  component?: ReactNode | null;
};

const Error: FC<Props> = ({ title = "", onClick, component = null }) => {
  const { t } = useTranslation();
  return (
    <Grid
      item
      xs={12}
      container
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontFamily="YekanBakh"
    >
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {component || <img src={ServerError} alt="" width="200px" />}
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography style={{ marginBottom: "8px", fontFamily: "YekanBakh" }}>
          {title}
        </Typography>
      </Grid>
      {typeof onClick == "function" && (
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="error"
            size="medium"
            onClick={onClick}
          >
            {t("Try again")}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Error;
