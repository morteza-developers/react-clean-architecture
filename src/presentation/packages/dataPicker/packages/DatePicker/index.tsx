import {
  ReactNode,
  RefObject,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import RenderCalendar from "../../components/RenderCalendar";
import Calendar from "../Calendar";
import useClickOutside from "../../hooks/useClickOutside";
import formatDate from "../../utils/format";
import locales from "../../utils/locales";

import { DatePickerValue, DaysRange, Locales, Pickers } from "../../types";
import localeCache from "../../utils/locale";
import styles from "./DatePicker.module.css";
export interface DatePickerOnChange {
  value: Date;
  from?: Date;
  to?: Date;
}

export interface DatePickerProps {
  value?: DatePickerValue;
  onChange?: (value: DatePickerOnChange) => void;
  locale?: Locales;
  weekend?: DaysRange;
  range?: boolean;
  from?: DatePickerValue | null;
  to?: DatePickerValue | null;
  show?: boolean;
  accentColor?: string;
  renderComponent?: (data: {
    name?: string;
    ref: RefObject<HTMLInputElement>;
    onClick: () => void;
    type: "text";
    value: string;
    readOnly: boolean;
  }) => ReactNode;
  views?: Pickers;
  disableFuture?: boolean;
  disablePass?: boolean;
  okLabel?: string;
  closeLabel?: string;
  resetLabel?: string;
  onReset?: () => void;
  name?: string;
}

const DatePicker = ({
  value,
  onChange,
  locale,
  weekend = 6,
  views,
  range,
  accentColor,
  from,
  to,
  disableFuture = false,
  disablePass = false,
  renderComponent,
  closeLabel,
  okLabel,
  resetLabel,
  onReset,
  name = "",
}: DatePickerProps) => {
  // refs
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useMemo(() => locale && localeCache.setLocale(locale), [locale]);
  const defaultLocale = locale || localeCache.locale;

  // states
  const [Datevalue, setDateValue] = useState<Date>(
    value !== undefined ? new Date(value) : new Date()
  );
  const [fromState, setFrom] = useState<Date | undefined>();
  const [toState, setTo] = useState<Date | undefined>();
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");
  // hooks
  useClickOutside(containerRef, () => setShowCalendar(false));
  // handlers
  const toggleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleSelectDay = (day: Date) => {
    setDateValue(day);
  };
  const handleSelectRange = (from: Date, to: Date) => {
    setFrom(from);
    setTo(to);
  };
  const handleChangeDay = (start: Date, to?: Date) => {
    if (range === true && to) {
      return handleSelectRange(start, to);
    }
    handleSelectDay(start);
  };
  const getLabel = (newData: Date) => {
    return formatDate(newData, locales[defaultLocale].format, { views });
  };
  const getRangeValue = (newFrom?: Date, newTo?: Date) => {
    if (newFrom && newTo) {
      return `
        ${formatDate(newFrom, locales[defaultLocale].format, { views })}
        -
        ${formatDate(newTo, locales[defaultLocale].format, { views })}
      `;
    }
    return "---- --- ----";
  };

  const handleChange = () => {
    if (typeof onChange === "function") {
      if (range === true && toState) {
        setLabel(getRangeValue(fromState, toState));
        onChange({
          value: new Date(),
          from: fromState,
          to: toState,
        });
      } else {
        setLabel(getLabel(Datevalue));
        onChange({ value: Datevalue });
      }
    }
  };

  useEffect(() => {
    if (range != true) {
      if (value) {
        const toParse = +value;
        const newValue = new Date(toParse || value);
        setLabel(getLabel(newValue));
        setDateValue(newValue);
      } else {
        setLabel("");
        setDateValue(new Date());
      }
    }
  }, [value]);

  useEffect(() => {
    if (range == true) {
      if (from && to) {
        const newFromDate = new Date(+from || from);
        const newToDate = new Date(+to || to);
        setLabel(getRangeValue(newFromDate, newToDate));
        from && setFrom(newFromDate);
        to && setTo(newToDate);
      } else {
        setLabel("");
        setFrom(undefined);
        setTo(undefined);
      }
    }
  }, [from, to]);

  return (
    <>
      {renderComponent ? (
        renderComponent({
          name,
          ref: inputRef,
          onClick: toggleShowCalendar,
          type: "text",
          value: label,
          readOnly: true,
        })
      ) : (
        <input
          name={name}
          ref={inputRef}
          onClick={toggleShowCalendar}
          type="text"
          value={label}
          readOnly
        />
      )}
      <RenderCalendar
        accentColor={accentColor}
        toggleOpen={toggleShowCalendar}
        showCalendar={showCalendar}
        destinationRef={inputRef}
      >
        <Calendar
          disablePass={disablePass}
          disableFuture={disableFuture}
          views={views}
          value={Datevalue}
          ref={containerRef}
          weekend={weekend}
          onChange={handleChangeDay}
          range={range}
          from={from}
          to={to}
          actions={() => {
            return (
              <div className={styles.actions}>
                <div className={styles.main_actions}>
                  <button
                    className={styles.button}
                    // disabled={!clock}
                    onClick={() => {
                      handleChange();
                      toggleShowCalendar();
                      // setLabel(renderValue(clock));
                    }}
                  >
                    {okLabel || "تایید"}
                  </button>
                  <button onClick={toggleShowCalendar}>
                    {closeLabel || "بستن"}
                  </button>
                </div>

                {typeof onReset == "function" && (
                  <button
                    onClick={() => {
                      onReset();
                      toggleShowCalendar();
                    }}
                  >
                    {resetLabel || "پاک کردن"}
                  </button>
                )}
              </div>
            );
          }}
        />
      </RenderCalendar>
    </>
  );
};

export default DatePicker;
