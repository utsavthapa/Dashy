import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Sidebar from "../modules/Sidebar";
import Dashbody from "../modules/Dashbody";
// import { Col, Container, Row } from "react-bootstrap";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "../assets/scss/Style.scss";
// import "react-pro-sidebar/dist/css/styles.css";
import React, { useState } from "react";
// import Logo from "../assets/img/logo.svg";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <div className="dashboard">
        <div className="dash-left">
          <ProSidebar collapsed={collapsed} className="slider">
            <Menu>
              <MenuItem
                icon={<FontAwesomeIcon icon={faBars} className="font-icon" />}
                onClick={() => setCollapsed(!collapsed)}
                className="pb-3 pt-3"
              >
                Dashboard Kit
              </MenuItem>
            </Menu>
            <Menu>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Overview
              </MenuItem>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Tickets
              </MenuItem>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Ideas
              </MenuItem>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Contacts
              </MenuItem>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Agents
              </MenuItem>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Articles
              </MenuItem>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Settings
              </MenuItem>
              <MenuItem
                icon={
                  <FontAwesomeIcon icon={faChartPie} className="font-icon" />
                }
              >
                Subscription
              </MenuItem>
            </Menu>
          </ProSidebar>
        </div>
        <div className="dash-right">
          <Dashbody />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
