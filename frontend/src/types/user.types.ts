export interface IUser {
  uid: string;
  email: string;
}

export type UserAccount = {
  user: IUser;
  isLoggedIn: boolean;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
};
