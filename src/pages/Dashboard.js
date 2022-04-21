import Sidebar from "../modules/Sidebar";
import Dashbody from "../modules/Dashbody";
import { Col, Container, Row } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Container fluid className="p-0 " bg="primary">
          <Row>
            <Col xl="2" className="p-0">
              <div className="Sidebar">
                <Sidebar />
              </div>
            </Col>
            <Col className="p-0">
              <Dashbody />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
