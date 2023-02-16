import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import GetCustomerService from "./GetCustomerService";

const UpdateCustomernew = () => {
  let items = JSON.parse(localStorage.getItem("user-Info"));

  const [cust_id, setCust_id] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address_id, setAddress_id] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");

  const id = items.id;

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const customers = {
      first_name,
      last_name,
      emailId,
      password,
      mobile,
      address_id,
      city,
      landmark,
      pincode,
      state,
    };
    console.log("new " + id);
    alert(JSON.stringify(customers));
    axios
      .put(
        `http://localhost:8080/Customer/Controller/updateCustomers/${id}`,
        customers
      )
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Customer/Controller/GetCustomers/${id}`)
      .then((response) => {
        console.log("first name is : " + response.data.first_name);
        setCust_id(response.data.cust_id);
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmailId(response.data.emailId);
        setPassword(response.data.password);
        setMobile(response.data.mobile);
        // setAddress_id(response.data.address_id);
        setCity(response.data.address.city);
        setLandmark(response.data.address.landmark);
        setPincode(response.data.address.pincode);
        setState(response.data.address.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    {
      return <h2 className="text-center">Update Employee</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> passsword :</label>
                  <input
                    type="password"
                    placeholder="Enter passsword"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> mobileno :</label>
                  <input
                    type="mobile"
                    placeholder="Enter mobileno"
                    name="mobile"
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  ></input>
                </div>

               

                <div className="form-group mb-2">
                  <label className="form-label"> city :</label>
                  <input
                    type="city"
                    placeholder="Enter city"
                    name="city"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> landmark :</label>
                  <input
                    type="landmark"
                    placeholder="Enter landmark"
                    name="landmark"
                    className="form-control"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> pincode :</label>
                  <input
                    type="pincode"
                    placeholder="Enter pincode"
                    name="pincode"
                    className="form-control"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> state :</label>
                  <input
                    type="state"
                    placeholder="Enter state"
                    name="state"
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/employees" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomernew;
