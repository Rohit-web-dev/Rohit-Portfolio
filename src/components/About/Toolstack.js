import React from "react";
import { Col, Row } from "react-bootstrap";
import chatgpt from "../../Assets/chatgpt.png"
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={chatgpt} className="img-fluid tool-logo" alt="chatgpt" />
      </Col>
    </Row>
  );
}

export default Toolstack;
