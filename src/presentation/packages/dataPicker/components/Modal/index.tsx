import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
interface IModalProps {
  open?: boolean;
  children: React.ReactNode;
  toggleOpen: () => void;
  accentColor?: string;
}

export const Modal = (props: IModalProps) => {
  const { open, toggleOpen, children } = props;

  if (open === false) {
    return null;
  }
  const style = {
    "--data-picker-color-accent": props.accentColor || "#6374ae",
  } as any;
  return (
    <>
      {createPortal(
        <div style={style} className={styles.main}>
          {children}
          <div onClick={toggleOpen} className={styles.overlay} />
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
