import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviflex from "../../Assets/Projects/moviflex.png";
import builders from "../../Assets/Projects/builders.png";
import quran from "../../Assets/Projects/quran.png";
import ecommers from "../../Assets/Projects/ecommers.png";
import assistant from "../../Assets/Projects/studentAssitant.png";
import nikeShoeWebsite from "../../Assets/Projects/nike.png";
import libraryManagement from "../../Assets/Projects/library.png";
import iete from "../../Assets/Projects/iete.png";
import weather from "../../Assets/Projects/weather.png";
import calculator from "../../Assets/Projects/calc.png";

function Projects() {
  return (
    <Container
      fluid
      className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={moviflex}
              isBlog={false}
              title="Moviflex website "
              description="Designed and implemented a dynamic user interface using React, ensuring a responsive and engaging user 
experience for the Moviflex website.Developed a robust backend with Node.js and Express, optimizing data management and ensuring seamless 
interaction between the frontend and MongoDB database"
              ghLink="https://github.com/shikkandar/Movi_flex_client"
              demoLink="https://shik-movi-flex.netlify.app"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={builders}
              isBlog={false}
              title="Builders Engineering College Website"
              description="Developed the Builders Engineering College website with a responsive design using HTML, CSS, JavaScript, and 
React, ensuring optimal user experience across devices.
Implemented a scalable backend with Node.js, Express, and MongoDB for efficient data management and enhanced 
performance."
              demoLink="https://www.builderscollege.edu.in/"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={quran}
              isBlog={false}
              title="Al-Quran Website"
              description="Developed a multilingual Quran website with a single landing page, integrating regional languages and audio 
options for enhanced user accessibility.
Implemented diverse language support and audio functionality for Quranic recitations, providing an inclusive and 
holistic user experience."
              ghLink="https://github.com/shikkandar/shik-quran"
              demoLink="https://shik-quran.netlify.app"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={ecommers}
              isBlog={false}
              title="Ecommerce-application"
              description="Expert in developing MERN stack e-commerce applications with seamless Razor pay integration, ensuring secure 
and efficient payment processing.
Proficient in MongoDB, Express.js, React.js, and Node.js, delivering robust, scalable, and user-friendly web 
solutions"
              ghLink="https://github.com/shikkandar/ecommers-client"
              demoLink="https://ecommers-shik.netlify.app"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={assistant}
              isBlog={false}
              title="Builders Engineering College Student Assistant "
              description="Designed an interactive web interface using HTML, CSS, and JavaScript for easy navigation and 
user engagement.
Developed dynamic features, including a CGPA calculator and content presentation for Anna University results and study materials, leveraging JavaScript and DOM manipulation.
"
              demoLink="https://shikkandar-builders-assistant-edu-in.netlify.app"
            />
          </Col>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={nikeShoeWebsite}
              isBlog={false}
              title="Nike_Shoes Shopping Website"
              description="Experienced in developing a Nike shopping cart application using React and Context API, providing a dynamic and responsive user interface.
Proficient in state management, creating a seamless and efficient shopping experience with features like product listing, cart updates, and checkout."
              ghLink="https://github.com/shikkandar/Nike-shopping-cart"
              demoLink="https://shik-nike-shopping-cart.netlify.app"
            />
          </Col>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={libraryManagement}
              isBlog={false}
              title="Library Management System"
              description="Developed a library management system using React, Formik, and JSON Server, providing an intuitive and efficient interface for managing books and borrowers.
Implemented features such as book cataloging, borrower management, and loan tracking, ensuring efficient data handling and a user-friendly experience.
"
              ghLink="https://github.com/shikkandar/guvi-formic"
              demoLink="https://shik-formic-library-managemnt-system.netlify.app"
            />
          </Col>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={iete}
              isBlog={false}
              title="IETE Website"
              description="Experienced in developing an IETE website using React, ensuring a modern and intuitive user interface.
Implemented features such as event management, member registration, and resource library, prioritizing usability and functionality.
"
              ghLink="https://github.com/shikkandar/IETE"
              demoLink="https://shik-iete.netlify.app"
            />
          </Col>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="Developed the Builders Engineering College website with a responsive design using HTML, CSS, JavaScript, and React, ensuring compatibility across devices.
Implemented a scalable backend utilizing Node.js, Express, and MongoDB to manage data efficiently and optimize overall website performance.
"
              demoLink="https://rest-countries-shik.netlify.app"
            />
          </Col>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Simple Calculator"
              description="•	Designed an interactive web interface using HTML, CSS, and JavaScript to optimize navigation and user engagement.
•	Developed dynamic features like a CGPA calculator and content presentation for Anna University results and study materials, utilizing JavaScript and DOM manipulation for enhanced interactivity and functionality."
              demoLink="https://shik-calc.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
