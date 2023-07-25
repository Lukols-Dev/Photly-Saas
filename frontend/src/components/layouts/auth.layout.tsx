import "./auth.layout.css";

import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { NavigationSider } from "../navigations";

const { Header, Content } = Layout;

export const AuthLayout: FC = () => {
  return (
    <Layout className="authLayout">
      <Header className="authLayout__header" />
      <Layout>
        <NavigationSider />
        <Content className="authLayout__content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
