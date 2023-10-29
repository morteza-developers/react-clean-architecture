import { ReactNode, Suspense } from "react";

// components
import Container from "@mui/material/Container";
import { LinearProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Routes, useNavigate } from "react-router-dom";
import { Chart as ChartJS } from "chart.js";
import { useStyles } from "./DefaultTemplateStyles";
import AppBar from "presentation/components/elements/AppBar";
import useElements from "presentation/hook/elements";
import { protectedRoutes } from "presentation/pages/routes";
import NavigationDrawer from "presentation/components/elements/NavigationDrawer";
import withToken from "presentation/hoc/whitToken";
// api

console.log(
  "%c We Are Pishgaman ",
  "color: #31A94E;font-size: 24px;font-weight:600"
);
console.log("%c https://pdf.co.ir", "font-size: 18px;font-weight:600");

ChartJS.defaults.font.family = "YekanBakh";
ChartJS.defaults.font.weight = "400";
ChartJS.defaults.font.size = 12;

type Props = {
  children?: ReactNode;
};

/**
 * @component DefaultTemplate
 * @param children ReactNode
 * @returns ReactNode
 */
function DefaultTemplate({ children }: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    // <InitConfigProvider>
    //   {({ fav }) => {
    //     return (
    <div className={classes.root}>
      {/* <Helmet ></Helmet> */}
      <NavigationDrawer />
      <div className={classes.content}>
        <AppBar />
        <div className={classes.contentWrapper}>
          <Container className={classes.container} maxWidth="xl">
            <Suspense
              fallback={
                <LinearProgress color="secondary" className="loading" />
              }
            >
              <Routes>{useElements(protectedRoutes())}</Routes>
            </Suspense>
            {children}
          </Container>
        </div>
      </div>
    </div>
    //     );
    //   }}
    // </InitConfigProvider>
  );
}
// export default DefaultTemplate
export default withToken(DefaultTemplate);
