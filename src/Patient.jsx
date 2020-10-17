import React, { useState } from "react";
import PaidList from "./PaidList";
import UnpaidView from "./UnpaidView";

export default function Patient({ data }) {
  const [paidView, setPaidView] = useState("paid");
  const [view, setView] = useState(true);
  const [paymentData, setPaymentData] = useState();

  return (
    <div class="patient_container">
      <div class="header_logo_container">
        <img
          src="/healthcare.png"
          className="patient_topLogo"
          width="30px"
          height="30px"
        />
        <div className="home_container">
          {/* <img src="barger.png" width="25px" /> */}
          <img src="/homeG.png" width="25px" className="logo_user" />
          <img src="/userG.png" width="25px" className="logo_home" />
        </div>
      </div>
      <h1 className="patinet_h1">Hello , Jiro.</h1>
      <p className="welcome_greeting">welcome back to Dr.Stripe</p>
      {view ? (
        <UnpaidView
          paymentData={paymentData}
          setPaymentData={setPaymentData}
          setView={setView}
          data={data}
          setPaidView={setPaidView}
          paidView={paidView}
        />
      ) : (
        <PaidList setView={setView} data={data} />
      )}
    </div>
  );
}
