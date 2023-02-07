import logo from './logo.svg';
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <div className="Profile-logo">
          <img src={logo} width="100" height="50" alt="logo"/>
        </div>
        <p>
          Cooper Rockwell
        </p>
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
      </header>
    </div>
  );
}

export default Main;
