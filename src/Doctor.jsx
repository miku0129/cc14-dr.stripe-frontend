import React, { useState } from "react";
import Done from "./Done";
import Form from "./Form";

export default function Doctor() {
  const [docView, setDocview] = useState(true);
  return <div> {docView ? <Form setDocview={setDocview} /> : <Done />}</div>;
}
