import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { NavLink } from "react-router-dom";



const Options =()=>{
const Navigate = useNavigate();
  function logout() {
    swal
          .fire({
            icon: "Success",
            title: "Log Out!!!",
            text: "You have Logged Out Succesfully",
            timer: 7000,
            showConfirmButton: true,
          })
    localStorage.removeItem("user-Info");
    Navigate("/Login");
  }
    return(
      <div  className="dash">
<ListGroup style={{height:600,width:600}}>
  <ListGroupItem >
  <NavLink to="/ViewcustomerByid/:id" action>
  <h4 class="my-3">  My Profile</h4>
    </NavLink>
  </ListGroupItem>
  <ListGroupItem  >
  <NavLink to="/UpdateCustomer/:id" action>
  <h4 class="my-3">    Update Profile </h4>
   
    </NavLink>
  </ListGroupItem>
  <ListGroupItem  >
  <NavLink to="/myorders" action>
  <h4 class="my-3">   My Orders </h4>
    
    </NavLink>
  </ListGroupItem>
  <ListGroupItem  >
  <NavLink to="/bookservicess" action>
  <h4 class="my-3">   Book Service </h4>
    
    </NavLink>
  </ListGroupItem>
  <button  className="btn btn-primary my-5" onClick={logout}>
         Logout
      </button>
  
</ListGroup>
</div>


    )



}
export default Options;