import logo from "./logo.svg";
import "./App.css";

import Button from "react-bootstrap/Button";

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
    var msg = "In Development";
  else var msg = "In Production";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing Update {msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
