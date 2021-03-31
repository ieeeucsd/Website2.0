import React from "react";
import Sidebar from "../components/sidebar";
import TritonsLogo_RCSC from "../images/TritonsLogo_RCSC.png"
import '../layouts/robocup.css'

const RoboCupPage = () => (
  <div>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="RoboCupWrapper">
      <div className="RoboCupMain">
        <div className="RoboCupText">
          <h1>RoboCup SSL</h1>
          <p1>
          RoboCup SSL “By the middle of the 21st century, a tam of fully autonomous humanoid
          robot soccer players shall win a soccer game, complying with the official rules of FIFA,
          against the winner of the most recent World Cup” -RoboCup Initiative. <br /><br />

          In a world of rapidly developing artifical intelligence, it is our duty as creators and
          engineers to push the boundaries of robotics and make our own mark in the world. Tritons
          RCSC was founded as a vessel to carry on the spirit, ideals, and work-ethic that make UCSD
          a top tier institution. We are a club of philantrophy: always giving back to the community
          that has supported our efforts. The club aims to introduce newcomers, and curious minds, to
          the idea that research and engineering can be fun. <br /><br />

          In this project, five teams of students will cooperate to produce a team of AI-driven small
          size league robot soccer players. Our efforts will culminate at Bordeaux 2021, the RoboCup
          Soccer World Cup held on June 22nd at the University of Bordeaux, France, where we will
          compete against strong opposition like MIT, Cambridge, and Georgia Tech. <br /><br />

          RoboCup Soccer is a challenging annual project that will require people with experience and knowledge in the
          field. But don’t be discouraged, you will find that character can be a strong attribute needed
          for success. We encourage you to apply regardless of experience. <br /><br />
          </p1>
          <div id="bulletpoints">
            <h3>Skillset for project:</h3>
            <p1>
              <li>C++, Java</li>
              <li>OpenCV/Computer Vision</li>
              <li>STM32, Arduino, Rasp. Pi</li>
              <li>GitHub</li>
              <li>Data Structure/Algorithm</li>
              <li>Operating System</li>
              <li>Network</li>
              <li>Large code/Large Project</li>
              <li>EagleCAD</li>
              <li>SolidWorks</li>
            </p1>
          </div>
          <div className="RoboCupImg">
            <img src={TritonsLogo_RCSC}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RoboCupPage;
