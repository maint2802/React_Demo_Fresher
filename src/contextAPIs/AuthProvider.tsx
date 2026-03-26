import React, { createContext, useEffect, useState } from "react";
import type { AuthUser } from "../types/types";
import { getCurrentUser } from "../services/auth";
import { useFetch } from "../customHooks/useFetch";
type AuthContextType = {
  authUser: AuthUser | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  // const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const { data: authUser, setData: setAuthUser } = useFetch<AuthUser | null>(
    getCurrentUser,
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
