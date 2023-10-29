import { useState, ReactNode, CSSProperties } from "react";

import clsx from "clsx";

import { alpha, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
// providers

// constants
import { SPACING_HALF } from "core/utils//constants/spacing";

// components
import TableActionMenu from "../TableActionMenu";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

// icons
import DownArrowIcon from "@mui/icons-material/ExpandMore";
import DragIcon from "@mui/icons-material/DragHandle";
import { Actions, Columns } from "../types";

const useStyles = makeStyles((theme) => ({
  // root: ({ color, padding = 0, enableRowButtonSelect }: any) => {
  //   return {
  //     background: color
  //       ? alpha(color, padding * 0.05)
  //       : theme.palette.paper.main,
  //     cursor: enableRowButtonSelect ? "pointer" : "unset",
  //   };
  // },
  root: {
    height: "52px",
  },
  tableChild: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  downArrow: {
    marginRight: theme.spacing(SPACING_HALF),
  },
  tableRowCell: {
    maxWidth: "300px",
    wordBreak: "break-word",
    whiteSpace: "initial",
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    padding: "8px !important",
    margin: 0,
    fontSize: "12px",
    lineHeight: "25px",
    // letterSpacing: "0.05px !important",
    minWidth: "150px",
    fontWeight: 600,
    direction: "ltr",
  },
  arrowButton: {
    transition: theme.transitions.create(["transform"]),
    fontSize: 15,
  },
  arrowDown: {
    transform: "rotate(180deg)",
  },
  padding: ({ padding = 0 }: any) => {
    if (padding > 0) {
      return {
        padding: theme.spacing(padding),
      };
    } else return {};
  },
}));

/**
 * @component TableCollapseRow
 */

type Props<R> = {
  columns: Columns<R>[];
  data: R;
  disableSelect?: boolean;
  actions?: Actions<R>[];
  children?: ReactNode;
  padding?: number;
  color?: string;
  index: number;
  enableRowButtonSelect?: boolean;
};

function TableCollapseRow<R>({
  columns,
  data,
  disableSelect,
  actions,
  children,
  padding = 0,
  color,
  index = 0,
  enableRowButtonSelect,
  ...rest
}: Props<R>) {
  const classes = useStyles({ padding, color, enableRowButtonSelect });

  const [open, setOpen] = useState(false);

  const onOpenClick = () => {
    setOpen((prevState) => !prevState);
  };
  const upArrowClasses = clsx(classes.arrowButton, open && classes.arrowDown);
  const checkBoxCellClasses = clsx(classes.padding, classes.tableRowCell);

  return (
    <>
      <TableRow
        className={classes.root}
        hover={enableRowButtonSelect}
        {...rest}
      >
        {!disableSelect && !enableRowButtonSelect && (
          <TableCell padding="checkbox" className={checkBoxCellClasses}>
            <Checkbox color="primary" />
          </TableCell>
        )}

        {columns.map((column, key) => {
          if (column.isHide) return null;
          return (
            <TableCell
              className={classes.tableRowCell}
              key={key}
              align="center"
              style={column.style}
            >
              {column.render
                ? column.render(data, index)
                : data[column.field as keyof R] || "-"}
            </TableCell>
          );
        })}

        {(actions || children) && (
          <TableCell align="center" className={classes.tableRowCell}>
            <div className={classes.tableChild}>
              {children && (
                <div className={classes.downArrow}>
                  <IconButton onClick={onOpenClick} size="small">
                    <DownArrowIcon
                      color="secondary"
                      fontSize="small"
                      className={upArrowClasses}
                    />
                  </IconButton>
                </div>
              )}

              {actions && (
                <TableActionMenu row={data} index={index} actions={actions} />
              )}
            </div>
          </TableCell>
        )}
      </TableRow>

      {/* {children &&
        open &&
        children.map((child) => {
          return (
            <TableCollapseRow
              children={child.children}
              key={child.__id}
              columns={columns}
              data={child}
              actions={actions}
              padding={getDepth()}
              color={theme.palette.primary.main}
            />
          );
        })} */}
    </>
  );
}

export default TableCollapseRow;
