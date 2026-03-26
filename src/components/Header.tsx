import { Link } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
const Header = () => {
  const authContext = useAuth();
  console.log(authContext);

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
