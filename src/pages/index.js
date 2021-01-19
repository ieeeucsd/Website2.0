import React from "react";
import Link from "gatsby-link";

// Awesome Icons :)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowRight,
  faBrain,
  faCodeBranch,
  faRobot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// Photos
import photo1 from "../images/outreach.jpg";
import photo2 from "../images/technical.jpg";
import ProjectSpace from "../images/projectspace.jpg";
import Sponsors from "../images/sponsors2019-2020.png";
import QP from "../images/quarter.jpg";
import AP from "../images/micromouse.jpg";

// Components
import EventCard from "../components/eventCard.js";
import OfficerProfile from "../components/officerProfile.js";
import Sidebar from "../components/sidebar";

// Officer Avatars
import Chair from "../images/officers/Chair - William Martino.jpg"
import VCE from "../images/officers/VC External - Lavita Zuo.jpg"
import VCI from "../images/officers/VC Internal - Angela Wang.jpg"
import VCP from "../images/officers/VC Projects - Eric Xiao.jpg"
import VCF from "../images/officers/VCF - Parth Desai.jpg"
import VCEvents from "../images/officers/VC Events - Sarp User.jpeg"
import EventFinance from "../images/officers/Event Finance - Ameya Singh.jpg"
import GrandPrIEEE from "../images/officers/Grand PrIEEE- Ryan Tran.jpg"
import PR1 from "../images/officers/PR - Angela Liu.jpg"
import PR2 from "../images/officers/PR - Hannah Zhou.png"
import PR3 from "../images/officers/PR - Michele Murakami.jpg"
import PR4 from "../images/officers/PR - Steven Liu - Huaning Liu.png"
import Outreach from "../images/officers/Outreach - Ishaan Kavoori.png"
import Outreach2 from "../images/officers/Outreach - Derek Cantor.jpg"
import Professional from  "../images/officers/Professional - Yukti Vijay.jpeg"
import ProjectDrive from  "../images/officers/Project Drive - Tianyue Zhao.jpeg"
import PSChair from  "../images/officers/Project Space - Benjamin Tang.jpeg"
import QP1 from "../images/officers/QP - Danny Vo.jpg"
import QP2 from "../images/officers/QP - Siddharth Nag.jpg"
import Robocup from "../images/officers/Robocup - Joaquin Caso.jpg"
import Social1 from "../images/officers/Social - Amy Nguyen.jpeg"
import Social2 from "../images/officers/Social - Clyde Baron Rapinan.jpeg"
import Social3 from "../images/officers/Social - Oliver Korchnoy.jpg"
import TechnicalChair1 from "../images/officers/Technical - Chase Bastian.jpg"
import TechnicalChair2 from "../images/officers/Technical - Tim Wang (updated).png"
import TechnicalChair3 from "../images/officers/Technical - William Duan.jpg"
import Webmaster from "../images/officers/Webmaster - Dominick Lee.jpg"

// Color Scheme
var mainColors = {
  Default: "#81b71a",
  Blue: "#0059da",
  Yellow: "#ffb100",
  skyBlue: "#00cdda",
  Red: "#ff5051",
  discord: "#7289d9",
};

const IndexPage = () => (
  <div>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="content">
      <div className="Main" id="main">
        <div className="blob"></div>
        <div className="TextGroup">
          <h1>IEEE UC San Diego</h1>
          <p>
            IEEE at UC San Diego is a non-profit pre-professional student
            organization. We are dedicated to provide engineering students with
            hands-on experiences, technical and professional development and
            other resources to help them achieve their potential.
          </p>
          <div>
            <a className="getInvolvedButton" href="#getinvolved">
              <FontAwesomeIcon className="rightArrow" icon={faArrowRight} />
              Get Involved
            </a>
          </div>
        </div>
        <div className="Photos">
          <h1>Photos</h1>
          <div className="PhotoGrid">
            <img src={ photo1 }></img>
            <img className="photo2" src={ photo2 }></img>
          </div>
        </div>
      </div>
      <div className="Events" id="events">
        <h1>Events</h1>
        <EventCard
          title="Covid Competition"
          icon={faBrain}
          link="https://ieeeucsd.org/outreach"
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
    </div>
    <div className="content2">
      <div className="about" id="about">
        <h1>About Us</h1>
        <div className="aboutText">
          <p1>
            We are dedicated to helping develop students into professional
            Engineers
          </p1>
          <p>
            As an organization, we strive to provide opportunities to students
            both at UC San Diego and in the larger STEM community to gain
            hands-on experience with autonomous robotics and its various
            disciplines. Throughout the year, we host dozens of events and
            workshops to teach skills not frequently taught in the classroom, as
            well as outreach events for students looking to give back to the
            STEM community. We also provide professional development and other
            resources to help students achieve their true potential as they
            develop into professional engineers.
          </p>
        </div>
      </div>
      <div className="contact" id="contact">
        <h1>Contact Us</h1>
        <div className="contactText">
          <div className="verticalStack">
            <a className="generalRow" href="mailto:ieee@eng.ucsd.edu">
              <p2 className="generalButton">General</p2>
              <p1>ieee@eng.ucsd.edu</p1>
            </a>
            <a className="projectsRow" href="mailto:projects@ieeeucsd.org">
              <p2 className="projectsButton">Projects</p2>
              <p1>projects@ieeeucsd.org</p1>
            </a>
            <a className="outreachRow" href="mailto:outreach@ieeeucsd.org">
              <p2 className="outreachButton">Outreach</p2>
              <p1>outreach@ieeeucsd.org</p1>
            </a>
            <a className="technicalRow" href="mailto:tech@ieeeucsd.org">
              <p2 className="technicalButton">Technical</p2>
              <p1>tech@ieeeucsd.org</p1>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="content3">
      <div className="getInvolved" id="getinvolved">
        <h1>Get Involved!</h1>
        <div className="getInvolvedText">
          <div className="involvementStack">
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Blue }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  className="button-text"
                >
                  Join IEEE
                </a>
              </button>
            </div>
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Yellow }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a href="http://eepurl.com/gkUclH" className="button-text">
                  Newsletter
                </a>
              </button>
            </div>
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.skyBlue }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a
                  href="https://www.facebook.com/ieeeucsd/?view_public_for=851520398231493"
                  className="button-text"
                >
                  Facebook
                </a>
              </button>
            </div>
            <div className="involvementButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Red }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a
                  href="https://www.facebook.com/ieeeucsd/?view_public_for=851520398231493"
                  className="button-text"
                >
                  I-TRIPLE-EATS
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectSpace">
        <h1>Project Space</h1>
        <div className="ProjectSpaceContent">
          <div className="ProjectSpaceText">
            <p2>@EBU1-4710</p2>
            <p1>
              The Project Space is an open collaborative space for students to
              work on projects, practice technical skills, or meet new people
              and hang out.
            </p1>
            <div className="DiscordButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.discord }}
                >
                  <span className="icon arrow"></span>
                </span>
                <a href="https://discord.gg/NvvP5eF" className="button-text">
                  Our Discord
                </a>
              </button>
            </div>
          </div>
          <img className="ProjectSpacePhoto" src={ProjectSpace}></img>
        </div>
      </div>
    </div>
    <div className="content4">
      <div className="Sponsorship" id="sponsorship">
        <h1>Sponsorship</h1>
        <div className="SponsorText">
          <p1>
            IEEE Student Branch at UC San Diego is a non-profit organization
            focused on developing bright engineers to serve the community around
            us by hosting various events, community outreach, and several
            technical project national competitions. These programs would not
            have been possible without the generousity of our sponsors. Thus, we
            invite you to support and be a part of our efforts to strengthen our
            future scientists and engineers.
          </p1>
          <div className="sponsorButton">
            <button className="learn-more">
              <span
                className="circle"
                aria-hidden="true"
                style={{ background: mainColors.Red }}
              >
                <span className="icon arrow"></span>
              </span>
              <Link to="/sponsor" className="button-text">
                Support Us
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="OurSponsors">
        <div className="SponsorTitleGroup">
          <h1>Our Sponsors</h1>
          <FontAwesomeIcon className="SponsorHeart" icon={faHeart} />
        </div>
        <img className="SponsorImage" src={Sponsors}></img>
      </div>
    </div>
    <div className="content5">
      <div className="Projects" id="projects">
        <h1>Projects</h1>
        <div className="QPandAP">
          <div className="projectText">
            <img src={QP}></img>
            <p2>Quarterly Projects</p2>
            <p1>
              Applications open the beginning of every quarter and is a great
              opportunity for students to work together and gain more hands-on
              technical experience.
            </p1>
            <div className="projectButton">
              <button className="learn-more">
                <span
                  className="circle"
                  aria-hidden="true"
                  style={{ background: mainColors.Blue }}
                >
                  <span className="icon arrow"></span>
                </span>
                <Link to="/qp" className="button-text">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
          <div className="projectText">
            <img src={AP}></img>
            <p2>Annual Projects</p2>
            <p1>
              Applications open the beginning of Fall quarter each year.
              Students are able to work together in a team all year long to
              build projects for a multitude of different competitions!
            </p1>
            <button className="learn-more">
              <span
                className="circle"
                aria-hidden="true"
                style={{ background: mainColors.Yellow }}
              >
                <span className="icon arrow"></span>
              </span>
              <Link to="/qp" className="button-text">
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="content6">
      <div className="ourTeam" id="team">
        <h1>Meet The Officers</h1>
        <div className="executiveGrid">
          <OfficerProfile 
            name="William Martino"
            avatar={ Chair }
            position="Chair"
          />
          <OfficerProfile 
            name="Lavita Zuo"
            avatar={ VCE }
            position="VC External"
          />
          <OfficerProfile 
            name="Angela Wang"
            avatar={ VCI }
            position="VC Internal"
          />
          <OfficerProfile 
            name="Eric Xiao"
            avatar={ VCP }
            position="VC Projects"
          />
          <OfficerProfile 
            name="Parth Desai"
            avatar={ VCF }
            position="VC Finance"
          />
          <OfficerProfile 
            name="Sarp User"
            avatar={ VCEvents }
            position="VC Events"
          />
          <OfficerProfile 
            name="Ameya Singh"
            avatar={ EventFinance }
            position="Event Finance"
          />
          <OfficerProfile 
            name="Ryan Tran"
            avatar={ GrandPrIEEE }
            position="Grand PrIEEE"
          />
          <OfficerProfile 
            name="Angela Liu"
            avatar={ PR1 }
            position="PR Chair"
          />
          <OfficerProfile 
            name="Hannah Zhou"
            avatar={ PR2 }
            position="PR Chair"
          />
          <OfficerProfile 
            name="Michele Murakami"
            avatar={ PR3 }
            position="PR Chair"
          />
          <OfficerProfile 
            name="Steven Liu"
            avatar={ PR4 }
            position="PR Chair"
          />
          <OfficerProfile 
            name="Ishaan Kavoori"
            avatar={ Outreach }
            position="Outreach Chair"
          />
          <OfficerProfile 
            name="Derek Cantor"
            avatar={ Outreach2 }
            position="Outreach Chair"
          />
          <OfficerProfile 
            name="Yukti Vijay"
            avatar={ Professional }
            position="Professional Chair"
          />
          <OfficerProfile 
            name="Tianyue Zhao"
            avatar={ ProjectDrive }
            position="Project Drive"
          />
          <OfficerProfile 
            name="Benjamin Tang"
            avatar={ PSChair }
            position="Project Space"
          />
          <OfficerProfile 
            name="Danny Vo"
            avatar={ QP1 }
            position="Quarterly Project"
          />
          <OfficerProfile 
            name="Siddharth Nag"
            avatar={ QP2 }
            position="Quarterly Project"
          />
          <OfficerProfile 
            name="Joaquin Caso"
            avatar={ Robocup }
            position="Robocup Chair"
          />
          <OfficerProfile 
            name="Amy Nguyen"
            avatar={ Social1 }
            position="Social Chair"
          />
          <OfficerProfile 
            name="Clyde Rapinan"
            avatar={ Social2 }
            position="Social Chair"
          />
          <OfficerProfile 
            name="Oliver Korchnoy"
            avatar={ Social3 }
            position="Social Chair"
          />
          <OfficerProfile 
            name="Chase Bastian"
            avatar={ TechnicalChair1 }
            position="Technical Chair"
          />
          <OfficerProfile 
            name="Tim Wang"
            avatar={ TechnicalChair2 }
            position="Technical Chair"
          />
          <OfficerProfile 
            name="William Duan"
            avatar={ TechnicalChair3 }
            position="Technical Chair"
          />
          <OfficerProfile 
            name="Dominick Lee"
            avatar={ Webmaster }
            position="Webmaster"
          />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
