import { Box, Stack } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useStyles } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
type Props = {
  children?: React.ReactNode;
  title?: string | null;
  breadcrumb?: {
    id: number;
    href?: string;
    title: string;
  }[];
};
const PageWithTitle: React.FC<Props> = ({
  children,
  title,
  breadcrumb = [],
}) => {
  const breadcrumbLength = breadcrumb?.length || 0;
  const { t } = useTranslation();
  const classes = useStyles();
  const isLast = (index: number) => {
    if (breadcrumbLength - 1 == index) return true;
    return false;
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box className={classes.pageContainer}>
        <Box className={classes.upSection}>
          <Stack direction={"row"} className={classes.titleContainer}>
            {/* <WebRoundedIcon /> */}
            <Typography className={classes.titleText}>{title}</Typography>
          </Stack>
          <Stack>
            <Breadcrumbs className={classes.breadCrump} aria-label="breadcrumb">
              <Link to="/" className={classes.breadCrumpItem}>
                <HomeRoundedIcon fontSize="inherit" />
                {t("Home")}
              </Link>
              {breadcrumb.map((link, index) => {
                if (isLast(index)) {
                  return (
                    <Typography
                      variant="body2"
                      key={link.id || index}
                      className={classes.lastBreadCrumpItem}
                    >
                      {link.title}
                    </Typography>
                  );
                }
                return (
                  <Link
                    key={link.id || index}
                    to={link.href || "/"}
                    className={classes.breadCrumpItem}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </Breadcrumbs>
          </Stack>
        </Box>
        <Box className={classes.content}>{children}</Box>
      </Box>
    </>
  );
};

export default PageWithTitle;
