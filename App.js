import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, CalculatorOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Home from "./pages/Home";
import Dimensionnement from "./pages/Dimensionnement";
import About from "./pages/About";
import "antd/dist/reset.css";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo" style={{ height: "32px", margin: "16px", color: "white", textAlign: "center", fontWeight: "bold" }}>
            MLF Électrique
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Accueil</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CalculatorOutlined />}>
              <Link to="/dimensionnement">Dimensionnement</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<InfoCircleOutlined />}>
              <Link to="/about">À propos</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0, textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
            Bureau d'Études en Génie Électrique
          </Header>
          <Content style={{ margin: "16px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dimensionnement" element={<Dimensionnement />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            © {new Date().getFullYear()} Mamadou Lamine Faye - Bureau d'Études en Génie Électrique
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
