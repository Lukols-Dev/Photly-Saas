import "./contact.page.css";

import { FC, useEffect, useState } from "react";
import { MailOutlined } from "@ant-design/icons";
import { TableMessages } from "../../components/tables/messages.table";
import { MessagesService } from "../../services/messages.service";
import { Messages } from "../../types/user-data.types";
import { AccountService } from "../../services/account.service";
import { bytesToSize } from "../../utils/size-gigabytes.utils";

export const AuthContactPage: FC = () => {
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      const res = await MessagesService.getAllContacts();
      setMessages(res);
    };
    getMessages();
  }, []);

  // messages.map((item, index) => {
  //   console.log(item.email, index);
  // });

  useEffect(() => {
    const getActualDBSize = async () => {
      const resp = await AccountService.getDBSize(
        process.env.REACT_APP_USER_UID!
      );
      console.log("siuze:", bytesToSize(resp.dbSize));
    };
    getActualDBSize();
  }, []);

  return (
    <div className="authContactPage">
      <div className="authContactPage__header">
        <MailOutlined className="icon" />
        <h1>Your Messages</h1>
      </div>
      <div className="authContactPage__table">
        <TableMessages data={messages} />
      </div>
    </div>
  );
};
