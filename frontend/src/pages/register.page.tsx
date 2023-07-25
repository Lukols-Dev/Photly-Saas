import "./register.page.css";

import { FC } from "react";
import { FormRegister } from "../components/forms";
import image from "../assets/photo_login.png";
import { ExpandOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const RegisterPage: FC = () => {
  return (
    <div className="registerPage">
      <Link className="regLogrPage__logo" to="/">
        <ExpandOutlined /> PHOTLY
      </Link>
      <div className="registerPage__left">
        <div className="registerPage__left__formulage">
          <FormRegister />
        </div>
      </div>
      <div className="registerPage__right">
        <img alt="" src={image} />
      </div>
    </div>
  );
};
