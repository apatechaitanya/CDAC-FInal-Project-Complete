import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";

const DeleteComponenent = () => {
  const [user, setUser] = useState({
  
  
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser =  () => {
      axios.delete(`http://localhost:8080/Customer/Controller/deleteCustomer/${id}`)
    
    
    .then((response) => {
      swal.fire({
        icon: "Success",
        title: "Success!!!",
        text: "Delete Sucessfull",
        timer: 3000,
        showConfirmButton: true,
      });
      
  })
  .catch((error) => {
    swal.fire({
      icon: "warning",
      title: "Error!!!",
      text: "Cant Delete as Order is assigned to Customer",
      timer: 3000,
      showConfirmButton: true,
    });
     
       window.location.href = "/GetAllCustomers"
      // <Link to ="/GetAllCustomers"></Link>
  });

    
    
    
    
    // setUser(res.data).then{error)};
  };

  return (
   
    <>
     
    
      
     {/* { window.location.href = "/GetAllCustomers" } */}
     
    </>
      
    
  );
};

export default DeleteComponenent;