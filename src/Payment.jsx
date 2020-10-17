import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const axios = require("axios");

export default function Payment({ paymentData, setPaidView }) {
  const stripePromise = loadStripe(
    "pk_test_51HU0G2CjwFEQ1pgcvOchnwo0Gsb2seN5a3xGz8Q2iCvlVUjHkSCV7UZHy3NfeobxNNMeGwmiosi3UBxjbKcSjGZ000hENfQW0F"
  );
  if (paymentData) {
    console.log(paymentData);
  }
  return (
    <div className="container_payment">
      <h1>Payment Infomation</h1>
      <Elements stripe={stripePromise}>
        Card Number
        <CardNumberElement>
          options=
          {{
            style: {
              base: {
                fontSize: "30px",
                color: "#324770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardNumberElement>
        Expiration
        <CardExpiryElement>
          options=
          {{
            style: {
              base: {
                fontSize: "30px",
                color: "#324770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardExpiryElement>
        CVC
        <CardCvcElement>
          options=
          {{
            style: {
              base: {
                fontSize: "30px",
                color: "#324770",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardCvcElement>
        <button
          onClick={async () => {
            const stripe = await stripePromise;
            const response = await axios
              .post(
                "https://cc14doctorstripe-app.herokuapp.com/create-session",
                {
                  paymentData: { paymentData },
                }
              ).then(async()=>{
                const session = await response.json();
                // When the customer clicks on the button, redirect them to Checkout.
                const result = await stripe.redirectToCheckout({
                  sessionId: session.id,
                })
              })

            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            await axios.patch(
              proxyurl +
                "https://cc14doctorstripe-app.herokuapp.com/payments/1",
              {
                doctor: paymentData.doctor,
                hospital_name: paymentData.hospital_name,
                medicine: paymentData.medicine,
                paid: paymentData.paid,
                price: paymentData.price,
                treatment: paymentData.treatment,
                visit_date: paymentData.visit_date,
                visit_id: paymentData.visit_id,
              }
            );
            setPaidView("");
          }}
        >
          <img src="/checkW.png" />
          <p className="pay_p">Pay</p>
        </button>
      </Elements>
    </div>
  );
}

