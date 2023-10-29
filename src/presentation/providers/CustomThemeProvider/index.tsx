import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider as Provider } from "@mui/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "presentation/themes";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";
import { useConfig } from "presentation/providers/ConfigProvide";
const cacheRtl = createCache({
  key: "muirtl",
  prepend: true,
  stylisPlugins: [rtlPlugin],
});
const cacheLtr = createCache({
  key: "muiltr",
  prepend: true,
});

type Props = {
  children?: ReactNode;
};
function CustomThemeProvider({ children }: Props) {
  const { settings } = useConfig();
  const { i18n } = useTranslation();
  const fontFamily = i18n.language == "fa-IR" ? "YekanBakhFaNum" : "YekanBakh";

  return (
    <Provider
      injectFirst
      // jss={jss}
    >
      <CacheProvider value={i18n.dir() == "rtl" ? cacheRtl : cacheLtr}>
        <ThemeProvider
          theme={theme({
            direction: i18n.dir(),
            fontFamily,
            themeType: settings.theme,
          })}
        >
          {children}
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default  CustomThemeProvider ;
