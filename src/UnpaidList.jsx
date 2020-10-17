//This is List for unpaid component
// It should be default inter face
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Btn from "./Btn";
const axios = require('axios');


export default function UnpaidList({
  setView,
  data,
  setPaidView,
  paymentData,
  setPaymentData,
}) {
  // const [currentView, setCurrentView] = useState(true);

  const stripePromise = loadStripe(
    "pk_test_51HU0G2CjwFEQ1pgcvOchnwo0Gsb2seN5a3xGz8Q2iCvlVUjHkSCV7UZHy3NfeobxNNMeGwmiosi3UBxjbKcSjGZ000hENfQW0F"
  );

  return (
    <div>
      <div>
        <Btn setView={setView} />
        {data.map((visit, index) => {
          if (!visit.paid) {
            return (
              <div key={index} className="unPaidCard">
                <h1 className="card" name="price">
                  <img src="/yen.png" width="20px" />
                  {visit.price}
                </h1>
                <div>
                  <img className="card_logo" src="time.png" width="40px" />
                  {visit.visit_date.slice(0, 10)}
                </div>
                <div className="card_treatment_container">
                  <img className="card_logo" src="aid.png" width="40px" />
                  {visit.treatment}
                </div>
                <div className="card_hospital">
                  <img className="card_logo" src="/location.png" width="35px" />
                  <a href="https://goo.gl/maps/CtmBm7XPWkzNEPAJ8">
                    {visit.hospital_name}
                  </a>
                </div>
                <button
                  className="card_checkout"
                  onClick={async() => {
                    //get visit data
                    //set visit data to pass to DB upon payment
                    setPaymentData(data[index]);
                    // setCurrentView(false);
                    // setPaidView("pay");

                       //update db paid status
               const proxyurl = "https://cors-anywhere.herokuapp.com/";
               await axios.patch(proxyurl + "https://cc14doctorstripe-app.herokuapp.com/payments/1",
                 {
                   doctor: data[index].doctor,
                   hospital_name: data[index].hospital_name,
                   medicine: data[index].medicine,
                   paid: data[index].paid,
                   price: data[index].price,
                   treatment: data[index].treatment,
                   visit_date: data[index].visit_date,
                   visit_id: data[index].visit_id,
                 }
               )
                  //go to stripe checkout page
                const stripe = await stripePromise;
                const response = await fetch("https://cc14doctorstripe-app.herokuapp.com/create-session", {
                method: "POST",
                 });
                const session = await response.json();
               // When the customer clicks on the button, redirect them to Checkout.
               const result = await stripe.redirectToCheckout({
              sessionId: session.id,
               })

                  }}
                >
                  Checkout
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
