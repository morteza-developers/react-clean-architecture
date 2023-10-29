import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import "leaflet/dist/leaflet.css";
import "presentation/assets/css/icons.css";
import ConfigProvider from "./providers/ConfigProvide";
import { FetchProvider } from "./packages/fetch";
import { NotifyContainer } from "./packages/notify";
import { CalendarProvider } from "./packages/dataPicker";
import DefaultTemplate from "./templates/DefaultTemplate";
import AuthTemplate from "./templates/AuthTemplate";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n]);
  const locale: string = i18n.language?.split("-")?.[0] || "fa";

  
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ConfigProvider>
          <CustomThemeProvider>
            <FetchProvider>
              <CssBaseline />
              <NotifyContainer />
              <CalendarProvider locale={locale as any}>
                <Routes>
                  <Route path="auth/*" element={<AuthTemplate />} />
                  <Route path="/*" element={<DefaultTemplate />} />
                </Routes>
              </CalendarProvider>
            </FetchProvider>
          </CustomThemeProvider>
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  );
}
