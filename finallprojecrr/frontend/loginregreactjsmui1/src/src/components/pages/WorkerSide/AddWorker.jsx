import React, { PureComponent } from "react";
import WorkerServices from "./WorkerServices";

class AddWorker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      emailId: "",
      mobileno: "",

      city: "",
      landmark: "",
      pincode: "",
      state: "",
    };

    this.changefirstnameHandler = this.changefirstnameHandler.bind(this);
    this.changelastnameHandler = this.changelastnameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);

    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeLandmarkHandler = this.changeLandmarkHandler.bind(this);

    this.changePincodeHandler = this.changePincodeHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  saveEmployee = (e) => {
    e.preventDefault();

    let worker = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
      emailId: this.state.emailId,
      mobileno: this.state.mobileno,
      city: this.state.city,
      landmark: this.state.landmark,
      pincode: this.state.pincode,
      state: this.state.state,
    };
    console.log("customer => " + JSON.stringify(worker));
    WorkerServices.Createworker(worker).then((res) => {});
  };

  changefirstnameHandler = (event) => {
    this.setState({ firstname: event.target.value });
  };

  changelastnameHandler = (event) => {
    this.setState({ lastname: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeMobileHandler = (event) => {
    this.setState({ mobileno: event.target.value });
  };

  changeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };

  changeLandmarkHandler = (event) => {
    this.setState({ landmark: event.target.value });
  };

  changePincodeHandler = (event) => {
    this.setState({ pincode: event.target.value });
  };

  changeStateHandler = (event) => {
    this.setState({ state: event.target.value });
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Worker Registration</h3>

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name </label>
                    <input
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={this.state.firstname}
                      onChange={this.changefirstnameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name </label>
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={this.state.lastname}
                      onChange={this.changelastnameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Email Id </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Password </label>
                    <input
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Mobile-no </label>
                    <input
                      placeholder="Mobile"
                      name="mobileno"
                      className="form-control"
                      value={this.state.mobileno}
                      onChange={this.changeMobileHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> City </label>
                    <input
                      placeholder="City"
                      name="City"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.changeCityHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Landmark </label>
                    <input
                      placeholder="Landmark"
                      name="Landmark"
                      className="form-control"
                      value={this.state.landmark}
                      onChange={this.changeLandmarkHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Pincode </label>
                    <input
                      placeholder="Pincode"
                      name="Pincode"
                      className="form-control"
                      value={this.state.pincode}
                      onChange={this.changePincodeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> State </label>
                    <input
                      placeholder="State"
                      name="State"
                      className="form-control"
                      value={this.state.state}
                      onChange={this.changeStateHandler}
                    />
                  </div>

                  <br></br>

                  <button
                    className="btn btn-success "
                    onClick={this.saveEmployee}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddWorker;
