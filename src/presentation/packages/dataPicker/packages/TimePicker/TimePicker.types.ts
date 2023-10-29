import { ReactNode, RefObject } from "react";
import type { DatePickerValue, FormatTime, Locales } from "../../types";

export interface onChangePayload {
  hour: number;
  minute: number;
  timeConvention: "am" | "pm";
  tfHour: number;
  timeSecond: number;
}

export interface TimePickerProps {
  defaultValue?: DatePickerValue;
  onChange?: (payload: onChangePayload) => void;
  locale?: Locales;
  renderComponent?: (data: {
    ref: RefObject<HTMLInputElement>;
    onClick: () => void;
    type: "text";
    value: string;
    readOnly: boolean;
    name?: string;
  }) => ReactNode;
  okLabel?: string;
  closeLabel?: string;
  resetLabel?: string;
  onReset?: () => void;
  defaultValueFormat?: FormatTime;
  name?: string;
}
