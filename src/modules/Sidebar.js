import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/img/logo.svg";
const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <Col>
        <div className="title pb-5 pt-4 m-0">
          <div className="d-flex justify-content-center align-items-center">
            <div className="pe-2 py-2">
              <img src={Logo} alt=""></img>
            </div>
            Dashboard Kit
          </div>
        </div>

        <div className="side-option px-4 py-3 active">
          <FontAwesomeIcon icon={faChartPie} className="font-icon" />
          Overview
        </div>
        <div className="side-option px-4 py-3 ">
          <FontAwesomeIcon icon={faTicket} className="font-icon" />
          Tickets
        </div>
        <div className="side-option px-4 py-3 ">
          <FontAwesomeIcon icon={faLightbulb} className="font-icon" />
          Ideas
        </div>
        <div className="side-option px-4 py-3">
          <FontAwesomeIcon icon={faUsers} className="font-icon" />
          Contacts
        </div>
        <div className="side-option px-4 py-3 ">
          <FontAwesomeIcon icon={faUser} className="font-icon" />
          Agents
        </div>
        <div className="side-option px-4 py-3">
          <FontAwesomeIcon icon={faBell} className="font-icon" />
          Articles
        </div>
      </Col>
    </div>
  );
};

export default Sidebar;
