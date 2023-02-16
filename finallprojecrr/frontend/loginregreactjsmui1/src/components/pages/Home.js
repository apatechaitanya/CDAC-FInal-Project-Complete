import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import web from "../pages/pic1.png";
import web from "../../images/home.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Service from "./Service";
import Coursel from "../pages/Coursel"
import Footer from "./Footer"
import knock from "../../images/knockdoor.jpg"

const Home = () => {
  return (
    <div className="home">
    <Coursel/>
     
      <Service />
      <Common
        name=" Book Your Service On Your Finger Tip"
        imgsrc={knock }
        //visit="/login"
        // btname="Get started"
        
      />
       
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
