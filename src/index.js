import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Doctor from "./Doctor";
import Patient from "./Patient";
import * as serviceWorker from "./serviceWorker";

const axios = require("axios");

function Greeting() {
  const [Data, setData] = useState();
  useEffect(() => {
    async function getData() {
      let visitsData = await axios.get(
        "https://cc14doctorstripe-app.herokuapp.com/payments"
      );
      setData(visitsData.data);
      console.log(visitsData.data);
    }
    getData();
  }, []);
  const [isDoctor, setIsDoctor] = useState("main");
  if (isDoctor === "Doctor") {
    return <Doctor />;
  } else if (isDoctor === "Patient") {
    return <Patient data={Data} />;
  } else {
    return <App setIsDoctor={setIsDoctor} />;
  }
}

ReactDOM.render(
  <Greeting isDoctor={"main"} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
