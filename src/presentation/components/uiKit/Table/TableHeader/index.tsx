import { makeStyles } from "@mui/styles";

// components
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  tableHead: {},
  tableHeadCell: {
    whiteSpace: "nowrap",
    background: theme.palette.paper.main,
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    zIndex: "1 !important",
    padding: "0px",
    height: "40px",
    color:theme.palette.gray.main,
    fontWeight:600
  },
}));

/**
 * @component TableHeader
 */

type Props = {
  columns: Columns[];
  disableSelect?: boolean;
  disableActions?: boolean;
  onSelectAll?: (data: any) => void;
  checkedAll?: boolean;
  indeterminateChecBox?: boolean;
};

type Columns = {
  field?: string;
  title?: string | null;
  isHide?: boolean;
};
function TableHeader({
  columns = [],
  disableSelect,
  disableActions,
  onSelectAll,
  checkedAll,
  indeterminateChecBox,
}: Props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <TableHead className={classes.tableHead} data-testid="table_header">
      <TableRow>
        {!disableSelect && (
          <TableCell
            padding="checkbox"
            variant="head"
            className={classes.tableHeadCell}
          >
            <Checkbox
              onChange={onSelectAll}
              indeterminate={indeterminateChecBox}
              checked={checkedAll}
            />
          </TableCell>
        )}

        {columns.map((head, key) => {
          if (head.isHide) return null;
          return (
            <TableCell
              data-testid="table_header_cell"
              key={key}
              align="center"
              className={classes.tableHeadCell}
            >
              {head.title}
            </TableCell>
          );
        })}

        {/* action menu cell */}
        {!disableActions && (
          <TableCell
            align="center"
            data-testid="table_header_action_cell"
            className={classes.tableHeadCell}
          >
            {t("Operation")}
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
