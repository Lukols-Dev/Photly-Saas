import "./login.form.css";

import { FC, useContext } from "react";
import { Button, Form, Input } from "antd";
import { UserAccount } from "../../types/user.types";
import { AuthContext } from "../../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

export const FormLogin: FC = () => {
  const { logIn } = useContext(AuthContext) as UserAccount;
  const navigate = useNavigate();

  const onFinish = async (value: any) => {
    await logIn(value.email, value.password);
    navigate("/auth/messages");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="formLogin"
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 32 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input className="formulage__input" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="formulage__input" />
      </Form.Item>
      <div>
        Don't have an account? <Link to="/register">Register</Link>
      </div>
      <div className="formLogin__login">
        <Button
          className="formLogin__login__btn"
          type="primary"
          htmlType="submit"
        >
          Log in
        </Button>
        <p>Or continue with</p>
        <div className="loginPage__left__formulage__socials">
          <Button shape="round" icon={<GoogleOutlined />}>
            Google
          </Button>
          <Button shape="round" icon={<FacebookOutlined />}>
            Facebook
          </Button>
        </div>
      </div>
    </Form>
  );
};
