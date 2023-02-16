import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const [a, setA] = useState("");

  const navigate = useNavigate();

  let formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/Customer/Controller/otpverify/${otp}`)
      .then((response) => {
        if (response.data === "OTP verified") {
          alert("well done");
           navigate("/PasswordChangeforCustomers");
         
        } else if (response.data === "OTP Invalid Please Try Again") {
          alert("failed");
          navigate("/OtpVerify");
        }
      });
  };

  return (
    <div className="AddCust"  style={{border:"5px solid grey" ,margin:"auto", height:"630px"}}>
      
      <form onSubmit={formSubmit} className="text-center">
        <div className="alert alert-primary text-center">
          Please enter the otp
        </div>
        <div className="row justify-content-around">
          <div style={{ marginTop: "100px" }}>
            <label className="text-center">
              <strong>Enter otp</strong>
              <Input
                type="text"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                placeholder="Enter otp"
                name="text"
                id="text"
                required
              />
            </label>
          </div>
          <div>
            <Button className="mt-4 btn btn-sm " type="submit">
              send otp
            </Button>
            
          </div>
          {/* <a href="PasswordChangeAdmin">PasswordChangeAdmin</a>
          <a href="PasswordChangeforCustomers">PasswordChangeforCustomers</a>
          <a href="PasswordChangeWorker">PasswordChangeWorker</a> */}


        </div>
      </form>
    </div>
  );
}
