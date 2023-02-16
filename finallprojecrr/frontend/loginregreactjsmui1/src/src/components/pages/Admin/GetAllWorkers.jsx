import React, { PureComponent } from 'react'
import GetWorkerService from './GetWorkerService'

class GetAllWorkers extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            workers: []
        }
    }


    componentDidMount(){
        
        GetWorkerService.getWorkers().then( res => {
            this.setState({workers: res.data});
console.log("out "+this.state.workers[0].verified)
            // {  console.log( (this.state.workers[0]).first_name)}
            // {  ( (this.state.workers[0]).verified)? console.log("trueeee"):console.log("false")}
            // {  ( (this.state.workers[1]).verified)? console.log("false")}


        })
    }


    render() {
        return (
            <div  style={{border:"10px solid grey" ,margin:"auto", height:"590px"}}>
           <h2 className="text-center">Workers List</h2>
                
<div className="row" style={{marginLeft:"30px",marginRight:"30px"}}>                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Workers Id</th>
                                    <th> Workers Name</th>
                                    <th> Email Id</th>
                                    <th> Mobile</th>
                                    <th> Landmark</th>
                                    <th> City</th>
                                    <th> Pincode</th>
                                    <th> Profession</th>
                                    <th> Available</th>
                                    <th> Verified</th>
                                    <th> Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.workers.map(
                                        workers => 
                                        <tr >
                                            
                                             <td> { workers.worker_id} </td>   
                                             <td> {workers.first_name+" "+workers.last_name}</td>
                                             <td> {workers.emailId}</td>
                                             <td> {workers.mobile}</td>
                                             <td> {workers.address.landmark}</td>
                                             <td> {workers.address.city}</td>
                                             <td> {workers.address.pincode}</td>
                                             <td > {workers.profession.prof_name}</td>
                                             <td> {workers.available}</td>
                                             <td> {workers.verified}</td>
                                             
                                             <td width={"550vh"}>
                                                 <a href={`/UpdtWrkByAdmin/${workers.worker_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Update</button>
                                                                 </a>
                                                 <a href={`/DeleteWorker/${workers.worker_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                                                                 </a>
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

export default GetAllWorkers;