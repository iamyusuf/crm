import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import UIContext from "./context/UIContext";
import Sidebar from "./components/common/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeadList from "./pages/leads/LeadList";

const { Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <UIContext.Provider value={{ collapsed }}>
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sidebar />
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/leads" exact component={LeadList} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </UIContext.Provider>
  );
}

export default App;
