import { LangType, ThemeType } from "types/public.types";

export interface IConfigContext {
  settings: ISettingsProvider;
  changeLanguage: (lang: LangType) => void;
  changeTheme: (theme: ThemeType) => void;
}

export interface ISettingsProvider {
  theme: ThemeType;
  language: LangType;
}
