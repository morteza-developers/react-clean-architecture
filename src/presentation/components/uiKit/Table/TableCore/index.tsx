// providers

// components
import { default as TableMui } from "@mui/material/Table";
import { useMemo, memo } from "react";

// dnd

// components
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";
// icons

import Error from "components/uiKit/Error";
import { useTranslation } from "react-i18next";
import Empty from "components/uiKit/Empty";
import { TableProps } from "../types";
import TableHeader from "../TableHeader";
import TableCollapseRow from "../TableCollapseRow";
import ExportExcel from "../ExportExcel";
import TableSkeleton from "../TabSkeleton";

/**
 * @component TableCore
 */

function TableCore<T>({
  disable = false,
  columns,
  data = [],
  actions,
  tableDescription,
  disableExportExcel = true,
  onExportExcel,
  disableSelect = true,
  enableRowButtonSelect,
  totalDataCount,
  loading = false,
  status,
  onTry,
  rowKey = "id" as keyof T,
  maxHeight
}: TableProps<T>) {
  const isActiveExportExcel =
    !disableExportExcel && typeof onExportExcel == "function";
  const classes = useStyles({ disable ,maxHeight });
  const { t } = useTranslation();
  const isEmpty = useMemo(() => data.length <= 0, [data]);
  const renderLoading = () => {
    return (
      <div className={classes.loading}>
        <TableSkeleton />
      </div>
    );
  };

  const renderBody = () => {
    if (status == "loading" || loading) return null;
    if (status == "error") return null;
    if (isEmpty) return null;
    return (
      <TableBody>
        {data.map((row, index: number) => (
          <TableCollapseRow
            key={row[rowKey!] || (index as any)}
            disableSelect={disableSelect}
            enableRowButtonSelect={enableRowButtonSelect}
            data={row}
            index={index}
            actions={actions}
            columns={columns}
          />
        ))}
      </TableBody>
    );
  };

  const handleBody = () => {
    if (status == "loading" || loading) return renderLoading();
    if (status == "error")
      return <Error title={t("Something went wrong")} onClick={onTry} />;
    if (isEmpty) return <Empty title={t("No items found")} />;
    // return renderBody();
  };

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <TableMui stickyHeader>
          {!isEmpty && (
            <TableHeader
              disableSelect={disableSelect}
              columns={columns}
              disableActions={!Boolean(actions)}
            />
          )}
          {renderBody()}
        </TableMui>
        {handleBody()}
      </TableContainer>
      {!isEmpty && (
        <div className={classes.tableFooter}>
          <div className={classes.exportWrapper}>
            {isActiveExportExcel && (
              <ExportExcel onExportExcel={onExportExcel} />
            )}
          </div>
          <div>
            {tableDescription && (
              <Typography variant="overline">{tableDescription}</Typography>
            )}
            {totalDataCount && (
              <Typography variant="overline">
                {`[${totalDataCount}]`}
              </Typography>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// export default Table;

export default memo(TableCore, (prevProps, nextProps) => {
  if (prevProps.status != nextProps.status) return false;
  if (prevProps.loading != nextProps.loading) return false;
  if (prevProps.data === nextProps.data) return true;
  else return false;
}) as typeof TableCore;
