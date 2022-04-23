import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import avator from "../assets/img/avator.svg";
import Graph from "./components/graph";

const Dashbody = () => {
  return (
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
      <Row className="mb-5">
        <Col xl="3">
          <div className="d-card py-4 mb-3">
            <div className="card-title">Unresolved</div>
            <div className="card-number">60</div>
          </div>
        </Col>
        <Col xl="3">
          <div className="d-card py-4 mb-3 ">
            <div className="card-title ">Overdue</div>
            <div className="card-number ">16</div>
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
      <div className="graph-section">
        <div className="graph-right px-3 pb-3">
          <div className="graph-title pt-5">Today’s trends</div>
          <div className="graph-sub-title py-3">
            <div className="left">as of 25 May 2019, 09:41 PM</div>
            <div className="right">- Today</div>
          </div>
          <Graph />
        </div>
        <div className="graph-left">
          <div className="graph-card py-4">
            <div className="graph-card-title">Resolved </div>
            <div className="graph-card-number">449</div>
          </div>
          <div className="graph-card py-4">
            <div className="graph-card-title">Received </div>
            <div className="graph-card-number">426</div>
          </div>
          <div className="graph-card py-4">
            <div className="graph-card-title">Average first response time</div>
            <div className="graph-card-number">33m</div>
          </div>
          <div className="graph-card py-4">
            <div className="graph-card-title">Average response time</div>
            <div className="graph-card-number">3h 8m</div>
          </div>
          <div className="graph-card py-4">
            <div className="graph-card-title">Resolution within SLA</div>
            <div className="graph-card-number">94%</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashbody;
