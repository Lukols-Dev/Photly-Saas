import "./galleries-details.css";

import { FC, useEffect, useState } from "react";

import {
  ArrowLeftOutlined,
  DeleteOutlined,
  LockOutlined,
  SettingOutlined,
  ShareAltOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import { Link, useSearchParams } from "react-router-dom";
import { MessagesService } from "../../services/messages.service";
import { Input, Switch } from "antd";

export const GalleriesDetailsPage: FC = () => {
  const [searchParams, __setSearchParams] = useSearchParams();
  const messageID = searchParams.get("id");

  const [messageData, setMessageData] = useState({
    title: "",
    description: "",
    isPrivate: false,
    images: [],
  });

  const showMessage = async () => {
    if (messageID) {
      const response = await MessagesService.getMessageById(messageID);
      console.log(response.email);
      setMessageData({
        title: response.title,
        description: response.description,
        isPrivate: response.isPrivate,
        images: response.images,
      });
    }
  };

  useEffect(() => {
    showMessage();
  }, []);

  if (!messageData) return null;

  return (
    <div className="galleriesDetailsPage">
      <header className="galleriesDetailsPage__header">
        <div className="galleriesDetailsPage__header__functions">
          <Link
            to="/auth/galleries"
            className="galleriesDetailsPage__closeBtn"
            title="Back"
          >
            <ArrowLeftOutlined />
          </Link>
          <p className="galleriesDetailsPage__header__functions__author">
            {messageData.title}
          </p>
        </div>
        <div className="galleriesDetailsPage__header__functions">
          <button title="Delete message">
            <DeleteOutlined />
          </button>
          <button title="Share gallery">
            <ShareAltOutlined />
          </button>
          <button title="Settings gallery">
            <SettingOutlined />
          </button>
        </div>
      </header>
      <div className="galleriesDetailsPage__information">
        <div className="galleriesDetailsPage__information__field">
          <p>Title:</p>
          <h2>Title</h2>
        </div>
        <div className="galleriesDetailsPage__information__field">
          <p>Description:</p>
          <h2>Description</h2>
        </div>
        <div className="galleriesDetailsPage__information__field">
          <p>Password:</p>
          <div className="galleriesDetailsPage__information__field__password">
            <Switch
              checked={true}
              checkedChildren={<LockOutlined />}
              unCheckedChildren={<UnlockOutlined />}
              // onChange={onChangeSwitch}
            />
            {true ? (
              <Input.Password
                name="password"
                placeholder="Password"
                // onChange={(e) => onChange(e)}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
