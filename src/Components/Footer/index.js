import React from "react";
import styled from "styled-components";
import github from "./github-sign.svg";
import linkedIn from "./linkedin.svg";
import talent from "./galvanize.png";
import marker from "./marker.svg";

const Footer = () => (
  <FooterNav>
    <h3 id="find-me"><img id="marker" src={marker} alt="Location Marker" />Denver, CO</h3>
    <nav>
      <ul id="links">
        <li >
          <a href="https://github.com/mrsaxmannjr" target="_blank"><img src={github} alt="Github Icon" /> </a>
        </li>

        <li >
          <a href="https://www.linkedin.com/in/mrsaxmannjr/" target="_blank"><img src={linkedIn} alt="LinkedIn Icon" /></a>
        </li>

        <li >
          <a href="https://talent.galvanize.com/students/2067" target="_blank"><img src={talent}alt="Galvanize Talent Icon" /></a>
        </li>
      </ul>
    </nav>
    <small>&copy; 2018 James Mann</small>
  </FooterNav>
);

export default Footer;

const FooterNav = styled.footer`
margin-bottom: 10px;

#marker {
  height: 25px;
  position: relative;
  right: 8px;
  top: 7px;
}

img {
  height: 45px;
  color: var(--JS-yellow);
}

#find-me {
  text-transform: uppercase;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 15px;
}

#links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 5px;
}

li{
  padding: 0 20px 0 20px;
}
  a {
      text-decoration: none;
      color: inherit;
    }

// Copyright
text-align: center;

small {
  font-size: 12px;
}
`;
