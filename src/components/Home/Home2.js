import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about">
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I got into data science and learned a lot. From analyzing datasets to building models, each step brings something new. While I'm still learning, the journey has been exciting and rewarding! 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  PYTHON, JAVA, C, SQL, NumPy, Pandas, PowrBI, MatPlotLib, CBorn ,PyTorch, DataVisualization , Scikit , EDA ,DataAnalyser , HTML
                </b>
              </i>
              <br />
              <br />
              My field of interest lies in exploring data-driven &nbsp;
              <i>
                <b className="purple">technologies and developing innovative solutions through data analysis, machine learning, and AI. </b>  I'm also intrigued by areas related to big data and <b className="purple">predictive modeling.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for analyzing data and developing machine learning models using tools like <b className="purple">Python and frameworks</b> such as
              <i>
                <b className="purple">
                  {" "}
                   TensorFlow and PyTorch to build intelligent data-driven solutions.
                </b>
              </i>
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sathyanagaraj03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sathya-barani-a-n-840899304/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
