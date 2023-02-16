import React from "react";
// import web from "../../images/home.png";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img class="card-img-top" src={props.imgsrc} alt="Card image cap" />
          <div class="card-body"style={{backgroundColor:"#d8e732"}}>
                      <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              {props.description}
            </p>
            <NavLink to={props.visit} className="btn btn-primary">
              Book Service
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
