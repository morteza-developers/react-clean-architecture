import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import RenderCalendar from "../../components/RenderCalendar";
import type { TimePickerProps } from "./TimePicker.types";
import useClickOutside from "../../hooks/useClickOutside";
import localeCache from "../../utils/locale";
import styles from "./TimePicker.module.css";
import Clock from "../Clock/Clock";
import { onChangePayload } from "../Clock/Clock.types";
import dayjs from "dayjs";
import { convertSecToHm } from "../../utils/timePicker";
export const TimePicker = ({
  defaultValue,
  onChange = () => null,
  locale,
  renderComponent,
  closeLabel,
  okLabel,
  resetLabel,
  onReset,
  defaultValueFormat = "timestamp",
  name,
}: TimePickerProps) => {
  useMemo(() => locale && localeCache.setLocale(locale), [locale]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [clock, setClock] = useState<onChangePayload>();
  const [label, setLabel] = useState<string>("");
  useClickOutside(containerRef, () => setShowCalendar(false));
  const toggleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleChange = (v: onChangePayload) => {
    setClock(v);
  };

  const renderValue = (newClock?: onChangePayload) => {
    if (!newClock) return "";
    return `${
      newClock?.timeConvention == "am" ? newClock?.hour : newClock?.tfHour
    } : ${newClock?.minute}`;
  };

  useEffect(() => {
    if (defaultValue) {
      let time;
      if (defaultValueFormat == "second-timestamp") {
        const { h, m } = convertSecToHm(parseInt(defaultValue as any));
        time = dayjs().set("hour", h).set("minute", m);
      } else {
        time = dayjs(defaultValue);
      }
      setLabel(`${time.hour()} : ${time.minute()}`);
    } else {
      setLabel("");
    }
  }, [defaultValue]);

  return (
    <>
      <div className={styles.place_holder}>
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
      </div>

      <RenderCalendar
        toggleOpen={toggleShowCalendar}
        showCalendar={showCalendar}
        destinationRef={inputRef}
      >
        <Clock
          defaultValueFormat={defaultValueFormat}
          actions={() => {
            return (
              <div className={styles.actions}>
                <div className={styles.main_actions}>
                  <button
                    className={styles.button}
                    disabled={!clock}
                    onClick={() => {
                      onChange(clock!);
                      toggleShowCalendar();
                      setLabel(renderValue(clock));
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
          defaultValue={defaultValue}
          onChange={handleChange}
          locale={locale}
        />
      </RenderCalendar>
    </>
  );
};

export default TimePicker;
