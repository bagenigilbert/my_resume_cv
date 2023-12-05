import React from "react";

import { Paper, Tooltip, Zoom } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../images/ab-img.png";

AOS.init();

const About = () => {
  return (
    <section id="about">
      <div className="about_row">
        <div data-aos="fade-up">
          <img className="profile-pic" src={aboutimg} alt="" />
        </div>
        <div className="new_about">
          <h1 className="about_h1">About Me</h1>
          <p data-aos="fade-up">
         
Dynamic Full Stack Developer specializing in Software Engineering. Dedicated to crafting innovative solutions, I leverage strong engineering principles to surpass industry standards. With a unique blend of creativity and analytical thinking, I excel in collaborating with cross-functional teams and adapting to emerging technologies. My commitment to lifelong learning ensures I stay at the forefront of industry trends, ready to contribute meaningfully to the dynamic field of software engineering. Excited about driving innovation and tackling new challenges.







          </p>

          <div className="row">
            <div>
              <p>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="HTML5"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-html5 fa-3x" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="CSS3"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-css3-alt fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="JAVASCRIPT"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-js-square fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="REACTJS"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-react fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="JAVA"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-java fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="NODEJS"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-node fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="MONGODB-DATABASE"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fas fa-database fa-3x" aria-hidden="true" />
                </Tooltip>
              </p>
            </div>
            <div>
              <h1>Contact Details</h1>
              <p data-aos="fade-up" className="contact-about">
                <span>
                  <i className="fas fa-envelope" />
               bagenigilbert@gmail.com
                </span>

                <span>
                  <i className="fas fa-mobile-alt" />
                  0746741719
                </span>

                <span>
                  <i className="fas fa-map-marker-alt" /> Nairobi,
                  Kenya
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
