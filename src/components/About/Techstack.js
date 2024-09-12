import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiGit,
  DiMysql,
} from "react-icons/di";
import { FaJava, FaPython} from "react-icons/fa";
import {
  SiFoodpanda,
  SiNumpy,
  SiPowerbi,
  SiPytorch,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <FaPython />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <FaJava />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <DiMongodb />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <DiGit />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <DiMysql />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiFoodpanda />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiNumpy />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiPytorch />
      </Col>
    </Row>
  );
}

export default Techstack;
