import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  LinearProgress,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {
  FocusEvent,
  ForwardRefRenderFunction,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from "react";
import styles from "./select_box.module.css";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { IStatus } from "types/public.types";

type Props = {
  children?: ReactNode;
  title?: string | null;
  textError?: string | null;
  name?: string;
  onChange?: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  status?: IStatus;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onTry?: () => void;
  inputProps?: any;
  className?: string;
  sx?: any;
};
const SelectBox: ForwardRefRenderFunction<unknown, Props> = (
  {
    children,
    title,
    textError,
    name,
    onChange = () => null,
    onBlur,
    status = "success",
    value,
    defaultValue = "",
    disabled = false,
    onTry = () => null,
    inputProps,
    className,
    sx,
  },
  ref
) => {
  const { t } = useTranslation();
  // status = "error";
  // if (status == "loading") return null;
  const renderSelect = () => {
    return (
      <Select
        // inputLabelProps={{
        //   shrink: true,
        // }}
        sx={sx}
        inputProps={inputProps}
        native
        label={title}
        value={value}
        disabled={disabled}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        fullWidth
        defaultValue={value ? undefined : defaultValue}
        error={textError ? true : false}
        className={styles.select_box}
      >
        <option value="" disabled hidden></option>
        {children}
      </Select>
    );
  };
  const renderError = () => {
    return (
      <Select fullWidth label={title}>
        <li className={styles.error_btn}>
          <Typography className={styles.text_error}>
            {t("Information not received")}
          </Typography>
          <Button
            size="medium"
            fullWidth
            color="error"
            onClick={() => onTry()}
            className={styles.try_btn}
          >
            {t("Try again")}
          </Button>
        </li>
      </Select>
    );
  };
  const renderLoading = () => {
    return (
      <>
        <Select fullWidth label={title}>
          <li className={styles.error_btn} value="loading">
            {t("Please wait")}
          </li>
        </Select>
        <LinearProgress sx={{ width: "100%" }} />
      </>
    );
  };

  const handleStatus = () => {
    switch (status) {
      case "success":
        return renderSelect();
      case "error":
        return renderError();
      case "loading":
        return renderLoading();
      default:
        return renderSelect();
    }
  };
  return (
    <FormControl className={styles.main}>
      <InputLabel>{title}</InputLabel>
      {handleStatus()}
      {textError && (
        <FormHelperText error className={styles.error}>
          {textError}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default forwardRef(SelectBox);
