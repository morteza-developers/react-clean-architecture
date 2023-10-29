import { type SyntheticEvent, useState } from "react";
import dayjs from "dayjs";
import type { DatePickerValue } from "../types";

type Event = SyntheticEvent<HTMLButtonElement>;
interface useCalendarHandlersType {
  dayValue: Date;
  range?: boolean;
  onChange: (d: Date, to?: Date) => void;
  from?: DatePickerValue | null;
  to?: DatePickerValue | null;
}
const getValidDate = (v: any): Date | undefined => {
  const parsed = +v;
  if (typeof parsed == "number") return new Date(parsed);
  return undefined;
};

export const useCalendarHandlers = (props: useCalendarHandlersType) => {
  const { range = false, onChange } = props;
  const [selectingRange, setSelectingRange] = useState(false);
  const [from, setFrom] = useState<Date | undefined>(getValidDate(props.from));
  const [to, setTo] = useState<Date | undefined>(getValidDate(props.to));

  const onClickCalendar = (e: Event) => {
    const { value } = e.currentTarget.dataset;
    if (value === undefined) {
      return;
    }
    onChange(new Date(value));
    return value;
  };
  const onClickRange = (e: Event) => {
    const { value } = e.currentTarget.dataset;
    if (!selectingRange && value !== undefined) {
      setFrom(new Date(value));
      setTo(new Date(value));

      setSelectingRange(true);
      return;
    }
    setSelectingRange(false);
    if (from !== undefined && to !== undefined) {
      onChange(new Date(from), new Date(to));
    }
  };
  const onMouseMove = (e: Event) => {
    const { value } = e.currentTarget.dataset;
    if (!selectingRange) {
      return;
    }
    if (value !== undefined) {
      if (dayjs(value).isAfter(dayjs(from))) {
        setTo(new Date(value));
      }
    }
  };
  const handleClickEvent = (e: Event) => {
    if (range) {
      return onClickRange(e);
    }
    return onClickCalendar(e);
  };

  return {
    handlers: {
      onClick: handleClickEvent,
      ...(range && { onMouseMove }),
    },
    from,
    to,
  };
};

export default useCalendarHandlers;
