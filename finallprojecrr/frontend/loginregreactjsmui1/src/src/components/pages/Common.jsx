import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import web from "../pages/pic1.png";
import web from "../../images/home.png";
import Footer from "./Footer"
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="text-dark">
                   {props.name}
                  </h1>
                  {/* <h2 className="my-3">
                    We are the team of{" "}
                    <strong className=" text-warning brand-name">
                      Talented Developers
                    </strong>{" "}
                    making websites...
                  </h2> */}
                  <div className="mt-3">
                    {/* <NavLink
                      to={props.visit}
                      className="btn btn-primary rounded-pill"
                    >
                      {props.btname}
                    </NavLink> */}
                    <a href="/login" class="btn btn-info" role="button" >Get Started</a>
                    &nbsp;&nbsp;
                    <a href="/feedbacks" class="btn btn-info" role="button">Feedbacks</a>
                  </div>
                  
                </div>
                <div className="col-lg-6 order-1 order-sm-2 header-img">
                  <img 
                    src={props.imgsrc}
                    height="200px"
                    className="img-fluid animated"
                    alt="home img"
                    
                 
                  />
              
                </div>
                
              </div>
            
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Common;
