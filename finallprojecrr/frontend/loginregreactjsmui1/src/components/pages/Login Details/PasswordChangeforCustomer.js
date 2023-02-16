import { Alert } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PasswordChange() {
  const [userData, setUserData] = useState({});
  const userEmail = sessionStorage.getItem("userEmail");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userEmail);
    axios
      .get(`http://localhost:8080/Customer/Controller/getcustomerbyemail/${userEmail}`)
      .then((res) => {
        const response = res.data;

        setUserData(response);
        console.log(userData);
      });
  }, []);

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setUserData({ ...userData, [name]: val });
  }

  function formHandle(e) {
    console.log("fulldata : "+userData.first_name);
    e.preventDefault();
    axios
      .put("http://localhost:8080/Customer/Controller/updateCustomerspass", userData)
      .then((res) => {
        swal.fire({
          icon: "success",
          title: "Password Updated..",
          text: "Password updation successfully",
          // timer: 7000,
          showConfirmButton: true,
        });
       // navigate("/");
       window.location.href="/Login"
      
    }).catch((error) => {
      swal.fire({
        icon: "fail",
        title: "Please try again..",
        text: "Password not updated",
        // timer: 7000,
        showConfirmButton: true,
      });
      window.location.href="/PasswordChangeCustomer"
  })
        
      };


  return (
    <div className="AddCust"  style={{border:"5px solid grey" ,margin:"auto", height:"630px"}}>
      <form onSubmit={formHandle} className="text-center">
        <div className="alert alert-primary text-center">
          Please enter your new Password
        </div>
        <div className="row justify-content-around">
          <div style={{ marginTop: "100px" }}>
            <label>
              Enter new password
              <input
                className="form-control"
                type="password"
                name="password"
                value={userData.password}
                onChange={change}
                placeholder="Enter new Password"
                title="Required :one Captital, special character, integer,8 characters"
                    pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
       
                required
              />
            </label>
          </div>
          <div>
            <Button className="mt-4 btn btn-sm " type="submit">
              submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
