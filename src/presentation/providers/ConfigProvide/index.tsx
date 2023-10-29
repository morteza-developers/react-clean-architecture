import { LANG, LIGHT, THEME } from "core/utils/constants/storage";
import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useInsertionEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { LangType, ThemeType } from "presentation/types/public.types";
import { IConfigContext, ISettingsProvider } from "./ConfigProvide.types";
// import { makeAxiosHttpClient } from "utils/factories/https/axiosHttpClientFactory";
// import { makeApiUrl } from "utils/factories/https/apiUrlFactory";

// initialize navigationDrawer context
const ConfigContext = createContext<IConfigContext>(null!);

/**
 * @provider NavigationDrawerProvider
 * @summary navigationDrawer provider use this at top of the react tree to get navigationDrawer data on every level
 * @param {ReactNode} children
 */

type Props = {
  children?: ReactNode;
};
function ConfigProvider({ children }: Props) {
  const { i18n } = useTranslation();
  const theme = (localStorage.getItem(THEME) as ThemeType) || LIGHT;
  const lan = localStorage.getItem(LANG) as LangType;
  const [settings, setSettings] = useState<ISettingsProvider>({
    theme,
    language: lan,
  });
  const changeLanguage = (lang: LangType) => {
    i18n.changeLanguage(lang);
    document.dir = i18n.dir();
    // const client = makeAxiosHttpClient();
    // client.setDefaultsBaseUrl(makeApiUrl(toApiLang(lang)));
    localStorage.setItem(LANG, lang);
    setSettings((state) => ({ ...state, language: lang }));
  };
  const changeTheme = (theme: ThemeType) => {
    setSettings((state) => ({ ...state, theme: theme }));
    localStorage.setItem(THEME, theme);
  };

  const toApiLang = (lang: string) => {
    return lang?.split("-")?.[0] || "fa";
  };

  useEffect(() => {
    document.dir = i18n.dir();
  }, []);
  useInsertionEffect(() => {
    document.documentElement.setAttribute("data-theme", settings.theme);
  }, [settings.theme]);
  return (
    <ConfigContext.Provider value={{ settings, changeLanguage, changeTheme }}>
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
export default ConfigProvider;
