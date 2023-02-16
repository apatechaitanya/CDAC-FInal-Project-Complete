import React, { PureComponent } from 'react'
import GetWorkerService from './GetWorkerService'
import Navbar from '../../Navbar'
class GetAllOrderstoAdmin extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }


    componentDidMount(){
        
        GetWorkerService.getOrders().then( res => {
            this.setState({orders: res.data});
                console.log("orders   : "+res.data);
            // {  console.log( (this.state.workers[0]).first_name)}
            // {  ( (this.state.orders[0]).workers_Id)? console.log("trueeee"):console.log("false")}
            // {  ( (this.state.workers[1]).verified)? console.log("false")}
            // {console.log("vlaue is : "+(this.state.orders.workers_Id)) }
             {  console.log("worker id is :"+ (this.state.orders[0]))}
            console.log('variable is ');

            
        
        


            // if (((this.state.orders[2]).workers.first_name) === null) {
            //     console.log('variable is null');
            //   }
             
           
        })
    }


    render() {

      

        // if ((this.state.orders[2]).workers.first_name) {
        //     // You can render any custom fallback UI
        //    console.log("Something went wrong");
        //   }

        // try {
        //      (this.state.orders[2]).workers.first_name
        //   } catch (error) {
        //    console.log("errrrrrr");
        //   }
       


      
        return (
          <>
          <Navbar/>
           
            <div className='Tables'  style={{border:"10px solid grey" ,margin:"auto", height:"590px"}}>
          
           <h2 className="text-center">Orders List</h2>
                
<div className="row" style={{marginLeft:"80px",marginRight:"80px"}}>                       
 <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> OrdersId</th>
                                    <th> Amount</th>
                                    <th> Status</th>
                                    <th> Date</th>
                                    <th> CustomerId</th>
                                    <th> Service</th>
                                    <th> Worker</th>
                                    <th> Action</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        orders => 
                                      
                                        
                                    
                                        <tr >
                                            
                                             <td> { orders.orders_id} </td>   
                                             <td> {orders.amount}</td>
                                             <td> {orders.status}</td>
                                             <td> {orders.orderdate}</td>
                                             <td> {orders.customer.cust_id}</td>
                                              <td> {orders.service}</td> 
                                             

                                              <td > {(orders.workers==null)?"Not Assigned":orders.workers.worker_id}</td> 
                                            
                                             
                                             
                                             <td >
                                                 <a href={`/UpdateOrdersByAdmin/${orders.orders_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Update</button>
                                                                 </a>
                                                 {/* <a href={`/DeleteWorker/${orders.worker_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                                                                 </a> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
        </div>
        </> 
        )
    }
}

export default GetAllOrderstoAdmin;