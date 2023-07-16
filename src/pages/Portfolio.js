import React from "react";
import Project from "../components/Project";
// import images
import matrix from "../assets/images/project1.png";
import chrip from "../assets/images/project2.png";
import weather from "../assets/images/project3.png";
import quiz from "../assets/images/project4.png";
import book from "../assets/images/project5.png";
import run from "../assets/images/project6.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1 🔗",
      descriiption: "detail project 1.",
      image: run,
      github: "https://github.com/",
      deploy: "https://google.com",
    },
    {
      title: "Project 2  🔗",
      descriiption:
        "detail project 2.",
      image: book,
      github: "https://github.com/",
      deploy: "https://google.com",
    },
    {
      title: "Project 3 🔗",
      descriiption:
        "detail project 3..",
      image: matrix,
      github: "https://github.com/",
      deploy: "hhttps://google.com",
    },
    {
      title: "Project 4  🔗",
      descriiption:
        "detail project 4.",
      image: chrip,
      github: "https://github.com/",
      deploy: "https://google.com",
    },

    {
      title: "Project 5  🔗",
      descriiption: "detail project 5.",
      image: weather,
      github: "https://github.com/",
      deploy: "https://google.com",
    },
    {
      title: "Project 6  🔗",
      descriiption: "detail project 6.",
      image: quiz,
      github: "https://github.com/",
      deploy: "https://google.com",
    },

  ];

  const projectItem = projects.map((projects) => (
    <Project
      key={projects.title}
      title={projects.title}
      descriiption={projects.descriiption}
      image={projects.image}
      github={projects.github}
      deploy={projects.deploy}
    />
  ));

  return (
    <div>
      <h2 className="title">Projects</h2>
      <div className="row project">{projectItem}</div>
    </div>
  );
}