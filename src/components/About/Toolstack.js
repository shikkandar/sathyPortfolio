import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMacos,
  SiNetlify,
  SiRender,
  SiGooglecolab,
  SiThemodelsresource,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiMacos />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiPostman />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiVercel />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiNetlify />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiRender />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiThemodelsresource />
      </Col>
    </Row>
  );
}

export default Toolstack;
