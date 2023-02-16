import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function EmailVerif() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  sessionStorage.setItem("userEmail", email);
  let formSubmit = () => {
    axios.post(`http://localhost:8080/Customer/Controller/otpgenerator/${email}`);
    navigate("/OtpVerifyWorker");
  };

  return (
    <div  className="AddCust"   style={{border:"10px solid grey" ,margin:"auto", height:"625px"}}>
      <form onSubmit={formSubmit} className="text-center">
        <div className="alert alert-primary text-center">
          Workers Page
        </div>
        <div className="row justify-content-around">
          <div style={{ marginTop: "100px" }}>
            <label className="text-center">
              <strong>Enter your email</strong>
              <Input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                name="email"
                id="email"
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                required
              />
            </label>
          </div>
          <div>
            <Button className="mt-4 btn btn-sm " type="submit">
              send otp
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
