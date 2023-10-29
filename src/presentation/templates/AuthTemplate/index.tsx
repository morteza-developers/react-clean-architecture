// components
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Suspense } from "react";
// constants
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";
import { useStyles } from "./AuthTemplate.styled";
import { LinearProgress } from "@mui/material";
// import { authRoutes } from "pages/routes";
import { Routes } from "react-router-dom";
import useElements from "presentation/hook/elements";
import AnimateGroup from "presentation/components/uiKit/AnimateGroup";
import { authRoutes } from "presentation/pages/routes";
// icons

export const DRAWER_WIDTH = 250;

type Props = {
  children?: ReactNode;
};
/**
 * @component AuthTemplate
 * @param children ReactNode
 * @returns ReactNode
 */
function AuthTemplate({ children }: Props) {
  const { t } = useTranslation();
  const classes: any = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Suspense
          fallback={<LinearProgress color="secondary" className="loading" />}
        >
          <Container maxWidth="lg">
            <AnimateGroup>
              <div className={classes.authCard}>
                <Routes>{useElements(authRoutes())}</Routes>
              </div>
            </AnimateGroup>
          </Container>
        </Suspense>
      </div>
      <MuiAppBar
        component="footer"
        position="relative"
        color="inherit"
        elevation={2}
        className={classes.footer}
      >
        <Toolbar sx={{ flexWrap: "wrap", textAlign: "center" }}></Toolbar>
      </MuiAppBar>
    </div>
  );
}

export default AuthTemplate;
