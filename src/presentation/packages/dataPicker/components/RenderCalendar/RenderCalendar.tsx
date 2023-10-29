import { type RenderCalendarProps } from "./RenderCalendar.types";
import Modal from "../Modal";

export const RenderCalendar = (props: RenderCalendarProps) => {
  if (!props.showCalendar) {
    return null;
  }

  return (
    <Modal
      accentColor={props.accentColor}
      toggleOpen={props.toggleOpen}
      open={props.showCalendar}
    >
      {props.children}
    </Modal>
  );
};

export default RenderCalendar;
