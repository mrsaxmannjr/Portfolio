import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./js.png";

const Header = () => (
  <TheHeader>
    <Link id="logo" to="/">
      <img src={logo} alt="JM Logo" />
      <span id="row" >ANN</span>
      <div id="column">
        <span >
            A
        </span>
        <span>
            M
        </span>
        <span>
            E
        </span>
        <span>
            S
        </span>
      </div>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/about" onClick={this.addColor} >ABOUT</Link>
        </li>

        <li>
          <Link to="/resume" onClick={this.addColor}>RESUME</Link>
        </li>

        <li>
          <Link to="/projects" onClick={this.addColor}>PROJECTS</Link>
        </li>

        <li>
          <Link to="/contact" onClick={this.addColor}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  </TheHeader>
);


export default Header;

const TheHeader = styled.header`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: space-between;
-webkit-justify-content: space-between;
-ms-flex-pack: space-between;
justify-content: space-between;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
top: 0;
width: 100%;
position: fixed;

#logo {
  text-decoration: none;
  padding-left: 0;
  padding-top: 0;
  img {
    height: 40px;
  }
}

//Full name animation: fadeIn on Header hover
  :hover {
    #column {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: -5px;
      margin-top: -3px;
      width: 48px;
      line-height: 20px;
      font-size: 16px;
      color: #fff;
      animation: fadein 1s;
      -moz-animation: fadein 1s; /* Firefox */
      -webkit-animation: fadein 1s; /* Safari and Chrome */
      -o-animation: fadein 1s; /* Opera */
    }

    #row {
      font-size: 16px;
      position: fixed;
      top: 12.5px;
      left: 45px;
      color: #fff;
      animation: fadein2 1s;
      -moz-animation: fadein2 1s; /* Firefox */
      -webkit-animation: fadein2 1s; /* Safari and Chrome */
      -o-animation: fadein2 1s; /* Opera */
    }
  }

  //Full name display:none Header hover off
  #column {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -3px;
    margin-top: -10px;
    width: 48px;
    line-height: 25px;
    font-size: 22px;
    color: #fff;
    display: none;
  }

  @keyframes fadein {
    0% { opacity:0; }
    30% { opacity:0; }
    100% { opacity:1; }
  }

  @-moz-keyframes fadein { /* Firefox */
    0% { opacity:0; }
    30% { opacity:0; }
    100% { opacity:1; }
}

  @-webkit-keyframes fadein { /* Safari and Chrome */
    0% { opacity:0; }
    30% { opacity:0; }
    100% { opacity:1; }
  }

  @-o-keyframes fadein { /* Opera */
    0% { opacity:0; }
    30% { opacity:0; }
    100% { opacity:1; }
  }

  //Full name display:none Header hover off
  #row {
    font-size: 22px;
    position: fixed;
    top: 12.5px;
    left: 47px;
    color: rgba(244, 219, 93, 0);
  }

  @keyframes fadein2 {
    0% { opacity:0; }
    60% { opacity:0; }
    100% { opacity:1; }
  }

  @-moz-keyframes fadein2 { /* Firefox */
    0% { opacity:0; }
    50% { opacity:0; }
    100% { opacity:1; }
  }

  @-webkit-keyframes fadein2 { /* Safari and Chrome */
    0% { opacity:0; }
    50% { opacity:0; }
    100% { opacity:1; }
  }

  @-o-keyframes fadein2 { /* Opera */
    0% { opacity:0; }
    50% { opacity:0; }
    100% { opacity:1; }
  }

nav {
    margin-right: 20px;
}

ul {
  margin-left: 1.45rem;
  margin-bottom: 1.45rem;

  li {
    display: inline-block;
    margin-bottom: calc(1.45rem / 2);
    margin: 0;
      img {
      height: 100px;
      }
  }
}

a {
  text-decoration: none;
  color: #fff;
  padding: 15px 10px 18px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  display: block;
  font-size: 16px;
  padding: 15px 0px 18px 40px;
}
`;
