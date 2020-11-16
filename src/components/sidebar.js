import React, { Component } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IEEELogo from "../images/IEEESDLogo.png";
import Link from "gatsby-link"
import {
    faHome,
    faPaperPlane,
    faCalendarAlt,
    faHeart,
    faInbox,
    faLightbulb,
    faSeedling,
  } from "@fortawesome/free-solid-svg-icons";
import "../../node_modules/aos/dist/aos.css";

class sidebar extends Component {
    componentDidMount() {
        const isBrowser = typeof window !== "undefined";
        const AOS = isBrowser ? require("aos") : undefined;
    
        this.aos = AOS;
        this.aos.init();
      }
    
      componentDidUpdate() {
        this.aos.refresh();
      }
  
      
  render() {
    return (
      <div>
        <img src={IEEELogo} className="logo" />
        <ul className="sidebarItems">
          <Link className="nonActive" activeClassName="active" to="/#main">
            <FontAwesomeIcon className="icon" icon={faHome} size="1x"/>
            <div className="text">Overview</div>
          </Link>
          <Link className="nonActive" activeClassName="active" to="/#events" >
            <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
            <div className="text">Events</div>
          </Link>
          <Link className="nonActive" activeClassName="active" to="/#about" >
            <FontAwesomeIcon className="icon" icon={faPaperPlane} />
            <div className="text">About</div>
          </Link>
          <Link className="nonActive" activeClassName="active" to="/#contact">
            <FontAwesomeIcon className="icon" icon={faInbox} />
            <div className="text">Contact Us</div>
          </Link>
          <Link className="nonActive" activeClassName="active" to="/#getinvolved">
            <FontAwesomeIcon className="icon" icon={faSeedling} />
            <div className="text">Get Involved</div>
          </Link>
          <Link className="nonActive" activeClassName="active" to="/#sponsorship">
            <FontAwesomeIcon className="icon" icon={faHeart} />
            <div className="text">Sponsorship</div>
          </Link>
          <Link className="nonActive" activeClassName="active" to="/#projects">
            <FontAwesomeIcon className="icon" icon={faLightbulb} />
            <div className="text">Projects</div>
          </Link>
        </ul>
      </div>
    );
  }
}

export default sidebar;