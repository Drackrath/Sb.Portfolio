import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="blue"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                  Hi! I'm Alexander Krieger, a student currently studying at{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    className="blue"
                    href="https://www.rwu.de/"
                  >
                    Ravensburg Weingarten University
                  </a>{" "}
                  and working as a student employee at{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    className="blue"
                    href="https://www.rolls-royce.com/products-and-services/power-systems.aspx"
                  >
                    Rolls Royce Power Systems
                  </a>.
                  <br />
                  <br />
                  I specialize in{" "}
                  <i>
                    <b className="blue">Full-Stack Development, Backend Systems,</b> and{" "}
                    <b className="blue">IT Consulting</b>.
                  </i>{" "}
                  My passion lies in creating efficient and innovative IT solutions.
                  <br />
                  <br />
                  I am proficient in
                  <i>
                    <b className="blue">
                      {" "}
                      Java, JavaScript, HTML5, CSS, SQL, React, Docker,
                    </b>{" "}
                  </i>
                  and more. I also have experience with tools and platforms like{" "}
                  <b className="blue">
                    Microsoft Power BI, PowerShell, Active Directory, and Cloud Computing.
                  </b>
                  <br />
                  <br />
                  My fields of interest include
                  <i>
                    <b className="blue"> Identity & Access Management, Agile Development,</b>{" "}
                    and{" "}
                    <b className="blue">
                      building intuitive and secure software applications.
                    </b>
                  </i>
                  <br />
                  <br />
                  I enjoy working with frameworks, databases, and technologies to bring
                  ideas to life. Some of my go-to tools include{" "}
                  <i>
                    <b className="blue">
                      VSCode, Git, Flutter, Node.js, MySQL, Jira.
                    </b>
                  </i>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Feel free to{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Drackrath"
                    className="blue"
                  >
                    connect{" "}
                  </a>
                  with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Drackrath"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/alexander-krieger-11027a1b4/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
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
