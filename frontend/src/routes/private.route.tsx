import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { UserAccount } from "../types/user.types";

export const PrivateRoute: FC = () => {
  const { isLoggedIn } = useContext(AuthContext) as UserAccount;

  return !isLoggedIn ? <Navigate to="/login" replace /> : <Outlet />;
};
