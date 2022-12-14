import React, { useState, useEffect } from "react";
import "../App.js";

const Checker = (props) => {
  const value = props.val;
  const [message, setMessage] = useState("");
  const setPrev = props.setPrev;
  useEffect(() => {
    if (value.length <= 2 && value.length > 0) {
      setMessage("Week Password");
      setPrev(true);
      document.getElementById("strength-checker").style.background = "red";
      document.getElementById("strength-checker").style.width = "30px";
    } else if (value.length <= 5 && value.length > 2) {
      setMessage("Medium Password");
      setPrev(false);

      document.getElementById("strength-checker").style.background = "orange";
      document.getElementById("strength-checker").style.width = "60px";
    } else if (value.length > 5) {
      setMessage("Strong Password");
      setPrev(false);

      document.getElementById("strength-checker").style.background = "green";
      document.getElementById("strength-checker").style.width = "100px";
    } else {
      setMessage("");
      setPrev(true);
      document.getElementById("strength-checker").style.background =
        "transparent";
    }
  }, [value, setMessage]);

  return (
    <div id="checker-loader">
      <div id="strength-checker"></div>
      <p>{message}</p>
    </div>
  );
};

export default Checker;
