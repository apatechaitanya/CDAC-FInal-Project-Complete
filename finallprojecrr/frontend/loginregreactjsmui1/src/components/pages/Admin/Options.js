import React from "react";
import { ListGroup, ListGroupItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { render } from "@testing-library/react";

const Options = () => {
  const Navigate = useNavigate();
  function logout() {
    swal.fire({
      icon: "Success",
      title: "Log Out!!!",
      text: "You have Logged Out Succesfully",
      timer: 3000,
      showConfirmButton: true,
    });
    localStorage.removeItem("admin-Info");

    Navigate("/AdminLogin");
  }

  // <NavLink to="/admin" action></NavLink>
  return (
    <div  className="dash">   
    <ListGroup  style={{height:600,width:600}}>
      <ListGroupItem>
        <NavLink to="/ViewAdminByIdnew/:id" action>
        <h4 class="my-3">  My Profile</h4>
        </NavLink>
      </ListGroupItem>
      <ListGroupItem>
        <NavLink to="/GetAllCustomers" action>
       <h4 class="my-3">   View All Customer </h4>
        </NavLink>
      </ListGroupItem>
      {/* <ListGroupItem>
        <NavLink to="/GetAllWorkers" action>
          View All UnVerified Workers
        </NavLink>
      </ListGroupItem> */}
      <ListGroupItem>
        <NavLink to="/GetAllWorkers" action>
        <h4 class="my-3"> View All Workers</h4>
        </NavLink>
      </ListGroupItem>

      <ListGroupItem>
        <NavLink to="/GetAllOrderstoAdmin" action>
        <h4 class="my-3">View All Orders</h4>
        </NavLink>
      </ListGroupItem>

      <ListGroupItem>
        <NavLink to="/AddAdmin" action>
        <h4 class="my-3">  AddAdmin </h4>
        </NavLink>
      </ListGroupItem>

      {/* <ListGroupItem>
        <NavLink to="/AddProfession" action>
          AddProfession
        </NavLink>
      </ListGroupItem> */}
      <button className="btn btn-primary my-4" onClick={logout}  style={{width:"220px" ,marginLeft:"105px"}}>
        Logout
      </button>
    </ListGroup>
 </div>
  );
};
export default Options;
