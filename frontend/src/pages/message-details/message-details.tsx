import "./message-details.css";

import { FC, useEffect, useState } from "react";

import {
  ArrowLeftOutlined,
  DeleteOutlined,
  SendOutlined,
} from "@ant-design/icons";

import { Link, useSearchParams } from "react-router-dom";
import { MessagesService } from "../../services/messages.service";

export const MessageDetailsPage: FC = () => {
  const [searchParams, __setSearchParams] = useSearchParams();
  const messageID = searchParams.get("id");

  const [messageData, setMessageData] = useState({
    email: "",
    name: "",
    category: "",
    city: "",
    street: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const showMessage = async () => {
    if (messageID) {
      const response = await MessagesService.getMessageById(messageID);
      console.log(response.email);
      setMessageData({
        email: response.email,
        name: response.name,
        category: response.category_photo,
        city: response.city,
        street: response.street,
        phone: response.phone,
        date: response.date,
        time: response.time,
        message: response.message,
      });
    }
  };

  useEffect(() => {
    showMessage();
  }, []);

  if (!messageData) return null;

  return (
    <div className="messageDetailsPage">
      <header className="messageDetailsPage__header">
        <div className="messageDetailsPage__header__functions">
          <Link
            to="/auth/messages"
            className="messageDetailsPage__closeBtn"
            title="Back"
          >
            <ArrowLeftOutlined />
          </Link>
          <p className="messageDetailsPage__header__functions__author">
            {messageData.email}
          </p>
        </div>
        <div className="messageDetailsPage__header__functions">
          <button title="Delete message">
            <DeleteOutlined />
          </button>
          <button title="Send message">
            <SendOutlined />
          </button>
        </div>
      </header>
      <div className="messageDetailsPage__information">
        <div className="messageDetailsPage__information__field">
          <p>Full Name:</p>
          <h2>{messageData.name}</h2>
        </div>
        <div className="messageDetailsPage__information__field">
          <p>Category:</p>
          <h2>{messageData.category}</h2>
        </div>
        <div className="messageDetailsPage__information__field">
          <p>Address:</p>
          <h2>
            {messageData.city}, {messageData.street}
          </h2>
        </div>
        <div className="messageDetailsPage__information__field">
          <p>Phone:</p>
          <h2>{messageData.phone}</h2>
        </div>
        <div className="messageDetailsPage__information__field">
          <p>Date of the event:</p>
          <h2>
            {messageData.time}, {messageData.date}
          </h2>
        </div>
        <div className="messageDetailsPage__information__message">
          <p>Message:</p>
          <h3 className="messageDetailsPage__information__message__text">
            {messageData.message}
          </h3>
        </div>
      </div>
    </div>
  );
};
