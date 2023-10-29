import { CSSProperties } from "react";
import { IStatus } from "types/public.types";

export type Actions<T> = {
  isShow?: boolean;
  label?: string | null;
  icon?: any;
  onClick?: (data: T, index: number) => void;
  render?: (action: Actions<T>, row: T, index: number) => any;
};

export type Columns<R> = {
  field?: string;
  title?: string | null;
  style?: CSSProperties;
  render?: (row: R, index: number) => any;
  isHide?: boolean;
};

export interface TableProps<T> {
  maxHeight?: number;
  disable?: boolean;
  columns: Columns<T>[];
  data: Array<T> | [];
  actions?: Actions<T>[];
  tableDescription?: string;
  disableExportExcel?: boolean;
  onExportExcel?: () => Promise<string>;
  disableSelect?: true;
  enableRowButtonSelect?: any;
  totalDataCount?: any;
  loading?: boolean;
  status?: IStatus;
  onTry?: () => void;
  rowKey?: keyof T;
}
