import Sidebar from "../modules/Sidebar";
import Dashbody from "../modules/Dashbody";
// import { Col, Container, Row } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dash-left">
          <Sidebar />
        </div>
        <div className="dash-right">
          <Dashbody />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
