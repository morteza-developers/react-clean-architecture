import { ComponentType } from "react";

import { useQueryFilter } from "../hooks/useQueryFilter";
import { FilterContextType } from "../hooks/types";

type Props<P> = P & {};
const withQueryFilter = <
  P extends object & FilterContextType<any> = FilterContextType<any>
>(
  WrappedComponent: ComponentType<Props<P>>
): React.FC<Omit<P, keyof FilterContextType<any>>> => {
  return (props: Omit<P, keyof FilterContextType<any>>) => {
    const query = useQueryFilter();
    return <WrappedComponent {...query} {...(props as P)} />;
  };
};

export default withQueryFilter;
