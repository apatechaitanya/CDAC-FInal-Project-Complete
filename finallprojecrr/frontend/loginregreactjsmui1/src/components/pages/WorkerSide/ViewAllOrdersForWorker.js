import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function ViewAllOrdersForWorker() {
  let items = JSON.parse(localStorage.getItem("worker-info"));
  const id = items.worker_id;
  const [responseData, setResponseData] = useState([]);
  const carList = () => {
    axios
      .get(`http://localhost:8080/Worker/Controller/AllOrdersByWorker/${id}`)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    carList();
  }, []);

  return (
    <>
      <div className='Tables' style={{border:"10px solid grey" ,margin:"auto", height:"575px",textAlign:"center"}}>
        <h2>My Orders</h2>

        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>OrdersId</th>
              <th>Customer Name</th>
              <th>Land Mark</th>
              <th>City</th>
              <th>Pincode</th> 
              <th>Service</th>
              <th>Service Date</th>
              <th>Status</th>
              <th>Action</th>
             
              
             

              {/* <th>Update</th>
    <th>Image</th>
    <th>Delete</th>  */}
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.orders_id}</td>
                <td>{val.customer.first_name+" "+val.customer.last_name}</td>
                <td>{val.customer.address.landmark}</td>
                <td>{val.customer.address.city}</td>
                <td>{val.customer.address.pincode}</td>
                <td>{val.workers.profession.prof_name}</td>
                <td>{val.orderdate}</td>
                <td>{val.status}</td>
                
                <td >
                                                 <a href={`/UpdateOrdersForWorker/${val.orders_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Update</button>
                                                                 </a>
                                                 {/* <a href={`/DeleteWorker/${orders.worker_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                                                                 </a> */}
                                             </td>
                
              


                {/* <td><Link to="/car/update" state={val} class="btn btn-primary" >Update</Link> </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ViewAllOrdersForWorker;
