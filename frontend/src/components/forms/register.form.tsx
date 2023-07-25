import "./register.form.css";

import { Button, Checkbox, Form, Input, message } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthService } from "../../services/user-authentication.service";

export const FormRegister: FC = () => {
  const navigate = useNavigate();
  const [checkTerms, setCheckTerms] = useState<boolean>(false);
  const [checkNewsletter, setCheckNewsletter] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    if (
      values.email &&
      values.password &&
      values.name &&
      values.surname &&
      checkTerms
    ) {
      try {
        await UserAuthService.registerAccount(
          values.email,
          values.password,
          values.name,
          values.surname,
          checkTerms,
          checkNewsletter
        );
        navigate(`/register/complete?email=${values.email}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      message.error("Musisz wypełnić wszystkie obowiązkowe pola!");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="formRegister"
      name="basic"
      wrapperCol={{ span: 32 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <h1>Register</h1>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input className="formulage__input" />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="surname"
        rules={[{ required: true, message: "Please input your surname!" }]}
      >
        <Input className="formulage__input" />
      </Form.Item>
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
      <Form.Item>
        <Checkbox
          checked={checkTerms}
          onChange={(e: CheckboxChangeEvent) => setCheckTerms(e.target.checked)}
        >
          Akceptuje <Link to="/regulamin">Warunki usługi</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Checkbox
          checked={checkNewsletter}
          onChange={(e: CheckboxChangeEvent) =>
            setCheckNewsletter(e.target.checked)
          }
        >
          Newsletter
        </Checkbox>
      </Form.Item>
      <Button
        className="formRegister__register__btn"
        type="primary"
        htmlType="submit"
      >
        Register
      </Button>
      <div>
        Have account? <Link to="/login">Login</Link>
      </div>
    </Form>
  );
};
