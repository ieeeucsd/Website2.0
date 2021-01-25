import React from "react";
import Link from "gatsby-link";
import Sidebar from "../components/sidebar";
import PandemicComp from "../images/PandemicComp.png"

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
     <div className="OutreachImg">
      <img src={PandemicComp} />
     </div>
    <div className="OutreachMain">
      <div className="OutreachText">
        <h1>Outreach</h1>
        <h2>Pandemic Relief Design Competition</h2>
        <p1>The UCSD IEEE Pandemic Relief Design Competition is an opportunity for middle and high school students to demonstrate their ability to pursue interesting projects outside of the classroom and build solutions to problems in the real world. Over the course of a few months, students will work either in groups virtually or by themselves researching and designing a solution to a consequential problem resulting from the coronavirus pandemic. 
        <br/> 
        <br/> 
        Students of all different interests are welcome and encouraged to compete! Applications due by February 13, 2021.
        <br/> 
        <br/> 
        Once accepted, you will brainstorm a project that abides to the theme of this event and follows the rubric guidelines.  Working physical prototypes can be helpful for the design process, but are not necessary.  Partaking in this virtual event is an excellent opportunity to demonstrate your ability to pursue interesting projects outside of the classroom and build solutions to problems in the real world.  We can’t wait to see what you come up with!
        <br/> 
        <br/> 
        <b> Materials to submit:</b>
        <br/> 
        1. One-pager description
        <br/> 
        2. Video or sketch submission
        <br/> 
        <br/> 
        <b> Deadline for One-pager description, video, or sketch submission for final round: </b>
        <br/> 
        2/13 (Sat) -- Deadline & Registration deadline   
        <br/> 
        </p1>
        
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

        <h2>Rubric</h2>
        <table className="rubric">
          <tr>
            <th>Topic</th>
            <th>Expert (3)</th> 
            <th>Proficient (2)</th>
            <th>Emerging (1)</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>Courtesy and presentation</td>
            <td>
Students answers in a professional & well spoken manner with confidence
</td>
            <td>Students speak in somewhat well spoken manner and in some topics do not speak with complete confidence.</td>
            <td>Students struggle to speak in a professional manner and does not speak with a lot of confidence.</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Visuals and aids</td>
            <td>Students present a lot of graphics and visual aids that help out with the presentation.</td>
            <td>Student shows some visual aids but some of them are of average quality</td>
            <td>Students show very little to no visual aids that help with the presentation. </td>
            <td>50</td>
          </tr>
          <tr>
            <td>Creativity</td>
            <td>Exceeds expectations</td>
            <td>Meets expectations</td>
            <td>Does not meet expectations</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>Presentation is within the 2:30 - 3 minutes and covers all the topics</td>
            <td>Presentation ends a bit early but a lot is explained</td>
            <td>Presentation ends way too early with not enough explained.</td>
            <td>50</td>
          </tr>
        </table>
      </div>
    </div>
    </div>
  </div>
);

export default OutreachPage;
