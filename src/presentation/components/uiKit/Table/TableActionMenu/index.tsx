import { makeStyles } from "@mui/styles";
// components
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Actions } from "../types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: theme.palette.action.active,
  },
}));

/**
 * @component TableActionMenu
 */

type Props<T> = {
  actions: Actions<T>[];
  row: T;
  index: number;
};

function TableActionMenu<T>({ actions, row, index }: Props<T>) {
  const classes = useStyles();

  const renderAction = (action: Actions<T>) => {
    const { onClick, render, icon = null } = action;
    if (typeof render === "function") return render(action, row, index);
    if (typeof onClick == "function") {
      return (
        <IconButton size="small" onClick={() => onClick(row, index)}>
          {icon}
        </IconButton>
      );
    }
    return icon;
  };

  return (
    <div className={classes.root}>
      {actions.map((action, index) => {
        if (action.isShow == false) return null;
        if (!action.icon && !action.render) return null;
        return action.label ? (
          <Tooltip title={action.label} key={index}>
            {renderAction(action)}
          </Tooltip>
        ) : (
          <div key={index}>{renderAction(action)}</div>
        );
      })}
    </div>
  );
}

export default TableActionMenu;
