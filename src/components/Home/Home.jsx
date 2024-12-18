import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.webp";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Home320w from "../../Assets/home-main-320w.webp";
import Home480w from "../../Assets/home-main-480w.webp";


function Brackets(props) {
  const [code, setCodeOut] = useState(["<", "/>"]);
  let currentOption = 0;

  useEffect(() => {
    const options = [
      ["<", "/>"],
      ["{", "}"],
    ];
    const interval = setInterval(() => {
      // eslint-disable-next-line
      currentOption = currentOption === 0 ? 1 : 0;
      setCodeOut(options[currentOption]);
    }, 1000 * 15); //15s
    return () => clearInterval(interval);
  }, []);

  if (props.front === true) {
    return code[0];
  }
  if (props.back === true) {
    return code[1];
  }
}

const TextChanger = () => {
  const [text, setText] = useState("Alexander");

  const handleMouseEnter = () => {
    setText("Alexander");
  };

  const handleMouseLeave = () => {
    setText("Alexander");
  };
  const animationPlayState = text === "Alexander" ? "paused" : "initial";

  return (
    <span
      style={{ animationPlayState: animationPlayState }}
      className="json"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm&nbsp;
                <strong className="main-name">
                  <span className="brackets">
                    <Brackets front />
                  </span>{" "}
                  <TextChanger /> Krieger{" "}
                  <span className="brackets">
                    <Brackets back />
                  </span>
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            
            <Col md={5} style={{ paddingBottom: 20 }}>
            <img
                srcSet={Home320w, Home480w}
                sizes="(max-width: 320px) 320px, 480px"
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
