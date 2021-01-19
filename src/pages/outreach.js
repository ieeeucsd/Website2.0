import React from "react";
import Link from "gatsby-link";
import Sidebar from "../components/sidebar";

import '../layouts/outreach.css'

// var mainColors = {
//     Default: "#81b71a",
//     Blue: "#0059da",
//     Yellow: "#ffb100",
//     skyBlue: "#00cdda",
//     Red: "#ff5051",
//     discord: "#7289d9",
// };
const OutreachPage = () => (
    
  <div>
    <div className="sidebar">
    <Sidebar />
   </div>
   <div className="OutreachWrapper">
    <div className="OutreachMain">
      <div className="OutreachText">
        <h1>Outreach</h1>
        <h2>Pandemic Relief Design Competition</h2>
        <p1>The UCSD IEEE Pandemic Relief Design Competition is an opportunity for middle and high school students to demonstrate their ability to pursue interesting projects outside of the classroom and build solutions to problems in the real world. Over the course of a few months, students will work either in groups virtually or by themselves researching and designing a solution to a consequential problem resulting from the coronavirus pandemic. 
        <br/> 
        <br/> 
        Students of all different interests are welcome and encouraged to compete! Applications due by February 13, 2020.</p1>
        <div className="PandemicReliefButton">
            <button className="learn-more">
            <span
                className="circle"
                aria-hidden="true"
                style={{ background: "#00cdda" }}
            >
                <span className="icon arrow"></span>
            </span>
            <a href="https://www.eventbrite.com/e/ucsd-ieee-pandemic-relief-design-competition-tickets-136847060241" className="button-text">
                Sign Up!
            </a>
            </button>
        </div>
      </div>
    </div>
    </div>
  </div>
);

export default OutreachPage;