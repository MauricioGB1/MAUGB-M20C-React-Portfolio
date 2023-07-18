import React from "react";
import githubIcon from "../assets/icons/github.jpg";
import linkedinIcon from "../assets/icons/linkedin.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/MauricioGB1"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="icon" src={githubIcon} alt="github icon" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/mauricio-gomez-blanco-468681101"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="icon" src={linkedinIcon} alt="linkedin icon" />
        </a>
      </div>
      <p className="copyright">MG</p>
    </div>
  );
}