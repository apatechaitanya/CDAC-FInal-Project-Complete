import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import swal from "sweetalert2";


const Options = () => {
   
  const Navigate = useNavigate();
  function logout() {
    swal
          .fire({
            icon: "Success",
            title: "Log Out!!!",
            text: "You have Logged Out Succesfully",
             timer: 3000,
            showConfirmButton: true,
          })
    localStorage.removeItem("worker-info");
    
    Navigate("/WorkerLogin");
  }
  return (
    <div  className="dash">
    <ListGroup style={{height:600,width:600}}>
      <ListGroupItem >
      <NavLink to="/ViewworkerByid/:id" action> 
      <h4 class="my-3">  My Profile</h4>
      </NavLink>
      </ListGroupItem>
      <ListGroupItem >
      <NavLink to="/UpdateWorkernew/:id" action>
      <h4 class="my-3"> Update Profile</h4>
       
        </NavLink>
      </ListGroupItem>
      <ListGroupItem >
      <NavLink to="/ViewAllOrdersForWorker" action>
      <h4 class="my-3">   My Orders</h4>
       
        </NavLink>
      </ListGroupItem>
      <button  className="btn btn-primary my-5" onClick={logout} style={{width:"220px" ,marginLeft:"105px"}}>
         Logout
      </button>
      
    </ListGroup>
    </div>
  );
};
export default Options;
