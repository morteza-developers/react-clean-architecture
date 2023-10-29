import dayjs from "dayjs";
import { useRef } from "react";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { TIME } from "../constants";
import type { DatePickerValue } from "../types";
import getDays from "../utils/month";
import type { DaysInMonth } from "../utils/month/month.types";

interface UseSliderTypes {
  daysElementRefs: RefObject<HTMLDivElement[]>;
  value: DatePickerValue;
  days: DaysInMonth[];
  setDays: Dispatch<SetStateAction<DaysInMonth[]>>;
}
export const useSlideCalendar = ({
  daysElementRefs,
  days,
  setDays,
  value,
}: UseSliderTypes) => {
  const isAnimating = useRef(false);
  const date = useRef(dayjs(value));

  const slideToTheNextMonth = () => {
    if (isAnimating.current) {
      return;
    }
    const nextMonth = date.current.add(1, "month");
    const newValue = getDays({ date: nextMonth.toDate() });

    setDays([...days, newValue]);

    requestAnimationFrame(() => {
      isAnimating.current = true;
      // @ts-expect-error I will check this out later
      const [firstItemRef, lastItemRef] = daysElementRefs.current;
      firstItemRef.style.transition = `transform ${TIME}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      firstItemRef.style.transform = "translateX(500%)";

      lastItemRef.style.transition = `transform ${TIME}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      lastItemRef.style.transform = "translateX(500%)";

      setTimeout(() => {
        setDays((oldItems) => {
          return oldItems.filter((items) => items.id === newValue.id);
        });
        date.current = nextMonth;
        lastItemRef.style.transition = null;
        lastItemRef.style.transform = null;
        isAnimating.current = false;
      }, TIME + 50);
    });
  };
  const slideToPrevMonth = () => {
    if (isAnimating.current) {
      return;
    }
    const prevMonth = date.current.subtract(1, "month");
    const newValue = getDays({ date: prevMonth.toDate() });

    setDays([newValue, ...days]);

    requestAnimationFrame(() => {
      isAnimating.current = true;
      const [firstItemRef, lastItemRef] = daysElementRefs.current;
      firstItemRef.style.transform = "translateX(500%)";
      lastItemRef.style.transform = "translateX(500%)";

      requestAnimationFrame(() => {
        lastItemRef.style.transition = `transform ${TIME}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        lastItemRef.style.transform = "translateX(0px)";

        firstItemRef.style.transition = `transform ${TIME}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        firstItemRef.style.transform = "translateX(0px)";

        setTimeout(() => {
          setDays((oldItems) => {
            return oldItems.filter((items) => items.id === newValue.id);
          });
          firstItemRef.style.transition = null;
          firstItemRef.style.transform = null;
          date.current = prevMonth;
          isAnimating.current = false;
        }, TIME + 50);
      });
    });
  };
  return {
    slideToTheNextMonth,
    slideToPrevMonth,
  };
};
