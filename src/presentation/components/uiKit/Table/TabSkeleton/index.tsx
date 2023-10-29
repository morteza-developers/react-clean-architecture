import { Skeleton } from "@mui/material";
import { FC } from "react";

const TableSkeleton: FC = () => {
  return (
    <>
      <Skeleton variant="rounded" width="100%" height={40} animation="wave" />
      <Skeleton variant="rounded" width="100%" height={52} animation="wave" />
      <Skeleton variant="rounded" width="100%" height={52} animation="wave" />
      <Skeleton variant="rounded" width="100%" height={52} animation="wave" />
      <Skeleton variant="rounded" width="100%" height={52} animation="wave" />
    </>
  );
};

export default TableSkeleton;
