import React, { Component } from "react";
import "./eventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import "../../node_modules/aos/dist/aos.css";

class eventCard extends Component {
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
      <div className="CardContainer">
        <a
          className="Card"
          href={this.props.link}
          style={{ backgroundColor: this.props.color }}
        >
          <div className="titleSymbol">
            <h1>{this.props.title}</h1>
            <FontAwesomeIcon className="eventSymbol" icon={this.props.icon} />
          </div>
          <div className="eventInfo">
            <div className="circle">
              <FontAwesomeIcon
                className="cal"
                icon={faCalendarAlt}
                style={{ color: this.props.color }}
              />
            </div>
            <p>{this.props.text}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default eventCard;
