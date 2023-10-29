import { TOKEN } from "core/utils/constants/storage";
import { ClientCookie } from "core/utils/tools";
import { ComponentType } from "react";
import { Navigate } from "react-router-dom";

type Props<P> = P & {};
const withToken = <P extends object>(
  WrappedComponent: ComponentType<Props<P>>
): React.FC<Props<P>> => {
  return (props: Props<P>) => {
    const token = new ClientCookie().get(TOKEN);
    if (!token) return <Navigate to="/auth/login" replace />;

    return <WrappedComponent {...props} token={token} />;
  };
};

export default withToken;
