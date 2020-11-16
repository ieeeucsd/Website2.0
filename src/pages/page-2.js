import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faCalendarAlt,
  faHeart,
  faInbox,
  faLightbulb,
  faSeedling,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import IEEELogo from "../images/IEEESDLogo.png";

const SecondPage = () => (
  <div>
    <div className="sidebar">
      <img src={IEEELogo} className="logo" />
      <ul>
        <a className="active" href="#home">
          <FontAwesomeIcon className="icon" icon={faHome} />
          <div className="text">Overview</div>
        </a>
        <a href="#about">
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
          <div className="text">About</div>
        </a>
        <a href="#getinvolved">
          <FontAwesomeIcon className="icon" icon={faSeedling} />
          <div className="text">Get Involved</div>
        </a>
        <a href="#events">
          <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
          <div className="text">Events</div>
        </a>
        <a href="#projects">
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
          <div className="text">Projects</div>
        </a>
        <a href="#sponsorship">
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <div className="text">Sponsorship</div>
        </a>
        <a href="#contact">
          <FontAwesomeIcon className="icon" icon={faInbox} />
          <div className="text">Contact Us</div>
        </a>
      </ul>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
