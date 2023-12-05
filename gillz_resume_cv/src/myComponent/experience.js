import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const particleoptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

AOS.init();
const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
            My <span className="surname">Experience</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Project Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>Development</h2>
              <Typography variant="body2" color="inherit" component="p">
              I have developed an app specializing in delivery services and a separate platform for selling photos through Photoshop. The delivery app ensures efficient and secure parcel transport, while the Photoshop-integrated platform facilitates the sale of high-quality images.
              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2023 -</span>-<span>July 2023</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Web Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>Web Skills</h2>
              <Typography variant="body2" color="inherit">
              <b>As a web developer, I bring a wealth of experience and expertise to the table. I am proficient in a wide range of web development technologies, including HTML, CSS, JavaScript, and various frameworks. My portfolio showcases a diverse array of successful projects, highlighting my ability to create responsive and visually appealing websites.</b>.
              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2023 -</span>-<span>July 2023</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Backend Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>Backend Skills</h2>
              <Typography variant="body2" color="inherit" component="p">
              I excel in backend development, specializing in frameworks like Django, Flask, and various other technologies. My skill set encompasses designing and implementing robust, scalable backend solutions that ensure optimal performance and seamless functionality for your projects. With a deep understanding of server-side languages, database management, and API development, I bring a comprehensive approach to deliver top-tier backend solutions tailored to your unique requirements              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2023 -</span>
              <span>Present</span>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
