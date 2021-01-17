import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "../images/favicon.ico";
import Header from "../components/header";
import "./index.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "IEEE UCSD Site" },
        { name: "keywords", content: "IEEE, UCSD, IEEE San Diego Branch" },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
