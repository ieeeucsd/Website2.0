import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IEEELogo from "../images/IEEESDLogo.png";
import Sidebar from "../components/sidebar";

import '../layouts/robocup.css'

const RoboCupPage = () => (
  <div>
    <div className="sidebar">
    <Sidebar />
   </div>
   <div className="RobocupWrapper">
    <div className="RobocupMain">
      <div className="RobocupText">
        <h1>RoboCup SSL</h1>
        <p1>This page is a work in progress</p1>
        {/* TODO */}
      </div>
    </div>
    </div>
  </div>
);

export default RoboCupPage;