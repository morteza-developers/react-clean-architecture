// dnd

// components

import { CircularProgress } from "@mui/material";
import { useStyles } from "./styles";
import { TableProps } from "./types";
import TableCore from "./TableCore";

/**
 * @component TableCore
 */

function Table<T>(props: TableProps<T>) {
  const classes = useStyles({ disable: false });

  const renderDisable = () => {
    return (
      <div className={classes.back_drop}>
        {props.loading && <CircularProgress />}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      {props.disable && renderDisable()}
      <TableCore {...props} />
    </div>
  );
}

export default Table;
