import { ReactNode } from "react";
import type { DatePickerValue, FormatTime, Locales } from "../../types";

export interface onChangePayload {
  hour: number;
  minute: number;
  timeConvention: "am" | "pm";
  tfHour: number;
  timeSecond: number;
}

export interface ClockProps {
  defaultValueFormat: FormatTime;
  defaultValue?: DatePickerValue;
  onChange?: (payload: onChangePayload) => void;
  locale?: Locales;
  actions?: () => ReactNode;
}
