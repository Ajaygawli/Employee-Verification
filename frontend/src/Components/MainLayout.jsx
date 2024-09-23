import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiPresentationFill } from "react-icons/ri";

import { Outlet, useNavigate } from "react-router-dom";
import { FcDepartment } from "react-icons/fc";

import { Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const navigate= useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  

  const [adminitem, setadminitem] = useState(
    [
      {
        key: "",
        icon: <AiOutlineDashboard className="fs-4" />,
        label: "Dashboard",
      },
      {
        key: "companies",
        icon: <FcDepartment className="fs-4" />,
        label: "Companies",
      },
      {
        key: "candidates",
        icon: <AiOutlineUser className="fs-4" />,
        label: "Candidates",
      },
      {
        key: "internal-team",
        icon: <RiPresentationFill className="fs-4" />,
        label: "Internal Team",
      },
    
      {
        key: "signout",
        icon: <AiOutlineLogout className="fs-4" />,
        label: "Sign Out",
      },
    ]
  )


 
  return (
    <div>
      <Layout  >
        <Sider trigger={null} collapsible collapsed={collapsed} width={250} theme="light" >
          <div className="bg-inherit">
            <h2 className=" fs-5 text-center py-3 mb-0">
              <span className="sm-logo"></span>
              <span className="lg-logo font-bold">Admin</span>
            </h2>
          </div>
          <Menu

            theme="light"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key === "signout") {
                localStorage.clear();
                navigate('/');
              } else {
                navigate(key);
              }
            }}


            items={
            adminitem
            }


          />
        </Sider>
        <Layout className="site-layout" style={{ width: "100%" , height:"100vh"}}>
          <Header
            className="flex justify-between ps-1 pe-5"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center dropdown">
                <div className="flex items-center gap-2">
                  <img
                    width={36}
                    height={36}
                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    alt=""
                  />
                 
                </div>
                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >

                </div>

              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
            //   minHeight: 280,
              background: colorBgContainer,
            }}
          >


            <Outlet />
          </Content>
        </Layout>
      </Layout>


    </div>
  );
};
export default MainLayout;
