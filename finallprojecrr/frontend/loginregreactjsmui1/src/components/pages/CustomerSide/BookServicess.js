import React, { Component } from "react";
import { useParams } from "react-router-dom";

import { useState } from "react";
import ReactDOM from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import TableDatePicker from "../dateset";
import Form from "react-bootstrap/Form";
import { withFormik } from "formik";
import dateset from "../dateset";
import axios from "axios";
import swal from "sweetalert2";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
const BookServicess = () => {
  let items = JSON.parse(localStorage.getItem("user-Info"));

  const [state, setState] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;

    setState((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
   

    axios
      .post("http://localhost:8080/Customer/Controller/bookservice", state)
      .then((response) => {
         swal.fire({
          icon: "Success",
          title: "Service Booked!!!",
          text: "Thank You For Using Our Service",
          timer: 8000,
          showConfirmButton: true,
         });
         window.location.href="/customer"
      })
      .catch((error) => {
       swal.fire({
          icon: "warning",
          title: "Warning!!!",
          text: "Unable to proceed With this data",
          timer: 3000,
          showConfirmButton: true,
         });
      });
  };

  // const {id} = useParams();
  let id = "pest";
  const cust_id = items.cust_id;

  return (
    <div>
      <div className='Tables' style={{border:"10px solid grey" ,marginTop:"10px", height:"580px",textAlign:"center"}}>
        <div className="row" style={{marginTop:"100px"}}>
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center" style={{ }} >Book Service</h3>

            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> Visiting Charges </label>
                  <input
                    placeholder="Charges"
                    name="amount"
                    className="form-control"
                    // value="200"
                    disabled
                    value={(state.amount = 200)}
                    onChange={handleChange}
                  />
                </div>

                {/* <div className="form-group">
                  <label> Booking date </label>
                  <TableDatePicker
                    name="orderdate"
                    value={state.orderdate}
                    onChange={handleChange}
                  />
                </div> */}


                <div className="form-group">
                <label> Service required on Date </label>
                  <input
                    type="date"
                    className="form-control"
                    name="orderdate"
                   // min={new Date().toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })}
                    min={new Date().toISOString().split('T')[0]} 
                    value={state.orderdate}
                    onChange={handleChange}
                    placeholder="Enter Servicing Date."
                    required
                  />
                </div>





                <div className="form-group" hidden>
                  <label> status </label>
                  <input
                    placeholder="status"
                    name="status"
                    className="form-control"
                    //    value="200"

                    value={(state.status = "Pending")}
                    onChange={handleChange}
                    dis
                  />
                </div>



                <div className="form-group my-2">
                    <label className="my-1"> <b>Select Service </b></label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      required
                      name="service"
                      onChange={handleChange}
                    >
                      <option value="" selected>
                        Service
                      </option>
                      <option value="Electrician">Electrician</option>
                      <option value="Carpenter">
                      Carpenter
                      </option>
                      <option value="Plumber">
                      Plumber
                      </option>
                      <option value="Washing Machine Repair">
                      Washing Machine Repair
                      </option>
                      <option value="Painting">
                      Painting
                      </option>
                      <option value="Salon">
                     Salon
                      </option>
                    </select>
                  </div>  





                <div className="form-group" hidden>
                  <label> cust_id </label>
                  <input
                    placeholder="cust_id"
                    name="cust_id"
                    disabled
                    className="form-control"
                    value={state.cust_id = cust_id}
                    onChange={handleChange}
                  />
                </div>

                {/* <div className="form-group">
                  <label> Services </label>
                  <select className="form-select" aria-label="Default select example">
  <option selected>Select a Service</option>
  <option value="1">{id}</option>
  <option value="2">{id}</option>
  <option value="3">{id}</option>
</select> 

                     
                    
                  </div>  */}

                <div className="form-group" hidden>
                  <label> worker_id </label>
                  <input
                    placeholder="worker_id"
                    name="worker_id"
                    className="form-control"
                    //    value="200"

                    value={(state.worker_id )}
                    onChange={handleChange}
                    hidden
                  />
                </div>

                <br></br>

                <button className="btn btn-success ">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookServicess;
