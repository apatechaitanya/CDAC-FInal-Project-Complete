import React, { PureComponent } from "react";
import GetCustomerService from "./GetCustomerService";
import DeleteComponenent from "./DeleteComponenetCust";
import { Link, NavLink, useParams } from "react-router-dom";
import Navbar from '../../Navbar'
class GetAllFeedback extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        feedback: [],
    };
  }

  componentDidMount() {
    GetCustomerService.getAllFeedbacks().then((res) => {
      this.setState({ feedback: res.data });
    });
  }

  render() {
    return (
      <div>
     <Navbar/>
      <div style={{border:"5px solid grey" ,margin:"auto", height:"590px"}}>
        <h2 className="text-center">Customer List</h2>

        <div className="row" style={{marginLeft:"80px",marginRight:"80px"}}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                
                
                <th> Customer Name </th>
                <th> Service</th>
                <th> Worker Name</th>
                <th> Comment</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.feedback.map((feedback) => (
                <tr>
                  <td> {feedback.customer.first_name+" "+feedback.customer.last_name} </td>
                  <td> {feedback.worker.profession.prof_name}</td>
                  <td> {feedback.worker.first_name+" "+feedback.worker.last_name}</td>
                  <td> {feedback.feedback}</td>
                 
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }
}

export default GetAllFeedback;
