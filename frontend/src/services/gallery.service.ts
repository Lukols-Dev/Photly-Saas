import { http } from "../config/axios";

export class MessagesService {
  static createNewGallery = async (
    userUID: string,
    name: string,
    description: string,
    date: any,
    password: string
  ) => {
    return await http.post<any>("/gallery", {
      userUID: userUID,
      name: name,
      description: description,
      date: date,
      password: password,
    });
  };

  static getMessageById = async (messageID: string) => {
    return (await http.get<any>(`/message/${messageID}`)).data;
  };

  static getAllContacts = async () => {
    return (await http.get<any>("/messages")).data;
  };
}
