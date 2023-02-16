import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";

const DeleteWorker = () => {
  const [user, setUser] = useState({
  
  
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = () => {
     axios.delete(`http://localhost:8080/Worker/Controller/deleteWorker/${id}`)
    
     
     .then((response) => {
      swal.fire({
        icon: "Success",
        title: "Success!!!",
        text: "Delete Sucessfull",
        timer: 3000,
        showConfirmButton: true,
      });
      window.location.href = "/GetAllWorkers"
  })

  
  .catch((error) => {
    swal.fire({
      icon: "warning",
      title: "Error!!!",
      text: "Cant Delete as Order is assigned to Orders",
      timer: 3000,
      showConfirmButton: true,
    });
     
       window.location.href = "/GetAllWorkers"
      // <Link to ="/GetAllCustomers"></Link>
  });
  }

  
  return (
    <div className="container py-4">
      
      {/* <h1 className="display-4"> {id}</h1> */}
      <hr />
      
    </div>
  );
};

export default DeleteWorker;