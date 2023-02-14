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
            <img src={logo} width="100" height="50" alt="logo"/>
          </div>
          <p>
            Cooper Rockwell
          </p>
          <div className="Horizontal">
            <p>
              Computer engineering student at&nbsp;
            </p>
            <a
              className="University"
              href="https://www.purdue.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purdue University
            </a>
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
          <h3>Projects</h3>
          <div id="cards">
            <div className="card">
              <div className="card-content"></div>
            </div>
            <div className="card">
              <div className="card-content"></div>
            </div>
            <div className="card">
              <div className="card-content"></div>
            </div>
          </div>
        </header>
  );
}

export default Main;