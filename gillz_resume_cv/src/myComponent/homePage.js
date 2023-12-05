import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import profile from "../images/profile.jpg";
import Fab from "@material-ui/core/Fab";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img src={profile} className="profile-img" />
              </div>
              <h1 className="name-css">
                BAGENI <span className="surname">GILBERT</span>
              </h1>
              <p className="sub-detail">DESIGNER AND FULL STACK DEVELOPER</p>
              <br />
              <br />

              <div className="sub-detail">
                <p>Follow Me</p>
              </div>
              <p className="sub-detail2">
                <a href="https://github.com/gilbert2003-beep">
                  <i class="fab fa-github " />
                </a>
                <a href="https://www.instagram.com/gilley_jr/">
                  <i class="fab fa-instagram " />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100086627101609">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/gilbert-bageni-9413242a3/">
                  <i class="fab fa-linkedin" />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
