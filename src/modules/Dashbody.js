import { Col, Container, Row } from "react-bootstrap";

const Dashbody = () => {
  return (
    <>
      <div className="body">
        <Container fluid>
          <Row>
            <Col xxl="12" className="row py-5">
              <Col md="8">Overview</Col>
              <Col md="4">as</Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashbody;
