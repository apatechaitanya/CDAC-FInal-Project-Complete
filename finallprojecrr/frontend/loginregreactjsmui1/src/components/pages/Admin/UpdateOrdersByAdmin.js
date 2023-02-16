import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";

const UpdateOrdersByAdmin = () => {
  

//   const [cust_id, setCust_id] = useState("");
  const [orders_id, setOrders_id] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [orderdate, setOrderdate] = useState("");
  const [cust_id, setCust_id] = useState("");
  const [service, setService] = useState("");
  const [worker_id, setWorker_id] = useState("");
  

  const {id} = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const customers = {
        orders_id,
        orderdate,
        
        status,
        amount,
        service,
         cust_id,
         worker_id,
    };
    // console.log("new " + id);
    // alert(JSON.stringify(customers));
    axios
      .put(
        `http://localhost:8080/Admin/Controller/updateOrder/${id}`,
        customers
      )
      .then((response) => {
        swal.fire({
          icon: "Success",
          title: "Updated!!!",
          text: "You have Updated Succesfully",
          timer: 10000,
          showConfirmButton: true,
        });
        window.location.href = "/GetAllOrderstoAdmin";
        
      })
      .catch((error) => {

        swal.fire({
          icon: "warning",
          title: "Error!!!",
          text: "Please try again ",
          timer: 3000,
          showConfirmButton: true,
        });

      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Admin/Controller/AllOrderstoAdminbyid/${id}`)
      .then((response) => {
        
        setOrders_id(response.data.orders_id);
        setOrderdate(response.data.orderdate);
        setAmount(response.data.amount);
        setStatus(response.data.status);
       
        setService(response.data.service);
         setCust_id(response.data.customer.cust_id);
         setWorker_id(response.data.workers.worker_id);
         
      })
      .catch((error) => {
        console.log("errr"+error);
      });
  }, []);

  const title = () => {
    {
      return <h2 className="text-center">Update Orders</h2>;
    }
  };

  return (
    <div className="AddCust"  style={{border:"5px solid grey" ,margin:"auto", height:"730px"}}>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> orders_id :</label>
                  <input
                    type="text"
                    placeholder="Enter orders_id"
                    name="orders_id"
                    className="form-control"
                    value={(orders_id)}
                    onChange={(e) => setOrders_id(e.target.value)}
                  ></input>
                </div>


                {/* <div className="form-group">
                <label> Service required on Date </label>
                  <input
                    type="date"
                    className="form-control"
                    name="orderdate"
                    min={new Date().toISOString().split("T")[0]}
                    value={orderdate}
                    onChange={(e) => setOrderdate(e.target.value)}
                    placeholder="Enter Servicing Date."
                    required
                  />
                </div> */}


                <div className="form-group mb-2">
                  <label className="form-label"> orderdate :</label>
                  <input
                    type="text"
                    placeholder="Enter orderdate"
                    name="orderdate"
                    className="form-control"
                    value={orderdate}
                    onChange={(e) => setOrderdate(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> status :</label>
                  <input
                    type="status"
                    placeholder="Enter status"
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  ></input>
                </div>


                <div className="form-group mb-2">
                  <label className="form-label">amount :</label>
                  <input
                    type="amount"
                    placeholder="Enter amount"
                    name="amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>

                 <div className="form-group mb-2">
                  <label className="form-label"> cust_id :</label>
                  <input
                    type="cust_id"
                    placeholder="Enter cust_id"
                    name="cust_id"
                    className="form-control"
                    value={cust_id}
                    
                    onChange={(e) => setCust_id(e.target.value)}
                  ></input>
                
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> service :</label>
                  <input
                    type="service"
                    placeholder="Enter service"
                    name="service"
                    className="form-control"
                    value={service}
                    
                    onChange={(e) => setService(e.target.value)}
                  ></input>
                
                </div>

                

                <div className="form-group mb-2">
                  <label className="form-label"> worker_id :</label>
                  <input
                    type="worker_id"
                    placeholder="Enter worker_id"
                    name="worker_id"
                    className="form-control"
                    value={worker_id}
                    onChange={(e) => setWorker_id(e.target.value)}
                  ></input>
                </div> 

               

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/GetAllOrderstoAdmin" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrdersByAdmin;
