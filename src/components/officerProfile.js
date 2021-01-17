import React, { Component } from "react";
import "./officerProfile.css";

export default class officerProfile extends Component {
  
  render() {
    return (
        <div className="officerProfile">
              <p2> { this.props.name } </p2>
            <img className="teamMemberPhoto" src={ this.props.avatar } />
            <p1> { this.props.position } </p1>
        </div>
    );
  }
}
