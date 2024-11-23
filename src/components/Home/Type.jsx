import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UI UX Developer",
          "Open Source Contributor",
          "Full Stack Engineer",
          "Cloud Architect",
          "DevOps Engineer",
          "Software Engineer",
          "Backend Developer",
          "Frontend Developer",
          "Mobile Developer",
          "Web Developer",
          "Designer",
          "Freelancer",
          "Entrepreneur",
          "Human",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 45,
      }}
    />
  );
}

export default Type;
