import { Info, PostAdd } from "@mui/icons-material";
import React, { useState, useEffect, state } from "react";
import { Container, Row, Col } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
// import Header from  './Header'
import swal from "sweetalert2";
import worker from "../WorkerSide/worker.png";


function WorkerLogin() {
  const [emailId, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("worker-info")) {
      // history.push("/add")
      Navigate("/worker");
    } else {
      Navigate("/WorkerLogin");
    }
  }, []);

  async function login() {
    console.warn("data", emailId, password);
    let item = { emailId, password };
    console.log(item);
    let result = await fetch(
      "http://localhost:8080/Worker/Controller/workerlogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    //      let result = await axios.post('http://localhost:8080/Customer/Controller/customerlogin',item)
    //   .then(response => {
    //     console.log("mail is : "+item.emailId+"  ")
    //    alert(response.data);
    //   })

    result = await result.json();
    localStorage.setItem("worker-info", JSON.stringify(result));
    let items = JSON.parse(localStorage.getItem("worker-info"));

    console.log(items);
    if (items.emailId != null && items.password != null) {
      swal.fire({
        icon: "Success",
        title: "Success!!!",
        text: "You have Logged In Succesfully",
        timer: 3000,
        showConfirmButton: true,
      });
      // localStorage.removeItem("admin-Info");
      // localStorage.removeItem("user-Info");
      Navigate("/worker");
    } else {
      swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Invalid Username Or Password",
        // timer: 7000,
        showConfirmButton: true,
      });
      localStorage.removeItem("worker-info");
      Navigate("/WorkerLogin");
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
      <div className="col-sm-6 offset-sm-3 text-center">
        <h1 class="fw-bold">Worker Login</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Email ID"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <div class="d-grid gap-2 mb-3">
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
          <a href="EmailVerifyWorker">Forget password</a>
        </div>
      </div>
      </div>
      </div>      
      </Col>
      

      <Col md={4} className="wrkimage">
      
      <img 
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
export default WorkerLogin;
