import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"; 
import { FaLinkedinIn, FaYoutube,  FaXing, FaTwitch } from "react-icons/fa";
import ViewCount from "./viewcount";
import Wakatime from "./wakatime";
import { useLocation } from "react-router-dom";
import ColorSquare from "./ColorSelector/ColorSelector";

function Footer() {
  const page = useLocation().pathname;
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ placeItems: "center" }}>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {}
            <li className="social-icons">
              {page === "/timeline" ? <ColorSquare /> : <></>}
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/Drackrath"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/@drackrath0"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.xing.com/profile/Alexander_Krieger45"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXing/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.twitch.tv/drackrath"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitch/>
              </a>
            </li>
            
            <li className="social-icons"></li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Alexander Krieger</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <ul className="footer-icons">
            <li className="social-icons">
              <ViewCount />
            </li>
            <li className="social-icons">
              <Wakatime />
            </li>
            {/* <li className="social-icons status">
                            <a href="https://status.jasoncameron.dev" target="_blank" rel="noopener noreferrer"
                               style={{color: "white", textDecoration: "none"}}><FaServer/>&nbsp;&nbsp;<span style={{textAlign: "center"}}>Status</span></a>
                        </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
