import { Info, PostAdd } from "@mui/icons-material";
import React, { useState, useEffect, state } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import worker from "../WorkerSide/adminimage.png";
// import Header from  './Header'
import swal from "sweetalert2";
function AdminLogin() {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("admin-Info")) {
      // history.push("/add")
      Navigate("/admin");
    } else {
      Navigate("/AdminLogin");
    }
  }, []);

  async function adminlogin() {
    console.warn("data", username, password);
    let admindata = { username, password };
    console.log(admindata);
    let adminRes = await fetch("http://localhost:8080/Admin/Controller/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(admindata),
    });
    //      let result = await axios.post('http://localhost:8080/Customer/Controller/customerlogin',item)
    //   .then(response => {
    //     console.log("mail is : "+item.emailId+"  ")
    //    alert(response.data);
    //   })

    adminRes = await adminRes.json();

    localStorage.setItem("admin-Info", JSON.stringify(adminRes));
    const items = JSON.parse(localStorage.getItem("admin-Info"));
    if (items.username != null && items.password != null) {
      swal.fire({
        icon: "Success",
        title: "Hurreh!!!",
        text: "You have Logged In Succesfully",
        // timer: 7000,
        showConfirmButton: true,
      });
      // localStorage.removeItem("worker-info");
      // localStorage.removeItem("user-Info");
      Navigate("/admin");
    } else {
      swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Invalid Username Or Password",
        // timer: 7000,
        showConfirmButton: true,
      });

      localStorage.removeItem("admin-Info");

      Navigate("/AdminLogin");
    }
  }

  return (
    <div className="workerlogin">
    <Container>
      <Row>
  <Col md={8}>
    <div className="form3">
    <div className="mt-3">
      {/* <Header/> */}
      <div className="col-sm-6 offset-sm-3 text-center ">
        <h1 class="fw-bold sans-serif ">Admin Login</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Admin Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br></br>

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          min={4}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        <div class="d-grid gap-2 mb-3">
          <button className="btn btn-primary" onClick={adminlogin}>
            Login
          </button>
          <a href="EmailVerifyAdmin">Forget password</a>
        </div>
      </div>
      </div>
      </div>      
      </Col>
      <Col md={4} className="wrkimage">
      
      < img 
                    src={worker}
                    style={{height:600}}
                    className="img-fluid animated"
                    alt="home img"

                  />

     

      </Col>
 
      </Row>
    </Container>
            



      
    </div>
  );
}
export default AdminLogin;
