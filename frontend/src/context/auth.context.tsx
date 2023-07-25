import { createContext, FC, useState } from "react";
import { UserAuthService } from "../services/user-authentication.service";
import { UserAccount } from "../types/user.types";

export const AuthContext = createContext<UserAccount | undefined>(undefined);

interface UserAuthContextProviderProps {
  children: React.ReactNode;
}

export const UserAuthContextProvider: FC<UserAuthContextProviderProps> = ({
  children,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, __setUser] = useState<any>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Log In function
  const logIn = async (email: string, password: string) => {
    try {
      await UserAuthService.authEmailPassword(email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Log Out function
  const logOut = async () => {
    try {
      await UserAuthService.logOutUser();
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
