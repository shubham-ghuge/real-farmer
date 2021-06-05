import { useAuthContext } from "../../contexts/AuthContext";
import { Route, Navigate } from "react-router-dom";

export function PrivateRoute({ path, ...props }: any) {
  const { token } = useAuthContext();
  console.log(token);
  return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate replace to="/" />
  );
}
