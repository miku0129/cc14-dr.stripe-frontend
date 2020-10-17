import React, { useState, useEffect } from "react";
import Btn from "./Btn";
import UnpaidList from "./UnpaidList";
import Payment from "./Payment";
import Thankyou from "./Thankyou";

export default function UnpaidView({ setView, setPaidView, paidView, data, setPaymentData, paymentData }) {
  if (paidView === "paid") {
    return (
      <UnpaidList paymentData={paymentData} setPaymentData={setPaymentData} setView={setView} setPaidView={setPaidView} data={data} />
    );
  } else if (paidView === "pay") {
    return <Payment paymentData={paymentData} setPaymentData={setPaymentData} setPaidView={setPaidView} />;
  } else {
    return <Thankyou />;
  }
}
