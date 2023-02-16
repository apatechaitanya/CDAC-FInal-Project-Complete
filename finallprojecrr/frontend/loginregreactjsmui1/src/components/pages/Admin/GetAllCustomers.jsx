import React, { PureComponent } from "react";
import GetCustomerService from "./GetCustomerService";
import DeleteComponenent from "./DeleteComponenetCust";
import { Link, NavLink, useParams } from "react-router-dom";

class GetAllCustomers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    GetCustomerService.getCustomers().then((res) => {
      this.setState({ customers: res.data });
    });
  }

  render() {
    return (
      <div className='Tables' style={{border:"10px solid grey" ,margin:"auto", height:"590px",textAlign:"center"}}>
        <h2 className="text-center">Customer List</h2>

        <div className="row" style={{marginLeft:"80px",marginRight:"80px"}}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                
                <th> Customer Name</th>
                <th> Email Id</th>
                <th> Contact</th>
                <th> Landmark</th>
                <th> City</th>
                <th> Pincode</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customers) => (
                <tr>
                  <td> {customers.first_name+" "+customers.last_name} </td>
                  <td> {customers.emailId}</td>
                  <td> {customers.mobile}</td>
                  <td> {customers.address.landmark}</td>
                  <td> {customers.address.city}</td>
                  <td> {customers.address.pincode}</td>
                  <td>
                    <a href={`/UpdateCustomerByAdmin/${customers.id}`} action>
                      <button
                        style={{ marginLeft: "10px" }}
                        className="btn btn-danger"
                      >
                        Update
                      </button>
                    </a>
                    
                    <a href={`/DeleteComponenent/${customers.id}`} action>
                      {/* <a href={"/GetAllCustomers"} action></a> */}
                      <button 
                        
                        style={{ marginLeft: "10px" }}
                        className="btn btn-danger"
                        // onClick={<NavLink to="/GetAllCustomers" action></NavLink>}
                      >
                        Delete
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GetAllCustomers;
