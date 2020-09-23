import React, { useContext } from "react";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import UIContext from "../../context/UIContext";

export default function Sidebar() {
  const { Sider } = Layout;
  const ui = useContext(UIContext);
  console.log({ ui });
  return (
    <Sider trigger={null} collapsible collapsed={ui.collapsed}>
      <div className="logo">My Logo</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item path="" key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item path="leads" key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
