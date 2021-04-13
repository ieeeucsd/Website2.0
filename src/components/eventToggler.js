import React, { Component, setState } from "react";
import "./eventToggler.css";
import EventCard from "./eventCard.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faArrowRight,
  faBrain,
  faCodeBranch,
  faRobot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Iframe from 'react-iframe'

class eventToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      live: true
    };
  }
  handleToggle = () => {
    this.setState({live: !this.state.live})
  }
  render() {
    return (
      <div>
        {/* <div className={this.state.live ? "one" : "two"}> */}
          { this.state.live ?
          <div>
            <EventCard
            title="Covid Design"
            icon={faBrain}
            link="/outreach"
            text="11:59pm Feb. 13th"
            color="#0059DA"
          />
          <EventCard
            title="HARD Hack"
            icon={faCodeBranch}
            link="https://hardhacksd.com"
            text="8:30pm, Sept 20th"
            color="#FFB100"
          />
          <EventCard
            title="QP Fall 2020"
            icon={faUsers}
            link="http://www.ieeeqp.com"
            text="8:30pm, Sept 20th"
            color="#00CDDA"
          />
          <EventCard
            title="RoboCup"
            icon={faRobot}
            link="/robocup"
            text="8:30pm, Sept 20th"
            color="#FF5051"
          />
          </div>
            :
            <Iframe className="FBEvents" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fieeeucsd%2F&tabs=timeline&width=340&height=1080&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1823648257806732" width="340" height="1080" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe>
        
          }
          <div className="EventToggle" onClick = {this.handleToggle }><p>{this.state.live ? "Upcoming" : "Year-Long"}</p></div>

        {/* </div> */}
        
      </div>
    );
  }
}

export default eventToggle;
