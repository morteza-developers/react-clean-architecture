import { useMemo } from "react";
import localeCache from "../../utils/locale";

import { Locales } from "../../types";
interface CalendarProviderProps {
  accentColor?: string;
  locale?: Locales;
  children: React.ReactNode;
}

const CalendarProvider = ({
  accentColor,
  locale,
  children,
}: CalendarProviderProps) => {
  useMemo(() => locale && localeCache.setLocale(locale), [locale]);
  const style = {
    "--data-picker-color-accent": accentColor || "#6374ae",
  } as any;
  return <div style={style}>{children}</div>;
};

export default CalendarProvider;
