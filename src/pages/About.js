import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../assets/images/me.jpg";

export default function About() {
  return (
    <Container>
      <h2 className="title">About Me</h2>
      <Row>
        <Col md={5} lg={4} className="profile-div">
          <img src={myImage} alt="profile" className="profile" />
        </Col>
        <Col md={7} lg={8} className="profile-div">
          <div className="description">
            <p>
              My name is Mauricio Gomez
            </p>
            <p>
              Manage new product development projects, Engineering, Quality.
            </p>
            <p>
            Full-stack code developer, experience on multiple industries elctronics, automotive, equipment development, chemical industry, software.
            </p>
            <p>
              Code developer and technology enthusiastic. 
              Quality leader wide experience on Quality Management Systems , Supplier Quality Management, 
              New product development, Engineering Management, Project Management, R&D, Quality Assurance,
              Operations Excellence, Strategic management, Manufacturing, Auditing, and 3rd Party certifications.
              Worked in different International and domestic assignments, 
               collaborating and managing multi-functional and multicultural teams. 
               Experience on Development of new products and technologies, implement and manage Quality systems, 
               project execution, develop and partner with strategic suppliers. Experience on following Industries: 
               Consumer electronics, Automotive, Chemicals and Construction products.
               </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}