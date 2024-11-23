import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { SiDevpost } from "react-icons/si";
import { SlDocs } from "react-icons/sl";

// Images
// import test from "../../Assets/Projects/test.png";

/*
<ProjectCard
  imgPath={quicture}
  title="Quicture"
  description="A privacy-first photo sharing platform built to prioritize speed and lossless quality while ensuring total user anonymity. Leveraging peer-to-peer connections whenever possible, Quicture also offers temporary, encrypted cloud storage for situations where a direct connection isn't available."
  ghLink="https://github.com/"
  demoLink=""
/>
*/

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my projects that i've worked on.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <ProjectCard
              imgPath="https://private-user-images.githubusercontent.com/52197251/291554144-361d2f1d-ae4c-4fa3-8764-0a917570e5a2.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI0MDI5NzgsIm5iZiI6MTczMjQwMjY3OCwicGF0aCI6Ii81MjE5NzI1MS8yOTE1NTQxNDQtMzYxZDJmMWQtYWU0Yy00ZmEzLTg3NjQtMGE5MTc1NzBlNWEyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTIzVDIyNTc1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY2MTM5ZmZiMDMwZTBkNDQ4MTY2OTViZTBhYTUyNDNlNWMxMjZhNTI3NTU2MTcwN2VkYjJkYzllMDNjYmU3NzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.kmLUaEe-jJ31ksPJyzdSUK79_BHfOQX0TNVEygMOjhk"
              title="Colemak-Mod-DH-GER"
              description="A German Colemak Mod DH layout with a few additional changes to make it more comfortable for German users."
              ghLink="https://github.com/Drackrath/Colemak-Mod-DH-GER"
            />
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}

export default Projects;
