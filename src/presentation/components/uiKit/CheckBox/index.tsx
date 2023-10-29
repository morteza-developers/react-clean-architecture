import { Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { forwardRef, CSSProperties, ChangeEvent, ForwardedRef } from "react";
import styles from "./CheckBox.module.css";

type Props = {
  label?: string | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: CSSProperties;
};
export const CheckBox = (
  {
    label,
    onChange = () => null,
    value,
    name,
    defaultChecked,
    checked,
    style,
  }: Props,
  ref:ForwardedRef<HTMLInputElement>,
) => {
  const {
    palette: { primary },
  } = useTheme() as any;
  return (
    <label className={styles.main} style={style}>
      <span
        className={styles.checkbox}
        style={{ "--active_check-box": primary.main } as any}
      >
        <input
          defaultChecked={defaultChecked}
          name={name}
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={onChange}
          value={value}
        />
        <svg viewBox="0 0 21 18">
          <symbol
            id="tick-path"
            viewBox="0 0 21 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </symbol>
          <defs>
            <mask id="tick">
              <use
                strokeDasharray="20"
                className={styles.tick}
                href="#tick-path"
                stroke="#ffffff"
              />
            </mask>
          </defs>
          <use
            strokeDasharray="20"
            className={styles.tick}
            href="#tick-path"
            stroke="currentColor"
          />
        </svg>
        <svg viewBox="0 0 9 10">
          <path d="M5.88086 5.89441L9.53504 4.26746" />
          <path d="M5.5274 8.78838L9.45391 9.55161" />
          <path d="M3.49371 4.22065L5.55387 0.79198" />
        </svg>
      </span>
      <Typography
        variant="body1"
        sx={{ userSelect: "none", cursor: "pointer", whiteSpace: "nowrap" }}
      >
        {label}
      </Typography>
    </label>
  );
};

export default forwardRef(CheckBox);
