import "./App.css";
import logo from "./holberton-logo.jpg";
import { getFooterCopy, getFullYear } from "./utils";

const footer = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;

function App() {
  return (
    <>
      <div className="App-header">
        <div className="logo">
          <img src={logo} alt="logo" className="App-logo" />
        </div>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Email"></input>
        <label for="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>{footer}</p>
      </div>
    </>
  );
}

export default App;
