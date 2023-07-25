import { http } from "../config/axios";

export class SubscriptionService {
  static createCheckoutSession = async () => {
    return (await http.post<string>("/create-session")).data;
  };
}