import {
  CSSProperties,
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  MouseEventHandler,
  ReactNode,
  forwardRef,
  useState,
} from "react";

// components
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { InputType } from "types/public.types";
/**
 * @component Input
 */

type Props = {
  className?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  minRows?: number;
  shrink?: boolean;
  errorText?: string | null;
  variant?: "outlined" | "filled" | "standard";
  placeholder?: string | null;
  size?: "medium" | "small";
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
};

function PasswordInput(
  {
    className,
    value,
    defaultValue,
    onChange = () => null,
    readOnly,
    minRows,
    shrink = true,
    errorText,
    variant = "outlined",
    placeholder,
    size = "medium",
    startAdornment,
    endAdornment,
    name,
    loading = false,
    loadingText,
    onClick = () => null,
    onFocus = () => null,
    ...rest
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        {...rest}
        type={showPassword ? "text" : "password"}
        name={name}
        ref={ref}
        fullWidth
        InputProps={{
          sx: { padding: "0px 5px" },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          size,
          value,
          placeholder: placeholder || undefined,
          readOnly,
          minRows,
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink,
        }}
        onFocus={onFocus}
        onChange={onChange}
        onClick={onClick}
        className={className}
        variant={variant}
        error={!!errorText}
        helperText={loading ? loadingText || errorText : errorText}
      />
    </>
  );
}

export default forwardRef(PasswordInput);
