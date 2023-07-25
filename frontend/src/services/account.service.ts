import { http } from "../config/axios";

export class AccountService {
  static getDBSize = async (uid: string) => {
    return (await http.get<any>(`/auth/account/collection-size/${uid}`)).data;
  };
}
