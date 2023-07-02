import logo from './logo.svg';
import './Main.css';

function Main() {
  window.onload = function(){
    document.getElementById("cards").onmousemove = e => {
      for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    };
  };
  
  return (
    <header className="Hero">
      <div className="Profile-logo">
        <img src={logo} width="150" height="75" alt="logo"/>
      </div>
      <h2>
        Cooper Rockwell
      </h2>
      <div className="Horizontal">
        <p>
          Computer engineering student at&nbsp;
          <a
            className="University"
            href="https://www.purdue.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purdue University
          </a>
        </p>
      </div>
      <a
        className="Web-link"
        href="https://github.com/Coop8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        className="Web-link"
        href="https://www.linkedin.com/in/cooperrockwell/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="Web-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <dfn data-info="clicking this link will download resume">Resume</dfn>
      </a>
      <h3>Projects</h3>
      <div id="cards">
        <div className="card">
          <div className="card-content">
            <a
              className="Card-link"
              href="https://github.com/Coop8/Sivil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Sivil</h4>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <a
              className="Card-link"
              href="https://github.com/Coop8/Rays"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Rays</h4>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <a
              className="Card-link"
              href="https://github.com/Coop8/Coop8.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Portfolio</h4>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Main;