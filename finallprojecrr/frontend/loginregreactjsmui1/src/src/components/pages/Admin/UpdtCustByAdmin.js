import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
const UpdateCustomerByAdmin = () => {
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

  const { id } = useParams();

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
    axios
      .put(
        `http://localhost:8080/Customer/Controller/updateCustomers/${id}`,
        customers
      )
      .then((response) => {
        swal.fire({
          icon: "Success",
          title: "Updated!!!",
          text: "You have Updated In Succesfully",
          timer: 3000,
          showConfirmButton: true,
        });
        window.location.href = "/GetAllCustomers";
      })
      .catch((error) => {});
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Customer/Controller/GetCustomers/${id}`)
      .then((response) => {
        console.log("first name is : " + response.data.state);
        // setCust_id(response.data.cust_id)
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmailId(response.data.emailId);
        setPassword(response.data.password);
        setMobile(response.data.mobile);

        setAddress_id(response.data.address_id);
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
      return <h2 className="text-center">Update Customer</h2>;
    }
  };

  return (
    <div className="AddCust"  style={{border:"5px solid grey" ,margin:"auto", height:"900px"}}>
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
                    minLength={2}
                    maxLength={15}
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    pattern="[A-Za-z]{1,15}"
                    required
                 ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    minLength={2}
                    maxLength={15}
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            
                    required
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
                    title="Required :one Captital, special character, integer,8 characters"
                    pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
             required
                ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> mobileno :</label>
                  <input
                    type="mobile"
                    placeholder="Enter mobileno"
                    name="mobile"
                    minLength={10}
                    maxLength={10}
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    pattern="[6789][0-9]{9}"
                    required
                  ></input>
                </div>

                {/* 
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> address_id :</label>
                                    <input
                                        type = "address_id"
                                        placeholder = "address_id city"
                                        name = "address_id"
                                        className = "form-control"
                                        value = {address_id}
                                        onChange = {(e) => setCity(e.target.value)}
                                    >
                                    </input>
                                </div> */}

                <div className="form-group mb-2">
                  <label className="form-label"> city :</label>
                  <input
                  disabled
                    type="city"
                    placeholder="Enter city"
                    name="city"
                    minLength={2}
                    maxLength={20}
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    pattern="[A-Za-z]{1,20}"
                    required
                 ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> landmark :</label>
                  <input

                    type="landmark"
                    placeholder="Enter landmark"
                    name="landmark"
                    minLength={3}
                    className="form-control"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> pincode :</label>
                  <input
                  disabled
                    type="pincode"
                    placeholder="Enter pincode"
                    name="pincode"
                    minLength={6}
                    maxLength={6}
                    className="form-control"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    pattern="[1-9][0-9]{5}"
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> state :</label>
                  <input
                  disabled
                    type="state"
                    placeholder="Enter state"
                    name="state"
                    minLength={2}
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/GetAllCustomers" className="btn btn-danger">
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

export default UpdateCustomerByAdmin;
