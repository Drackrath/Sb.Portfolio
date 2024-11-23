import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDjango,
  DiGit,
  DiJavascript,
  DiMongodb,
  DiPython,
  DiMysql,
  DiRedis,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiCloudflare,
  SiDiscord,
  SiPostgresql,
  SiPowerapps,
  SiPowerautomate,
  SiPowerbi,
  SiSpotify,
  SiMysql,
  SiTwitch,
  SiFirebase,
  SiFlutter,
  SiAndroid,
} from "react-icons/si";

function Icon({ icon }) {
  const inner_text = icon.props["aria-label"];
  let text = "";
  if (inner_text !== undefined) {
    text = <div className="text">{inner_text}</div>;
  }
  return (
    <Col xs={4} md={2} className="tech-icons">
      {icon}
      {text}
    </Col>
  );
}
export function Category({ title, children }) {
  let elements = [];
  for (let i = 0; i < children.length; i++) {
    elements.push(<Icon icon={children[i]} aria-label={children[i].props} />);
  }
  return (
    <>
      {/*<h1 className="project-heading">*/}
      {/*    {title}*/}
      {/*</h1>*/}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {elements}
      </Row>
    </>
  );
}
/*
removed 
<!--<DiDjango aria-label="Django" />-->
 
*/

export default function Techstack() {
  return (
    <Category>
      <DiPython aria-label="Python" />
      <DiJavascript aria-label="JavaScript" />
      <DiJava aria-label="Java" />
      <DiHtml5 aria-label="HTML5" />
      <DiCss3 aria-label="CSS3" />
      <DiGit aria-label="Git" />
      <SiFirebase aria-label="Firebase" />
      <SiFlutter aria-label="Flutter" />
      <SiAndroid aria-label="Android" />
      <SiPowerbi aria-label="Power BI" />
      <SiPowerapps aria-label="Power Apps" />
      <SiPowerautomate aria-label="Power Automate" />
      <DiMysql aria-label="MySQL" />
      <DiMongodb aria-label="Mongo DB" />
    </Category>
  );
}
