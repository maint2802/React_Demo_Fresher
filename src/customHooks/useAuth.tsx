import { useContext } from "react";
import { AuthContext } from "../contextAPIs/AuthProvider";
AuthContext;
const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be called within AuthContext");
  }

  return authContext;
};

export default useAuth;
