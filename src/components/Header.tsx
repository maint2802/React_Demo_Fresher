import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/auth";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    getCurrentUser().then((res) => {
      console.log(res);
    });
  });

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
