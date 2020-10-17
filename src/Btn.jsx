import React from "react";

export default function Btn({ setView }) {
  return (
    <div className="components_box">
      <button
        className="component_btn"
        onClick={() => {
          setView(false);
        }}
      >
        <img
          src="/checkW.png"
          width="20px"
          className="paid_btn_components_img"
        />
        Paid
      </button>
      <button
        className="unpaind_btn"
        onClick={() => {
          setView(true);
        }}
      >
        Unpaid
      </button>
    </div>
  );
}
