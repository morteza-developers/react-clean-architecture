import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Grid, Tooltip, Typography } from "@mui/material";
import { Slide } from "@mui/material";
import { useStyles } from "./styles";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string | null;
};

const Guide: FC<Props> = ({ children, title = "" }) => {
  const classes = useStyles();
  return (
    <Grid display="flex" rowGap={1} columnGap={0.3} alignItems="flex-start">
      {children}
      <div>
        <Tooltip
          TransitionComponent={Slide}
          draggable
          enterDelay={400}
          enterTouchDelay={0}
          leaveDelay={400}
          leaveTouchDelay={3000}
          title={
            <>
              <Typography variant="subtitle2">{title}</Typography>
            </>
          }
          placement="top"
          arrow
        >
          <HelpOutlineIcon className={classes.tip_icon} fontSize="medium" />
        </Tooltip>
      </div>
    </Grid>
  );
};

export default Guide;
