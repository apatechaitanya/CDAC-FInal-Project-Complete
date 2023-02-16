import React, { PureComponent } from 'react'
import MyOrders from './MyOrders'

class MyOrderss extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
    }


    componentDidMount(){
        
        MyOrders.getCustomers().then( res => {
            this.setState({customers: res.data});
        })
    }


    render() {
        return (
            <div>
           <h2 className="text-center">Order List</h2>
                
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> orders_id</th>
                                    <th> amount</th>
                                    <th> status</th>
                                    <th> orderdate</th>
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {
                                    this.state.customers.map(
                                        customers => 
                                        <tr>
                                            
                                             <td> { customers.orders_id} </td>   
                                             <td> {customers.amount}</td>
                                             <td> {customers.status}</td>
                                             <td> {customers.orderdate}</td>
                                             <td> {customers.address.city}</td>

                                             <td>
                                                 <button onClick={ () => this.editEmployee(customers.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(customers.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(customers.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody> */}
                        </table>

                 </div>
        </div>
        )
    }
}

export default MyOrderss