import React from "react";
import { useInView } from "react-intersection-observer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Outlet } from "react-router-dom";
import "../assets/css/about.css";

function About() {
  const options = {
    unobserveOnEnter: true,
    rootMargin: "0px",
    threshold: 0.2,
  };
  const { ref, inView } = useInView(options);

  // Replace the URLs below with your actual LinkedIn and Email URLs
  const linkedInUrl = "https://www.linkedin.com/in/abderrahim-zebiri-aa9880282/";
  const emailUrl = "mailto:z.abdarahim@gmail.com";
  const githubUrl = "https://github.com/zebiriabderrahim";

  return (
    <section id="about" ref={ref}>
      <div className="about">
        <h2> Hi, My Name is</h2>
        <h1 className={inView ? "title show" : "title hidden"}> Abderrahim.</h1>
        <p className={inView ? "intro show" : "intro hidden"}>
          As a third-year computer engineering student, I'm eager to explore the
          realms of hardware, software, and robotics, aiming to make a
          significant impact on the future of technology. Through continued
          studies and valuable experience, I am excited to delve into diverse
          areas like telecommunications, medical technologies, and aerospace,
          seeking to find my true passion and contribute to the ever-evolving
          world of technology.
        </p>
        <p>
          <span className={inView ? "rocket animateRocket" : "rocket"}>🚀</span>
        </p>
        <div className="prompt">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={emailUrl} target="_blank" rel="noopener noreferrer">
            <AlternateEmailIcon />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <Outlet />
    </section>
  );
}

export default About;
