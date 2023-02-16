import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

function Button() {
  return (
    <div >
   
        

      <div className={"container-md service-avail-box"} style={{border:"5px solid black" ,margin:"auto"}}>

          <div className="row">
            <h3>Service Availability</h3>
          </div>
          <div className="row my-1" >
            <div className="col-sm" style={{color:"black"}}>Monday</div>
            <div className="col-sm" style={{color:"black"}}>9.30 AM - 7.00 PM</div>
          </div>
          <div className="row my-1">
            <div className="col-sm" style={{color:"black"}}>Tuesday</div>
            <div className="col-sm" style={{color:"black"}}>9.30 AM - 7.00 PM</div>
          </div>
          <div className="row my-1" >
            <div className="col-sm" style={{color:"black"}}>Wednesday</div>
            <div className="col-sm" style={{color:"black"}}>9.30 AM - 7.00 PM</div>
          </div>
          <div className="row my-1" >
            <div className="col-sm" style={{color:"black"}}>Thrusday</div>
            <div className="col-sm" style={{color:"black"}}>9.30 AM - 7.00 PM</div>
          </div>
          <div className="row my-1">
            <div className="col-sm" style={{color:"black"}}>Friday</div>
            <div className="col-sm" style={{color:"black"}}>9.30 AM - 7.00 PM</div>
          </div>
          <div className="row my-1">
            <div className="col-sm" style={{color:"black"}}>Monday</div>
            <div className="col-sm" style={{color:"black"}}>9.30 AM - 7.00 PM</div>
          </div>
          <div className="row my-1">
            <div className="col-sm" style={{color:"black"}}>Saturday</div>
            <div className="col-sm" style={{color:"black"}}>9.30 AM - 7.00 PM</div>
          </div>
          <div className="row my-1">
            <div className="col-sm">Sunday</div>
            <div className="col-sm">9.30 AM - 7.00 PM</div>
          </div>
        </div>
        <div className="btn btn-info btn-lg btn-block button" style={{marginTop:"30px",marginLeft:"160px"}}>
      
    
      <NavLink to="/Login" action><h4>  Book Service</h4></NavLink>
  </div>
    </div>
  );
}
export default Button;
