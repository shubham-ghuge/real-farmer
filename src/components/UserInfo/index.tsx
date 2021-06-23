import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from "../Auth/Login";

function UserInfo() {
  let navigate = useNavigate();
  const { name, email } = useAuthContext();
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
