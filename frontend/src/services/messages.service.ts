import { http } from "../config/axios";
// import { Messages } from "../types/user-data.types";

export class MessagesService {
  static sendEmail = async (userUID: string, email: string) => {
    return await http.post<any>("/messages", {
      userUID: userUID,
      first_name: "",
      email: email,
      category_photo: "",
      city: "",
      street: "",
      date: "",
      time: "",
      message: "",
      terms: "",
    });
  };

  static getMessageById = async (messageID: string) => {
    return (await http.get<any>(`/message/${messageID}`)).data;
  };

  static getAllContacts = async () => {
    return (await http.get<any>("/messages")).data;
  };
}
