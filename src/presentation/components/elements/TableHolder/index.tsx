import { FC, ReactNode } from "react";
import { Grid, Typography, Divider, Button, SvgIcon } from "@mui/material";
import { useTranslation } from "react-i18next";
import ExportModule from "./components/ExportModule";
import { useStyles } from "./TableHolderStyles";
import RestoreIcon from "assets/icons/restore.svg";
type Props = {
  children?: ReactNode;
  title?: string | null;
  restoreCount?: number;
  badgeTitle?: number;
  onRestore?: () => void;
  actions?: ReactNode;
  isRestore?: boolean;
  onExport?: () => Promise<any>;
  filterBar?: ReactNode;
  toolbar?: ReactNode;
};

const TableHolder: FC<Props> = ({
  children,
  title,
  restoreCount = 0,
  onRestore = () => null,
  actions,
  badgeTitle,
  isRestore,
  onExport,
  filterBar,
  toolbar,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isShowRestoreBtn = isRestore && restoreCount > 0;
  return (
    <Grid container sx={{ backgroundColor: "paper.main" }}>
      <Grid className={classes.warper} item xs={12} container>
        <Grid item className={classes.head}>
          <div className={classes.barElement}></div>
          <Typography fontWeight={600} fontSize={14}>
            {title}
          </Typography>
          {badgeTitle && <div className={classes.badge}>{badgeTitle}</div>}
        </Grid>
        {toolbar && (
          <Grid item xs={12}>
            {toolbar}
          </Grid>
        )}
        <Grid item className={classes.actionWarper}>
          {filterBar && (
            <Grid item className={classes.searchBar}>
              {filterBar}
            </Grid>
          )}
          <Grid
            item
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            columnGap="8px"
          >
            {isShowRestoreBtn && (
              <Button onClick={onRestore} className={classes.restoreBtn}>
                <SvgIcon component={RestoreIcon} inheritViewBox />
                {t("Restore")}
                <div className={classes.restoreBadge}>{restoreCount}</div>
              </Button>
            )}

            {onExport && <ExportModule onExport={onExport} />}
            {actions && <div>{actions}</div>}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} padding="16px 0px">
        <Divider sx={{ borderColor: "gray.light" }} />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default TableHolder;
