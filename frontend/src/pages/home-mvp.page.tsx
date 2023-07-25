import "./home-mvp.page.css";

import { FC, useState } from "react";
import {
  CalendarOutlined,
  ExpandOutlined,
  FolderAddOutlined,
  LineChartOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import { MessagesService } from "../services/messages.service";

export const HomeMVPpage: FC = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const sendEmail = async () => {
    if (value) {
      const resp = await MessagesService.sendEmail(
        process.env.REACT_APP_USER_UID!,
        value
      );
      resp.status === 200 && message.success("Email was sent successfully.");
      resp.status === 400 && message.error("Sending error, try again.");
    } else {
      message.error("Enter email.");
    }

    setValue("");
  };

  return (
    <div className="homeMVPpage">
      <header className="homeMVPpage__header">
        <p className="homeMVPpage__header__logo">
          <ExpandOutlined /> PHOTLY
        </p>
      </header>
      <div className="homeMVPpage__hero">
        <div className="homeMVPpage__hero__description">
          <h1>Business automation application.</h1>
          <p className="homeMVPpage__hero__description__text">
            <span>Photly</span> is an app for photographers that will make
            contact and customer service much easier.
          </p>
          <p className="homeMVPpage__hero__description__text">
            Want to get access to the closed tests? Sign up for the waiting
            list.
          </p>
          <Input.Group style={{ marginTop: "20px" }} compact>
            <Input
              style={{
                width: "calc(100% - 150px)",
                height: "60px",
                fontSize: "18px",
              }}
              placeholder="Enter your e-mail"
              value={value}
              onChange={onChange}
            />
            <Button
              style={{
                height: "60px",
                fontSize: "18px",
                backgroundColor: "#3873ff",
              }}
              type="primary"
              onClick={sendEmail}
            >
              Send email
            </Button>
          </Input.Group>
          <p className="homeMVPpage__hero__description__text__policy">
            By clicking "Send email" you consent to sending commercial
            information by PHOTLY / information about PHOTLY to the indicated
            e-mail address. You can unsubscribe contacting us by e-mail <br />
            lukols.dev@gmail.com. For more details, review our{" "}
            <a>Privacy Policy</a>.
          </p>
          <div className="homeMVPpage__hero__description__tools__section">
            {toolsData.map((item, index) => (
              <div
                key={index}
                className="homeMVPpage__hero__description__tools"
              >
                <p className="homeMVPpage__hero__description__tools__icon">
                  {item.icon}
                </p>
                <p> {item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="homeMVPpage__hero__image">
          <img alt="AppImage" src="./landing_image.jpg" />
        </div>
      </div>
    </div>
  );
};

const toolsData = [
  {
    icon: <FolderAddOutlined />,
    text: "Creating Galleries",
  },
  {
    icon: <LockOutlined />,
    text: "Access control",
  },
  {
    icon: <CalendarOutlined />,
    text: "Reservation system",
  },
  {
    icon: <LineChartOutlined />,
    text: "Admin panel",
  },
];
