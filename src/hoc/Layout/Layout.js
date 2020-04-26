import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter } from "react-router-dom";

// import Aux from "../Auxilliary/Auxilliary";

import { Layout, Menu, Row, Col } from "antd";
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  LikeOutlined
} from "@ant-design/icons";

import classes from "./Layout.module.scss";
import profilePhoto from "../../Assets/img/IMG_7tx27d.jpg";

// Container imports
import Personal from "../../containers/Personal/Personal";
import Education from "../../containers/Education/Education";
import Skill from "../../containers/Skill/Skill";

const { Header, Footer, Sider, Content } = Layout;

class PageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isOpen: false,
    };
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  
  toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed });

  // pathName = () => {
  //   // let location = useLocation();
  //   console.log(window.location.pathname);
  // }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            left: "0",
          }}
        >
          <Row>
            <Col span={24}>
              <div className={classes.ProfileLogoDiv}>
                <img
                  src={profilePhoto}
                  alt="Profile_Photo"
                  className={
                    this.state.collapsed ? classes.LogoResponsive : classes.Logo
                  }
                />
                {this.state.collapsed ? " " : <h5>Ram Prasadh Varadharajan</h5>}
              </div>
            </Col>
          </Row>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname !== "/" ? window.location.pathname : "/personal"]}>
            <Menu.Item key="/personal">
              <Link style={{ textDecoration: "none" }} to="/personal">
                <UserOutlined />
                <span className="nav-text">Personal</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/education">
              <Link style={{ textDecoration: "none" }} to="/education">
                <LikeOutlined />
                <span className="nav-text">Education</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/skill">
              <Link style={{ textDecoration: "none" }} to="/skill">
                <ProfileOutlined />
                <span className="nav-text">Skill</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className={classes.SiteLayoutSubHeaderBackground}
            style={{ padding: 0 }}
          >
            <span className={classes.Trigger} onClick={this.toggleCollapsed}>
              {this.state.collapsed ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )}
            </span>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className={classes.SiteLayoutBackground}
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route exact path="/personal" component={Personal} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/skill" component={Skill} />
                <Redirect from="/" to="/personal" />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(PageLayout);
