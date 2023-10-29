import { ChangeEventHandler, forwardRef, ForwardedRef } from "react";
import { Typography } from "@mui/material";
type Props = {
  accept?: string;

  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  errorText?: string | null;
  title?: string | null;
};

const FileInput = (
  { accept, onChange = () => null, name, errorText, title, ...res }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e);
  };
  return (
    <div>
      <span>{title}</span>
      <input
        {...res}
        ref={ref}
        type="file"
        onChange={handleChange}
        accept={accept}
        name={name}
      />
      {errorText && (
        <Typography variant="caption" color="error">
          {errorText}
        </Typography>
      )}
    </div>
  );
};

export default forwardRef(FileInput);
