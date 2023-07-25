import "./login.page.css";

import { FC } from "react";
import { FormLogin } from "../components/forms";
import image from "../assets/photo_login.png";

export const LoginPage: FC = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__left">
        <div className="loginPage__left__formulage">
          <h1>Back to your digital life.</h1>
          <p>Choose on of the options to go.</p>
          <FormLogin />
        </div>
      </div>
      <div className="loginPage__right">
        <img alt="" src={image} />
      </div>
    </div>
  );
};
