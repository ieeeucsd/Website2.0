import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IEEELogo from "../images/IEEESDLogo.png";
import Sidebar from "../components/sidebar";

import '../layouts/qp.css'

const QPPage = () => (
  <div>
    <div className="sidebar">
    <Sidebar />
   </div>
   <div className="QPWrapper">
    <div className="QPMain">
      <div className="QPPageText">
        <h1>Hello</h1>
        <p1>This page is a work in progress</p1>
      </div>
    </div>
    </div>
  </div>
);

export default QPPage;
