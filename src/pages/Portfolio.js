import React from "react";
import Project from "../components/Project";
// import images
import matrix from "../assets/images/project1.jpg";
import chrip from "../assets/images/project2.jpg";
import weather from "../assets/images/project3.jpg";
import quiz from "../assets/images/project4.jpg";
import book from "../assets/images/project5.jpg";
import run from "../assets/images/project6.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1 🔗",
      descriiption: "detail project 1.",
      image: run,
      github: "https://github.com/MauricioGB1/MAUGB-M3C-Password-Generator-03-23-JS",
      deploy: "https://mauriciogb1.github.io/MAUGB-M3C-Password-Generator-03-23-JS/",
    },
    {
      title: "Project 2  🔗",
      descriiption:
        "detail project 2.",
      image: book,
      github: "https://github.com/MauricioGB1/MAUGB-M4C-Coding-Assessment-API-Timed-Coding-Quiz",
      deploy: "https://mauriciogb1.github.io/MAUGB-M4C-Coding-Assessment-API-Timed-Coding-Quiz/",
    },
    {
      title: "Project 3 🔗",
      descriiption:
        "detail project 3..",
      image: matrix,
      github: "https://github.com/MauricioGB1/MAUGB-M5C-Work-Day-Scheduler-Third-Party-API",
      deploy: "https://mauriciogb1.github.io/MAUGB-M5C-Work-Day-Scheduler-Third-Party-API/",
    },
    {
      title: "Project 4  🔗",
      descriiption:
        "detail project 4.",
      image: chrip,
      github: "https://mauriciogb1.github.io/MAUGB-M6C-Server-Side-API-Weather-Dashboard/",
      deploy: "https://mauriciogb1.github.io/Project-1-Brewery-locator-and-rating-service-website-Group-6/",
    },

    {
      title: "Project 5  🔗",
      descriiption: "detail project 5.",
      image: weather,
      github: "https://github.com/MauricioGB1/Project-1-Brewery-locator-and-rating-service-website-Group-6",
      deploy: "https://mauriciogb1.github.io/Project-1-Brewery-locator-and-rating-service-website-Group-6/",
    },
    {
      title: "Project 6  🔗",
      descriiption: "detail project 6.",
      image: quiz,
      github: "https://github.com/MauricioGB1/MAUGB-M11C-Express-Js-Back-End-Note-Taker",
      deploy: "https://serene-inlet-45208.herokuapp.com/",
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