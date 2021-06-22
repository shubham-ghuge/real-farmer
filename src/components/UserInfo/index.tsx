import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserInfo } from "../../services/user.service";
import { logout } from "../Auth/Login";
import { Loader } from "../Icons";

function UserInfo() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string }>();
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { data } = await getUserInfo();
      setUserData(data);
      return setLoading(false);
    }
    getData();
  }, []);
  function logoutUser() {
    logout();
    return navigate("/");
  }
  return (
    <div
      className="list-container w-70 w-sm-30"
      style={{
        position: "fixed",
        right: "0%",
        top: "5%",
        backgroundColor: "#fff",
      }}
    >
      <ul className="list">
        {loading ? (
          <Loader color="c-primary" />
        ) : (
          <>
            <li className="list-item">name: <span className="fw-600">{userData?.name}</span></li>
            <li className="list-item">email: <span className="fw-600">{userData?.email}</span></li>
            <li className="list-item">
              <button onClick={logoutUser} className="btn-c-primary cta" style={{padding:".7rem 1rem"}}>
                Log Out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
export { UserInfo };
