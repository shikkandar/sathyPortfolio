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
import redux from "../../Assets/Projects/redux.png";
import json_server from "../../Assets/Projects/json-server.png";
import guvi_routing from "../../Assets/Projects/guvi-routing.png";
import contact from "../../Assets/Projects/contact-manager.png";
import react_todo from "../../Assets/Projects/react-todo-list.png";
import age_calc from "../../Assets/Projects/age-calculator.png";
import pagination from "../../Assets/Projects/pagination.png";
import mern_todo from "../../Assets/Projects/mern-todo.png";
import Sentiment from "../../Assets/Projects/Sentiment-Analysis1.webp";
import Leaf from "../../Assets/Projects/leaf.png";
import Land from "../../Assets/Projects/land.avif";
import Coper from "../../Assets/Projects/coper.png";
import Youtube from "../../Assets/Projects/youtube.jpg";
import Weather from "../../Assets/Projects/weather.png";

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
              imgPath={Sentiment}
              isBlog={false}
              title="Sentimental Analysis"
              description="In my Sentiment Analysis project, I developed a machine learning model to analyze text data and classify sentiments as positive, negative, or neutral. Using Python, natural language processing (NLP) techniques, and libraries like NLTK, I extracted insights from customer reviews and social media data."
              ghLink="https://github.com/Sathyanagaraj03/sentimental-analysis"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={Leaf}
              isBlog={false}
              title="Leaf Disease Detection"
              description="In my Leaf Disease Detection project, I built a machine learning model to identify and classify plant diseases from leaf images. Using Python, TensorFlow, and image processing techniques, the model helps farmers detect diseases early and take appropriate measures to protect crops."
              ghLink="https://github.com/Sathyanagaraj03/Leaf_Disease_Detection_"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={Land}
              isBlog={false}
              title="Singapore Land Resale Analysis"
              description="In my Singapore Land Resale Analysis project, I conducted a detailed exploration of real estate transaction data to uncover trends in property prices. Using Python, pandas, and visualization tools like Matplotlib and Seaborn, I analyzed historical resale data to provide insights on pricing patterns, regional demand, and market trends for effective decision-making."
              ghLink="https://github.com/Sathyanagaraj03/Singapore_land_resale_analysis"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={Coper}
              isBlog={false}
              title="Industrial Copper Modelling"
              description="In my Industrial Copper Modeling project, I developed predictive models to forecast copper demand and pricing trends in the industrial sector. Leveraging machine learning algorithms, historical data, and statistical analysis, the project aimed to optimize resource allocation and decision-making in copper production and supply chains."
              ghLink="https://github.com/Sathyanagaraj03/Industrial_copper_Modelling"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Data Harvesting"
              description="In my YouTube Data Harvesting project, I utilized YouTube's API to collect and analyze video metadata, including views, likes, comments, and channel statistics. By processing this data with Python and pandas, I gained insights into content trends, audience engagement, and video performance for data-driven recommendations and strategies."
              ghLink="https://github.com/Sathyanagaraj03/youtube_data_harvesting"
            />
          </Col>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather Prediction"
              description="In my Weather Prediction project, I built a machine learning model to forecast weather conditions using historical meteorological data. By applying techniques such as time series analysis and regression models with Python, I predicted temperature, humidity, and rainfall patterns, providing valuable insights for better planning and decision-making."
              ghLink="https://github.com/Sathyanagaraj03/weather_prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
