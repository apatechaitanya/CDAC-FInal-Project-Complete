import React, { PureComponent } from 'react'
import AdminServices from './AdminServices'
import { useParams, } from 'react-router-dom';
import { Params } from 'react-router-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

    class ViewAdminById extends PureComponent {
    constructor(props) {
        super(props);

       
        this.state = {
            id: this.props.match.params.id,
            admin : []
            
        }
       
        console.log(this.state.id);
    }




    componentDidMount(){
        
        AdminServices.getAdminById(this.state.id).then( res => {
            this.setState({admin: res.data});

           
        })
    }




    render() {
        return (
            
<div>
    <h1>HEloooo</h1>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> My Profile</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Username </label>
                            <div> { this.state.admin.username }</div>
                        </div>
                        <div className = "row">
                            <label> emailId </label>
                            <div> { this.state.admin.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> mobileno </label>
                            <div> { this.state.admin.mobileno }</div>
                        </div>
                    </div>

                </div>
            </div>


        )
    }
}


export default ViewAdminById