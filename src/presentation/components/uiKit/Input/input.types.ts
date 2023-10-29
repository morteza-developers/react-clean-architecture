import { InputBasePropsSizeOverrides, TextFieldVariants } from "@mui/material";
import {
  CSSProperties,
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";
import { OverridableStringUnion } from "@mui/types";
import { InputType } from "types/public.types";
export type PropsComponents = {
  className?: string;
  value?: string | number | null;
  defaultValue?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  minRows?: number;
  shrink?: boolean;
  errorText?: string | null;
  variant?: TextFieldVariants;
  placeholder?: string | null;
  size?: OverridableStringUnion<
    "small" | "medium",
    InputBasePropsSizeOverrides
  >;
  startAdornment?: ReactNode | string;
  endAdornment?: ReactNode | string;
  type?: InputType;
  label?: string | null;
  fullWidth?: boolean;
  style?: CSSProperties;
  loading?: boolean;
  name?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  autoFocus?: boolean;
  onFocus?: (e: FocusEvent) => void;
  loadingText?: string;
  multiline?: boolean;
  inputClassName?: string;
  disabled?: boolean;
  onChangeText?: (value: string) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};
