import { useEffect, useState, useMemo } from "react";
import dayjs from "dayjs";
import { convertSecToHm, getAngelValues } from "../utils/timePicker";
import { FormatTime, type DatePickerValue } from "../types";
import { type onChangePayload } from "../packages/TimePicker/TimePicker.types";

interface useTimePickerType {
  timeConvention: "am" | "pm";
  defaultValue?: DatePickerValue;
  onChange?: (payload: onChangePayload) => void;
  setTimeConvention?: (newValue: "am" | "pm") => void;
  defaultValueFormat: FormatTime;
}
export const useTimePicker = ({
  defaultValue,
  timeConvention,
  onChange,
  setTimeConvention = () => null,
  defaultValueFormat = "timestamp",
}: useTimePickerType) => {
  const time = useMemo(() => {
    if (!defaultValue) return dayjs().startOf("date");
    if (defaultValueFormat == "second-timestamp") {
      const { h, m } = convertSecToHm(parseInt(defaultValue as any));
      return dayjs().set("hour", h).set("minute", m);
    }

    return dayjs(defaultValue);
  }, [defaultValue]);

  const [selecting, setSelecting] = useState<boolean>(false);
  const [selectingHour, setSelectingHour] = useState<boolean>(true);
  const [isInsideHour, setInsideHour] = useState<boolean>(false);

  const [hour, setHour] = useState<number>(parseInt(time.format("h"), 10));
  const [minute, setMinute] = useState<number>(parseInt(time.format("m"), 10));

  const handleChangeMinute = (e: React.MouseEvent | React.TouchEvent) => {
    const { value } = getAngelValues(e, 6);
    setMinute(value);
  };
  const handleChangeHour = (e: React.MouseEvent | React.TouchEvent) => {
    const { value } = getAngelValues(e);
    setHour(value);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selecting) {
      return;
    }
    if (selectingHour) {
      return handleChangeHour(e);
    }
    return handleChangeMinute(e);
  };
  const handleSelecting = (e: React.MouseEvent | React.TouchEvent) => {
    setSelecting(true);
    if (selectingHour) {
      return handleChangeHour(e);
    } else {
      return handleChangeMinute(e);
    }
  };

  const convertHmToSec = (): number => {
    const tfHour = timeConvention == "am" ? hour : hour + 12;
    const secHour = tfHour * 60 * 60;
    const minSec = minute * 60;
    return secHour + minSec;
  };

  const handleMouseUp = () => {
    if (!selectingHour) {
      if (typeof onChange === "function") {
        onChange({
          hour,
          minute,
          timeConvention,
          tfHour: timeConvention == "am" ? hour : hour + 12,
          timeSecond: convertHmToSec(),
        });
      }
      setSelecting(false);
      // setSelectingHour(true);
      setInsideHour(false);
      return;
    }
    setSelectingHour(false);
    setSelecting(false);
  };

  const handleBackToHour = () => {
    setSelectingHour(true);
  };

  useEffect(() => {
    if (time) {
      time.hour() > 12 && setTimeConvention("pm");
    }
  }, []);

  return {
    hour,
    minute,
    isInsideHour,
    selectingHour,
    handleMouseMove,
    handleMouseUp,
    handleSelecting,
    handleBackToHour,
  };
};
