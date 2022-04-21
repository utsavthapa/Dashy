import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Row, Col } from "react-bootstrap";
import Logo from "../assets/img/logo.svg";
const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <Col>
        <Row className="title py-5 m-0">
          <div className="d-flex justify-content-center align-items-center">
            <div className="pe-2">
              <img src={Logo} alt=""></img>
            </div>
            Dashboard Kit
          </div>
        </Row>
        <Row className="m-0  px-4 py-2 active">Overview</Row>
        <Row className="m-0  px-4 py-2 ">Tickets</Row>
        <Row className="m-0  px-4 py-2 ">Ideas</Row>
        <Row className="m-0  px-4 py-2">Contacts</Row>
        <Row className="m-0  px-4 py-2 ">Agents</Row>
        <Row className="m-0  px-4 py-2">Articles</Row>
      </Col>
    </div>
  );
};

export default Sidebar;
