// components
import MuiDialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
// constatns
import { Box, Slide, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import IconButton from "packages/dataPicker/components/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./DialogStyles";

/**
 * @component Dialog
 */

type Props = {
  open?: boolean;
  maxWidth?: "sm" | "md" | "lg";
  onClose?: () => void;
  title?: string | null;
  children?: ReactNode;
  renderAction?: ReactNode;
  appBarAction?: ReactNode | string | null;
  keepMounted?: boolean;
  unmountOnExit?: boolean;
};
function Dialog({
  open = false,
  maxWidth = "sm",
  onClose = () => {},
  title,
  children,
  renderAction,
  appBarAction = null,
  keepMounted = false,
  unmountOnExit=true,
}: Props) {
  const classes = useStyles();
  return (
    <MuiDialog
      TransitionComponent={Slide}
      fullWidth
      TransitionProps={{ unmountOnExit }}
      keepMounted={keepMounted}
      scroll="paper"
      open={open}
      onClose={onClose}
      aria-labelledby="Core-Dialog"
      maxWidth={maxWidth}
      container={document.getElementById("portal")}
      classes={{ root: classes["MuiDialog-root"] }}
    >
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>{title}</Typography>
        <Box className={classes.actionBox}>
          {appBarAction && <div>{appBarAction}</div>}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <DialogContent className={classes.content}>{children}</DialogContent>

      {renderAction && (
        <DialogActions className={classes.dialogAction}>
          {renderAction}
        </DialogActions>
      )}
    </MuiDialog>
  );
}

export default Dialog;
