import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IEEELogo from "../images/IEEESDLogo.png";
import Sidebar from "../components/sidebar";
import Sponsors from "../images/sponsors2019-2020.png"
import SponsorBrochure from "../downloads/SponsorBrochure2020.pdf"

import '../layouts/sponsor.css'


var mainColors = {
  Default: "#81b71a",
  Blue: "#0059da",
  Yellow: "#ffb100",
  skyBlue: "#00cdda",
  Red: "#ff5051",
  discord: "#7289d9",
};

const SponsorPage = () => (
  
  <div>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="SponsorWrapper">
      <div className="SponsorMain">
        <div className="SponsorPageText">
          <h1>Become a Sponsor</h1>
          <div className="SponsorPageInfo">
            <p1>IEEE Student Branch at UC San Diego is a non-profit organization focused on developing bright engineers to serve the community around us by hosting various events, community outreach, and several technical project national competitions. These programs would not have been possible without the generousity of our sponsors. Thus, we invite you to support and be a part of our efforts to strengthen our future scientists and engineers.</p1>
            
            <button className="learn-more">
              <span
                className="circle"
                aria-hidden="true"
                style={{ background: mainColors.Yellow }}
              >
                <span className="icon arrow"></span>
              </span>
              <a href={SponsorBrochure} download="Sponsor" className="button-text">
                Sponsor Info
              </a>
            </button>
            <p2>Contact our current Vice-Chair External, Lavita Zuo, at <a href="mailto:ieee@eng.ucsd.edu">ieee@eng.ucsd.edu</a> or <a href="mailto:x5zuo@ucsd.edu">x5zuo@ucsd.edu</a> for more information!</p2>
          </div>
        </div>
        <div className="ThankYouWrapper">
          <h1>A Big Thank You to Our Current Sponsors</h1>
          <img src={Sponsors} className="SponsorImage" ></img>
        </div>
      </div>
    </div>
  </div>
);

export default SponsorPage;
