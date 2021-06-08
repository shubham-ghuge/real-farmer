import { useAuthContext } from "../../contexts/AuthContext";
import { Route, Navigate } from "react-router-dom";

export function PrivateRoute({ path, ...props }: any) {
  const { token } = useAuthContext();
  return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
}
