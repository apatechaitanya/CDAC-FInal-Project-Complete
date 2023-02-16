import React, { PureComponent } from "react";

import { useState } from "react";
import axios from "axios";

import swal from "sweetalert2";

const FeedbackForm = () => {
  const [state, setState] = useState({});
  let items = JSON.parse(localStorage.getItem("user-Info"));
  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;

    setState((values) => ({ ...values, [paramName]: paramValue }));
  };
  const sessionCust_id=items.cust_id;
  

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
   
    console.log("1 mail is : " + state.pincode + "  ");
    axios
      .post("http://localhost:8080/Customer/Controller/feedback", state)
      .then((response) => {
        swal.fire({
          icon: "Success",
          title: "Submitted!!!",
          text: "You feedback submitted successfully",
          timer: 3000,
          showConfirmButton: true,
        });

        window.location.href = "/admin";
        console.log("mail is : " + state.city + "  ");
      })
      .catch((error) => {
        console.log("error is : " + error.message + "  ");
        swal.fire({
          icon: "warning",
          title: "Error!!!",
          text: "Please try again ",
          timer: 3000,
          showConfirmButton: true,
        });
      });
  };

  return (
    <div>
      {console.log("username is : " + state.worker_id + "  ")}
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Feedback Form</h3>

            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> worker_id </label>
                  <input
                    placeholder="worker_id"
                    name="worker_id"
                    className="form-control"
                    type="number"
                     value={state.worker_id}
                    onChange={handleChange}
                   
                    required
                  />
                </div>

                <div className="form-group" hidden>
                  <label> customer_id </label>
                  <input
                    placeholder="customer_id"
                    name="cust_id"
                    className="form-control"
    
                     value={state.cust_id=sessionCust_id}
                    onChange={handleChange}
                    
                    required
                  />
                </div>

               
                <div className="form-group">
                  <label> Comment </label>
                  <textarea
                    placeholder="Comment"
                    name="feedback"
                    
                    className="form-control"
                    value={state.feedback}
                    onChange={handleChange}
                    required
                  />
                </div>

              
              
               

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
