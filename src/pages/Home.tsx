import Login from "../components/Login/Login";
import { UseAuthContext } from "../contexts/AuthContext";
export default function Home() {
  const data = UseAuthContext();
  console.log(data);
  return (
    <>
      <Login />
    </>
  );
}
