import NotifyObserver from "../../notifyObserver";
import ConfirmContainer from "../ConfirmContainer";
import ToastContainer from "../ToastContainer";
import { IConfirmListener, IToastListener } from "../../types";
import { useState, useEffect, FC } from "react";
import { createPortal } from "react-dom";
const modalElement = document.createElement("div");
modalElement.setAttribute("id", "root-modal");
document.body.appendChild(modalElement);

type Props = {
  toastDuration?: number;
};
const NotifyContainer: FC<Props> = ({ toastDuration }) => {
  const [snakes, setSnakes] = useState<Array<IToastListener>>([]);
  const [confirms, setConfirms] = useState<Array<IConfirmListener>>([]);

  const removeSnaks = (id: string) => {
    setSnakes((state) => state.filter((item) => item.id != id));
  };

  const removeConfirm = (id: string) => {
    setConfirms((state) => state.filter((item) => item.id != id));
  };

  const updateConfirm = (newConfirm: IConfirmListener) => {
    setConfirms((state) => {
      const index = state.findIndex((i) => i.id == newConfirm.id);
      if (index == -1) return [...state, newConfirm];
      state[index] = newConfirm;
      return state;
    });
  };

  useEffect(() => {
    new NotifyObserver().toastRegister((item) => {
      if (item.type === "add") setSnakes((state) => [...state, item]);
      if (item.type === "remove") removeSnaks(item.id);
    });
    new NotifyObserver().confirmRegister((item) => {
      if (item.type == "confirm") {
        if (item.updateConfirm) {
          updateConfirm(item);
        } else {
          setConfirms((state) => [...state, item]);
        }
      }
      if (item.type == "closeConfirm") removeConfirm(item.id);
    });
    toastDuration && new NotifyObserver().setToastDuration(toastDuration);
  }, []);

  return createPortal(
    <>
      {/* //snakes is show */}
      <ToastContainer snakes={snakes} />
      {/* //confirm is show */}
      <ConfirmContainer confirms={confirms} />
    </>,
    modalElement,
  );
};

export default NotifyContainer;
