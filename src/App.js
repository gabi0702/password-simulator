import { useState } from "react";
import "./App.css";
import Checker from "./components/Checker";

function App() {
  const [val, setVal] = useState("");
  const [preventSubmit, setPreventSubmit] = useState(true);
  function valueChanged(e) {
    setVal(e.target.value);
    console.log(val);
  }
  function setPrev(prev) {
    setPreventSubmit(prev);
  }
  return (
    <div className="App">
      <h1>Password Checker</h1>
      <div>
        <input
          type="text"
          id="password-field"
          placeholder="Enter your password"
          required
          onChange={valueChanged}
        />
        <Checker val={val} setPrev={setPrev} />
      </div>

      <button
        disabled={preventSubmit}
        className="submit-btn"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Submit
      </button>
      <h3 id={val.length === 0 ? "hide-password" : "show-password"}>
        Your Password is: {val}
      </h3>
    </div>
  );
}

export default App;
