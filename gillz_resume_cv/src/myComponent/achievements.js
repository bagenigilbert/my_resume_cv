import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Achievements = () => {
  return (
    <div id="achievements">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="name-css">
            <span className="surname">Qualities</span>
          </h1>
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          >
            <Paper
              elevation={24}
              style={{ backgroundColor: "#2c3e50", color: "white" }}
            >
              <div className="achievements">
                <ul className="fa-ul mb-0">
                  <li>
                    <i
                      className="fa-li fa fa-star "
                      style={{ color: "#F1F2B5" }}
                    />
                      I possess a unique set of skills that empower me to craft exceptional websites and contribute meaningfully to problem-solving, both in the digital realm and the real world. Proficient in a diverse range of programming languages, including JavaScript, ReactJS, Python, Angular, Flask, Django, Ruby, HTML. I have the technical prowess to create cutting-edge websites that seamlessly blend functionality and aesthetics.                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-star"
                      style={{ color: "#F1F2B5" }}
                    />
                   My passion for backend development, particularly in frameworks like Flask and Django, allows me to architect robust solutions that address complex challenges. I am well-versed in utilizing MongoDB, adding a valuable dimension to my skill set and enhancing data-driven functionalities on websites.
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-star "
                      style={{ color: "#F1F2B5" }}
                    />
                    Beyond the technical realm, I am an active participant in coding community activities, showcasing effective leadership and collaboration skills. I believe in the power of technology to solve real-world problems, and I am committed to leveraging my expertise to make a positive impact. Whether it's streamlining processes, enhancing user experiences, or contributing to social causes, I am dedicated to using my skills to bring about positive change.
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-star "
                      style={{ color: "#F1F2B5" }}
                    />
                    Continuous learning is at the core of my approach, ensuring that I stay ahead of the curve in the ever-evolving tech landscape. My commitment to personal growth extends to being a supportive and helpful individual. I aspire to not only create exceptional websites but also to be a go-to person for problem-solving, fostering a collaborative environment where everyone can thrive.
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-star "
                      style={{ color: "#F1F2B5" }}
                    />
                   In essence, I am not just a web developer; I am a dynamic individual with a holistic approach to using technology for the greater good. I am excited about the prospect of contributing my skills to tackle challenges, both in the digital realm and the world at large, and to create a positive and lasting impact.
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-star "
                      style={{ color: "#F1F2B5" }}
                    />
                   I am driven by a passion for solving real-world problems through technology. Committed to continuous learning, I aspire to be not only a top-notch web developer but also a supportive and helpful individual. My goal is to use my skills to bring about positive change and contribute meaningfully to both the digital realm and the broader community.
                  </li>
                </ul>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
