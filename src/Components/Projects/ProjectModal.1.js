import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FontIcon from "material-ui/FontIcon";
import logo from "./js.png";
import read from "./readimg.jpg";

const style = {
  margin: 12,
};

class Modal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton titleStyle={{background: "#F4DB5D"}} label="EXIT" primary={true} onClick={this.handleClose} />,
    ];

    return (
      <section id="projects" name="projects">
        <div id="projects-grid">
          <div onClick={this.handleOpen}>
            <div className="project-icon">
              <img className="project-img" src={read} alt="Readativity" />
              <div className="overlay">
                <h2>Readativity</h2>
              </div>
            </div>
            <Dialog id="dialog" actions={actions} modal={true} open={this.state.open} bodyStyle={{background: "#F4DB5D"}}>
              <ModalStyle className="project-icon">
                <div className="overlay">
                  <h2 id="modal-title">Readativity</h2>
                  <p>Readativity is where reading meets productivity!</p>
                  <p id="project-description">
                    This app encourages you to read more while making the most of your time. You can
                    keep track of how long you read everyday and check how much you read over the
                    week.
                  </p>
                  <div id="project-links">
                  <Link to=""><RaisedButton label="LIVE SITE" style={style}/></Link>
                  <Link to=""><RaisedButton label="GITHUB REPO" style={style}/></Link>
                  </div>
                  <div id="modal-img">
                    <img className="project-img" src={read} alt="Readativity" />
                  </div>
                  <div className="tech">
                    <h3>Technologies &amp; TECHNIQUES</h3>
                    <p>
                      React.js, Chart.js, HTML5, CSS3, JavaScript(ES6), Node.js, PostgreSQL,
                      Knex.js, Express.js, Heroku, Cypress, Google News API, Git/Github, Agile
                      Workflow, Pair Programming
                    </p>
                  </div>
                </div>
              </ModalStyle>
            </Dialog>
          </div>
        </div>
      </section>
    );
  }
}

export default Modal;

const ModalStyle = styled.div`
  color: var(--black);

  img {
    height: 127px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 900;
    padding: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0px;
    margin-bottom: -5px;
  }

  #modal-title {
    font-size: 1.7em;
    text-decoration: underline;
    font-weight: 900;
    padding: 0;
    padding-bottom: 0rem;
    text-transform: uppercase;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: center;
  }

  #modal-img {
    display: flex;
    justify-content: center;
  }


  #projects-grid {
    align-items: center;
    display: flex;
    flex-direction: row;
  }



  #project-links {
    display: flex;
    justify-content: center;
    color: black;
    text-decoration: none;
  }

  .project-img {
    height: 345px;
    width: 345px;
  }

  .overlay p {
    font-size: 1rem;
    line-height: 1.2em;
    padding: 0 0.35rem;
    margin-bottom: 0.55rem;
    text-align: center;
  }

  .tech p {
    font-size: 17px;
    text-align: center;
  }

  #project-description {
    margin-bottom: 0;
  }

  #projects {
    background: var(--JS-yellow);
  }
`;