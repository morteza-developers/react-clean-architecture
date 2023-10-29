import { Route } from "react-router-dom";
import { RouteType } from "types/public.types";

const useElements = (routes: RouteType = []) => {
  const convertRoutesToElements = (newRoutes: RouteType) => {
    return newRoutes.map((item, index) => {
      if (!item.isAccess) return null;
      if (Array.isArray(item.children))
        return (
          <Route element={item.element} path={item.path} key={index}>
            {convertRoutesToElements(item.children as any)}
          </Route>
        );
      return <Route path={item.path} key={index} element={item.element} />;
    });
  };

  return convertRoutesToElements(routes);
};

export default useElements;
