import React, { PureComponent } from 'react'
import UpdateProfile from './UpdateProfile'

class UpdateCustomer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
    }


    componentDidMount(){
        
        UpdateProfile.updateCustomer().then( res => {
            this.setState({customers: res.data});
        })
    }


    render() {
        return (
            <div>
           <h2 className="text-center">Update Cutomer</h2>
                
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Mobile</th>
                                    <th> City</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customers => 
                                        <tr>
                                            
                                             <td> { customers.first_name} </td>   
                                             <td> {customers.last_name}</td>
                                             <td> {customers.emailId}</td>
                                             <td> {customers.mobile}</td>
                                             <td> {customers.address.city}</td>

                                             <td>
                                                 <button onClick={ () => this.editEmployee(customers.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(customers.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(customers.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
        </div>
        )
    }
}

export default UpdateCustomer