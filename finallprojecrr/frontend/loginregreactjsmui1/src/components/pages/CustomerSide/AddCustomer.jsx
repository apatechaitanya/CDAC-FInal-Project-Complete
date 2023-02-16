import React, { PureComponent } from 'react'
import CustomerServices from './CustomerServices';

class AddCustomer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            first_name:'',
            last_name:'',
            password:'',
            emailId:'',
            mobile:'',
          
            city:'',
            landmark:'',
            pincode:'',
             state:'',
        
    }

    this.changefirstnameHandler = this.changefirstnameHandler.bind(this);
    this.changelastnameHandler = this.changelastnameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);

    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeLandmarkHandler = this.changeLandmarkHandler.bind(this);

    this.changePincodeHandler = this.changePincodeHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.saveEmployee =this.saveEmployee.bind(this);
   
   
    }
    


    

    saveEmployee =(e) => {
        e.preventDefault();

        let customer = {first_name: this.state.first_name,last_name:this.state.last_name ,password: this.state.password, emailId: this.state.emailId,
            mobile: this.state.mobile, city: this.state.city, landmark: this.state.landmark,
            pincode: this.state.pincode, state: this.state.state}
            console.log('customer => ' + JSON.stringify(customer));
            CustomerServices.Createcustomer(customer).then(res=>{
              

            });

    }


    changefirstnameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changelastnameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeMobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }

    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    changeLandmarkHandler= (event) => {
        this.setState({landmark: event.target.value});
    }

    changePincodeHandler= (event) => {
        this.setState({pincode: event.target.value});
    }

    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }

    

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            
                        <h3 className='text-center'>Customer Registration</h3>

                            <div className = "card-body">
                                <form classNama="needs-validation" novalidate>
                                    <div className = "form-group">
                                        <label for="validationCustom03" class="form-label"> First Name </label>
                                        <input placeholder="First Name" type="text" name="firstname" className="form-control" 
                                            value={this.state.first_name}  onChange={this.changefirstnameHandler} required/>
                                        <div class="valid-feedback">Valid</div>
                                        <div class="invalid-feedback">Please fill out this field.</div> 
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name </label>
                                        <input placeholder="Last Name" name="lastname" className="form-control" 
                                            value={this.state.last_name} onChange={this.changelastnameHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <div className = "form-group">
                                        <label> Email Id </label>
                                        <input type="Email" placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} autoFocus onChange={this.changeEmailHandler} required title="example@email.com"/>
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> Password </label>
                                        <input placeholder="Password" name="password" className="form-control" 
                                            value={this.state.password} onChange={this.changePasswordHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <div className = "form-group">
                                        <label> Mobile-no </label>
                                        <input placeholder="Mobile" name="mobileno" className="form-control" 
                                            value={this.state.mobile} onChange={this.changeMobileHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <div className = "form-group">
                                        <label> City </label>
                                        <input placeholder="City" name="City" className="form-control" 
                                            value={this.state.city} onChange={this.changeCityHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <div className = "form-group">
                                        <label> Landmark </label>
                                        <input placeholder="Landmark" name="Landmark" className="form-control" 
                                            value={this.state.landmark} onChange={this.changeLandmarkHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <div className = "form-group">
                                        <label> Pincode </label>
                                        <input placeholder="Pincode" name="Pincode" className="form-control" 
                                            value={this.state.pincode} onChange={this.changePincodeHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <div className = "form-group">
                                        <label> State </label>
                                        <input placeholder="State" name="State" className="form-control" 
                                            value={this.state.state} onChange={this.changeStateHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <br></br>

                                    <button type="submit" className="btn btn-success "  onClick={this.saveEmployee}>Register</button>
                              </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        )
    
}
}
export default AddCustomer