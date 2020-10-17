import React from "react";
import "./Form.css";
const axios = require("axios");

export default function Form({ setDocview }) {
  return (
    <p>
      <p className="icon">
        <img src="healthcare.png" width="60px" />
      </p>
      <div className="formContainer">
        <img class="card_logo" src="hospital.png" width="40px" />
        <form
          onSubmit={async (e) => {
            //insert into database method and fix symptom
            e.preventDefault();
            await axios.post(
              "https://cc14doctorstripe-app.herokuapp.com/visits/1",
              {
                patient_id: e.target.patient_id.value,
                treatment: e.target.treatment.value,
                symptoms: e.target.symptoms.value,
                doctor: e.target.doctor.value,
                paid: false,
                madecine: false,
                price: e.target.price.value,
                hospital_name: e.target.hospital.value,
              }
            );
            setDocview(false);
          }}
          id="doctor-visit-report"
        >
          <label className="formLogo">Doctor Form</label>
          <br />
          <p className="label">
            <label>
              <p className="inLabel">ID</p>
              <input name="patient_id" placeholder="ID" />
            </label>
          </p>
          <br />
          {/* <label>
          Visit Date
          <input name="visit" type="text" placeholder="Visit Date" />
        </label> */}
          <p className="label">
            <label>
              <p className="inLabel">Symptoms</p>
              <textarea name="symptoms" placeholder="Symptoms" />
            </label>
            <br />
            <label>
              <p className="inLabel">Treatment</p>
              <textarea name="treatment" placeholder="Treatment" />
            </label>
            <br />
            {/* </p> */}
            <label>
              <p className="inLabel">Name of Doctor</p>
              <input name="doctor" type="text" placeholder="Doctor" />
            </label>
            <br />
            <label>
              <p className="inLabel">Hospital Name</p>
              <input name="hospital" type="text" placeholder="Hospital Name" />
            </label>
          </p>
          <br />
          <p className="label">
            <label>
              <p className="inLabel">Price</p>
              <input name="price" type="text" placeholder="Price" />
            </label>
          </p>
          <br />
          {/* better to chose by locatin  */}
          <label>
            <button
              type="submit"
              value="Submit"
              className="formSubmitButton formSubmitButtonDesign"
            >
              Submit
            </button>
          </label>
        </form>
      </div>
    </p>
  );
}
