import React, { Component } from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <TheContact>
        <div id="header-background">
          <p id="placeholder">placeholder</p>
        </div>
        <span>
          {/* Logo animation */}
          <Overdrive id="img" duration="700">
            <img src={logo} alt="JM Logo" />
          </Overdrive>
        </span>
        <div>
          <h1>CONTACT</h1>
          <p>Don&#39;t be a stranger, go ahead and drop me a message.  I&#39;d love to hear from you!</p>
          {/* Contact Form */}
          <form
            method="post"
            encType="text/plain"
            onSubmit={event => {
              this.props.submitHandler(event);
            }}
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea rows="5" name="message" placeholder="Your message" />
            <button type="submit" id="submit">Send</button>
          </form>
        </div>
      </TheContact>
    );
  }
}

export default Contact;

const TheContact = styled.div`
max-width: 960px;
margin: 45px auto;
margin-top: 0px;
margin-bottom: 0px;
min-height: 70vh;
padding: 80px 5% 0px;
padding-top: 130px;

img {
  height: 127px;
}

span {
  position: fixed;
  top: 0px;
  right: 14px;
}

h1 {
  font-size: 38px;
  margin-bottom: 20px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
}

form {
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 50px;

  input {
    width: 425px;
    height: 50px;
    margin: 10px;
    padding-left: 10px;
    font-size: 24px;
    border: solid var(--JS-yellow);
  }

  textarea {
    width: 425px;
    margin: 10px;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 24px;
    border: solid var(--JS-yellow);
  }

  button {
    margin: 10px;
    margin-bottom: 6px;
    height: 30px;
    width: 150px;
    border-radius: 2%;
    font-size:20px;
    border: solid var(--JS-yellow);
    background: var(--JS-yellow);
  }
}

#header-background {
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
  height: 127px;
  position: fixed;
  background: #111;
}

#placeholder {
  visibility: hidden;
}
`;
