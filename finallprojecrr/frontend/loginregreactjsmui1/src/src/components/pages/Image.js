import React from "react";
import "../../index.css";
import img1 from "../../images/Carpenter.jpg";
import Button from "../pages/Button";
import Charges from "../pages/Charges";
function Images(props) {
  // let service = "CARPENTER";
  return (
    
    <div className="services">
      <div style={{paddingTop:"20px", height:"600px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div>
                <h1 className="service">{props.service}</h1>
              </div>

              <div>
                <img className="image my-3" src={props.img1} alt="img not  found" />
              </div>
              <h4 className="slogan">Our Best Service for you</h4>
            </div>
            <div className="col-md">
              <Charges />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
