// This is Paid components
import React, { useEffect, useState } from "react";
import Data from "./visits.json";
import Btn from "./Btn";
import "./App.css";

export default function PaindList({ setView, data }) {
  return (
    <div>
      <Btn setView={setView} />
      {data.map((ele) => {
        if (ele.paid) {
          return (
            <>
              <div className="PaidCard">
                <img src="/checkB.png" width="50px" className="checkImg" />
                <h1 className="card">
                  <img src="/yen.png" width="20px" />
                  {ele.price}
                </h1>
                <p>
                  {/* <img src="t /> */}
                  {ele.visit_date.slice(0, 10)}
                </p>
                <p>{ele.treatment}</p>
                <p>
                  <a href="https://goo.gl/maps/CtmBm7XPWkzNEPAJ8">
                    {ele.hospital_name}
                  </a>
                </p>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
