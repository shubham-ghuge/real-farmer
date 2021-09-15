import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";

function UserInfo() {
  let navigate = useNavigate();
  const { name, email, setUserLoginStatus, logout } = useAuthContext();
  function logoutUser() {
    logout();
    setUserLoginStatus(false);
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
        <li className="list-item">
          name: <span className="fw-600">{name}</span>
        </li>
        <li className="list-item">
          email: <span className="fw-600">{email}</span>
        </li>
        <li className="list-item">
          <button
            onClick={logoutUser}
            className="btn-c-primary cta"
            style={{ padding: ".7rem 1rem" }}
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
}
export { UserInfo };
