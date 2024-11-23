import React from "react";
import Card from "react-bootstrap/Card";
import { FaCamera, FaDog, FaUserFriends, FaBicycle, FaBook, FaMountain } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { MdMovieCreation } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="blue">Alexander Krieger</span> from{" "}
        <span className="blue">Germany.</span>
        <br />I am a student at Ravensburg Weingarten University and a Working Student at Rolls Royce Power Systems.
        <br />
        <br />
        Apart from tech and development, some other activities that I love to do!
      </p>
      <ul>
        <li className="about-activity">
          <FaBicycle /> Cycling
        </li>
        <li className="about-activity">
          <IoFastFoodSharp /> Exploring different cuisines
        </li>
        <li className="about-activity">
          <FaMountain /> Hiking and enjoying nature
        </li>
        <li className="about-activity">
          <FaBook /> Reading about technology and innovation
        </li>
        <li className="about-activity">
          <MdMovieCreation /> Watching Movies with friends
        </li>
      </ul>
      <div style={{ float: "left" }}>
        <h4>Fun facts!</h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            I have contributed to projects that have positively impacted{" "}
            <CountUp
              className="blue"
              style={{ fontFamily: "monospace, monospace" }}
              start={100}
              end={1000}
              delay={2}
            />
            <span className="blue">+</span> users globally!
          </li>
        </ul>
      </div>
    </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
