import { useAuthContext } from "../../contexts/AuthContext";
import { Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";

export function PrivateRoute({ path, ...props }: any) {
  const { loginStatus } = useAuthContext();
  return loginStatus ? (
    <>
      <div className={`App`}>
        <main>
          <Header />
          <Route {...props} path={path} />
        </main>
      </div>
    </>
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
}
