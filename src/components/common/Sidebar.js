import React, { useContext } from "react";
import { Menu, Layout } from "antd";
import { UserOutlined, DashboardOutlined } from "@ant-design/icons";

import UIContext from "../../context/UIContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { Sider } = Layout;
  const ui = useContext(UIContext);
  console.log({ ui });
  return (
    <Sider trigger={null} collapsible collapsed={ui.collapsed}>
      <div className="logo">My Logo</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item path="" key="1" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item path="leads" key="2" icon={<UserOutlined />}>
          <Link to="/leads">Leads</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
