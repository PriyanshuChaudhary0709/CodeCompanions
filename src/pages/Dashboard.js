import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar Component */}
      <Sidebar />
      {/* Main Content */}
      <Container fluid className="p-4 flex-grow-1">
        <h2 className="mb-4">Dashboard</h2>
        <Row>
          {/* Profile Card */}
          <Col md={8}>
            <Card className="shadow-sm p-4">
              <Card.Body className="text-center">
                <h5 className="text-white bg-primary py-2 rounded">Web Developer</h5>
                <FaUserCircle size={80} className="text-primary my-2" />
                <h4>Ashutosh Yadav</h4>
                <div className="d-flex justify-content-center flex-wrap my-3">
                  {["Node.js", "HTML/CSS", "AI", "ML/NLP"].map((skill, index) => (
                    <span key={index} className="badge bg-secondary mx-2">{skill}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Hackathons List */}
          <Col md={4}>
            <h3>My Hackathons</h3>
            <ListGroup className="mt-3">
              {[
                { name: "InOut 7.0", link: "https://example.com/inout" },
                { name: "Hack Nagpur", link: "https://example.com/hacknagpur" },
                { name: "Hack with CW", link: "https://example.com/hackwithcw" },
              ].map((hackathon, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center border-0">
                  {hackathon.name}
                  <a href={hackathon.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">🔗</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
