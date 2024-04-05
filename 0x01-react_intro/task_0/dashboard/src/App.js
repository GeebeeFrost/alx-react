import "./App.css";
import logo from "./holberton-logo.jpg";

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
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;
