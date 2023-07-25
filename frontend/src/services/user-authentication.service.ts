import { http } from "../config/axios";

export class UserAuthService {
  static authEmailPassword = (email: string, password: string) => {
    return http.post<any>("auth/login", {
      email: email,
      password: password,
    });
  };

  static registerAccount = (
    email: string,
    password: string,
    name: string,
    surname: string,
    terms: boolean,
    newsletter: boolean
  ) => {
    return http.post<any>("auth/register", {
      email: email,
      password: password,
      name: name,
      surname: surname,
      terms: terms,
      newsletter: newsletter,
    });
  };

  static logOutUser = () => {
    return http.post<any>("auth/logout");
  };

  static checkCurrUser = () => {
    return http.post<any>("auth/currentuser");
  };
}
