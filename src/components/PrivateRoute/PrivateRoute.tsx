import { useAuthContext } from "../../contexts/AuthContext";
import { Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export function PrivateRoute({ path, ...props }: any) {
  const { token } = useAuthContext();
  const { visibleMenu, setVisibilityMenu } = useAuthContext();
  useEffect(() => {
    if (window.innerWidth >= 600) {
      setVisibilityMenu(() => false);
    }
  }, [setVisibilityMenu]);
  return token ? (
    <>
      <div className={`App ${visibleMenu ? "show" : ""}`}>
        <Sidebar />
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
