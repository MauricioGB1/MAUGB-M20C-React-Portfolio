import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../assets/images/me.JPG";

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
              Multiple industries elctronics, automotive, equipment development, chemical industry, software.
            </p>
            <p>
              Full-stack code developer
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}