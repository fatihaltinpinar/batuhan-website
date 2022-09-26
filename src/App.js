import React from "react";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import "./App.css";
import construction from './assets/construction.png';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <p>&lt;under construction /&gt;</p>
          </div>
          <div className="social">
            <a
              href="https://github.com/batuhanfaik"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>My Personal Website</h1>
            <p>I plan to turn this Github hosted page into a personal portfolio website</p>
            <p>Hope I'll be able to finish it during the semester</p>
          </div>
          <div class="horiontal-button-group">
            <a href="mailto:batuhan.derinbay@epfl.ch">
              <div className="cta">Send me an email</div>
            </a>
            <a href="https://github.com/batuhanfaik">
              <div className="cta"> Visit my GitHub</div>
            </a>
          </div>
          <img className="worker" src={construction} alt="bunu koymaman ayip" />
        </div>
        <div className="footer">
          <span>
            Made with React in Lausanne 📍 by{" "}
            <a
              className="underlined"
              href="https://github.com/batuhanfaik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Batuhan Faik Derinbay
            </a>
          </span>
        </div>
      </div>
    );
  };
}

export default App;
