import { QueryUrl, replaceHistoryState } from "core/utils/tools";
import { useAppDispatch, useAppSelector } from "presentation/redux/store";
import { ComponentType, FC, useEffect } from "react";

type Props<P> = P & {};

type OptionType = {
  init: (d: object) => any;
  dispose: () => any;
  itemSelector: (d: any) => any;
  initializedSelector: (d: any) => any;
};
const whitSyncRedux = <P extends object>(
  WrappedComponent: ComponentType<Props<P>>,
  { init, dispose, itemSelector, initializedSelector }: OptionType
): React.FC<Props<P>> => {
  return (props: Props<P>) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(
        init(
          new QueryUrl().parseQuery(new URLSearchParams(window.location.search))
        )
      );
      return () => {
        dispatch(dispose());
      };
    }, []);
    return (
      <>
        <SyncFilterWhitQuery
          itemSelector={itemSelector}
          initializedSelector={initializedSelector}
        />
        <WrappedComponent {...props} />
      </>
    );
  };
};

type SyncFilterProps = {
  itemSelector: (d: any) => any;
  initializedSelector: (d: any) => any;
};
const SyncFilterWhitQuery: FC<SyncFilterProps> = ({
  itemSelector,
  initializedSelector,
}) => {
  const data = useAppSelector(itemSelector);
  const initialized = useAppSelector(initializedSelector);
  useEffect(() => {
    if (initialized) {
      replaceHistoryState(new QueryUrl().getQueryString(data));
    }
  }, [data]);
  return null;
};

export default whitSyncRedux;
