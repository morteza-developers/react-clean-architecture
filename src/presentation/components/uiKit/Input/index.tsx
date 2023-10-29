import { ChangeEvent, ForwardedRef, forwardRef } from "react";

// components
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

import InputAdornment from "@mui/material/InputAdornment";
// import { toEnglishDigits } from "utils";
import { PropsComponents } from "./input.types";
/**
 * @component Input
 */

function Input(
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
    inputClassName,
    disabled,
    onChangeText,
    ...rest
  }: PropsComponents,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // onChangeText && onChangeText(toEnglishDigits(e.target.value));
    onChange(e);
  };
  return (
    <>
      <TextField
        {...rest}
        name={name}
        ref={ref}
        fullWidth
        InputProps={{
          disabled,
          className: inputClassName,
          sx: { paddingLeft: "5px", paddingRight: "5px" },
          endAdornment: (
            <InputAdornment position="start">
              {loading ? <CircularProgress size={26} /> : endAdornment}
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
        onChange={handleOnChange}
        onClick={onClick}
        className={className}
        variant={variant}
        error={!!errorText}
        helperText={loading ? loadingText || errorText : errorText}
      />
    </>
  );
}

export default forwardRef(Input);
