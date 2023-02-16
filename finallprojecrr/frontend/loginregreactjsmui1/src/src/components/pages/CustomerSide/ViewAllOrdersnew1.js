import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CustomerServices from "./CustomerServices";
function ViewAllOrdersneww() {
  let items = JSON.parse(localStorage.getItem("user-Info"));

  const [responseData, setResponseData] = useState([]);
  const id = items.id;
  const ordersList = () => {
    axios
      .get(`http://localhost:8080/Customer/Controller/AllOrders/${id}`)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
      
      
  };
  
  useEffect(() => {
    ordersList();
  }, []);

  
  
  const handlePayment = (id) => {
    console.log('Printing id', id);
    CustomerServices.generatedBill(id)
      .then(response => {
        console.log('generated bill successfully', response.data);
        initPayment(response.data,id);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  const initPayment = (data,id) => {
    const options = {
      key: "rzp_test_z8jPT2wEjTE6dR",
      amount: data.amount,
      currency: data.currency,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          alert("Successfully Payed for service")
          // const verifyUrl = "http://localhost:8080/api/payment/verify";
          // const { data } = await axios.post(verifyUrl, response);
     //     CustomerServices.paymentdone(id)
   //  val.status="completed"
          .then(response => {
           console.log('payment done successfully', response.data);
       // init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <div class="container mt-3" style={{border:"10px solid grey" ,margin:"auto", height:"570px"}}>
        <h2>My Orders</h2>

        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>OrdersId</th>
              <th>Status</th>
              <th>Visiting charges</th>
              <th>Service</th>
              <th>Service date</th>
              <th>Worker Assigned </th>
              <th>Worker contact no</th>
              <th>Worker Id</th>
              <th>Payment</th>
              <th>Feedback</th>
              {/* <th>Service</th> */}
              {/* <th>Update</th>
    <th>Image</th>
    <th>Delete</th>  */}
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.orders_id}</td>             
                <td>{val.status}</td>
                <td>{val.amount}</td>
                <td>{val.service}</td>
                <td>{val.orderdate}</td>
                <td>{(val.workers==null)?" None ":val.workers.first_name + "  "+ val.workers.last_name}</td>
                <td>{(val.workers==null)?" -- ":val.workers.mobile}</td>
                <td>{(val.workers==null)?" -- ":val.workers.worker_id}</td>
                {/* {console.log(val.workers.worker_id)} */}
                {/* <td>{val.workers.profession.prof_name}</td> */}
                {/* <td><Link to="/car/update" state={val} class="btn btn-primary" >Update</Link> </td> */}
                
                <td><button className="btn btn-info" onClick={()=>{handlePayment(val.orders_id)}}>Payment</button></td>

                <td><button className="btn btn-info"> <a href="/FeedbackForm"  >Feedback</a></button></td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ViewAllOrdersneww;
