import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import avator from "../assets/img/avator.svg";

const Dashbody = () => {
  return (
    <>
      <Container fluid className="dash-body px-5">
        <Row className="header pb-5 pt-4">
          <Col md="8">
            <div className="left-header">
              <div>Overview</div>
            </div>
          </Col>
          <Col md="4">
            <div className="right-header">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2" />
              <FontAwesomeIcon icon={faBell} className="px-2" />
              <div className="pe-2 ps-3">|</div>
              <div className="ps-3 name">Jones Ferdinand</div>
              <div>
                <img src={avator} alt="" className="ps-2"></img>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl="3">
            <div className="d-card py-4 mb-3">
              <div className="card-title">Unresolved</div>
              <div className="card-number">60</div>
            </div>
          </Col>
          <Col xl="3">
            <div className="d-card py-4 mb-3 d-border">
              <div className="card-title active">Overdue</div>
              <div className="card-number active">16</div>
            </div>
          </Col>
          <Col xl="3">
            <div className="d-card py-4 mb-3">
              <div className="card-title ">Open</div>
              <div className="card-number">43</div>
            </div>
          </Col>
          <Col xl="3">
            <div className="d-card py-4 mb-3">
              <div className="card-title">On hold</div>
              <div className="card-number">64</div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default Dashbody;
