import "./sider.navigation.css";

import { FC, useContext, useState, useEffect } from "react";
import {
  CloudOutlined,
  LogoutOutlined,
  MailOutlined,
  PictureOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Layout, Avatar, Progress, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { UserAccount } from "../../types/user.types";
import { AccountService } from "../../services/account.service";
import {
  bytesToPercentage,
  bytesToSize,
} from "../../utils/size-gigabytes.utils";

const { Sider } = Layout;

export const NavigationSider: FC = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext) as UserAccount;
  const [dbSize, setDBsize] = useState<any>({});

  const logOutUser = async () => {
    await logOut();
    navigate("/");
  };

  useEffect(() => {
    const getActualDBSize = async () => {
      const respSize = await AccountService.getDBSize(
        process.env.REACT_APP_USER_UID!
      );
      setDBsize(respSize);
    };
    getActualDBSize();
  }, []);

  return (
    <Sider className="navigationSider">
      <div className="navigationSider__avatar">
        <Avatar
          className="navigationSider__avatar--hover"
          size={50}
          icon={<UserOutlined />}
        />
        <p>Łukasz Olszewski</p>
      </div>
      <Menu
        className="navigationSider__menu"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item icon={<PictureOutlined />}>
          <Link to="/auth/galleries">Galleries</Link>
        </Menu.Item>
        <Menu.Item icon={<MailOutlined />}>
          <Link to="/auth/messages">Messages</Link>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>
          <Link to="/auth/plans">Subscription</Link>
        </Menu.Item>
        <Menu.Item icon={<LogoutOutlined />} onClick={logOutUser}>
          Logout
        </Menu.Item>
      </Menu>
      <div className="navigationSider__menu__databaseSize">
        {dbSize ? (
          <>
            <p>Wolne miejsce na dane:</p>
            <Progress
              percent={bytesToPercentage(dbSize.dbSize, 30)}
              size="small"
              showInfo={false}
            />
            <p>Wykorzystano: {bytesToSize(dbSize.dbSize)} z 20GB</p>
            <Link
              to="/auth/plans"
              className="navigationSider__menu__databaseSize__button"
            >
              <CloudOutlined />
              Kup wiecej miejsca
            </Link>
          </>
        ) : (
          <Spin />
        )}
      </div>
    </Sider>
  );
};
