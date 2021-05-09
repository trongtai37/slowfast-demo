import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Input } from "antd";
import { Link } from "react-router-dom";
import AppRoute from "./Routes";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Search
          className="header__ngrok-endpoint"
          placeholder="Enter ngrok endpoint..."
          allowClear
          enterButton="Apply"
          size="large"
          onSearch={(value) => localStorage.setItem("ngrok-endpoint", value)}
        />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/playground">Playground</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", minHeight: "82vh" }}>
        <AppRoute />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          bottom: 0,
          width: "100%",
        }}
      >
        Dong Ho Painting Gen ©2021 Created by 1997 Team
      </Footer>
    </Layout>
  );
}

export default App;
