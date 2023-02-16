import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import Layout from "./components/pages/Layout";
import Electrician from "./components/pages/Electrician";
import Carpenter from "./components/pages/Carpenter";
import Plumber from "./components/pages/Plumber";
import Washing from "./components/pages/Washing";
import Painting from "./components/pages/Painting";
import Salon from "./components/pages/Salon";
import { Container, Row, Col } from "reactstrap";
import Options from "./components/pages/Admin/Options";
import GetAllCustomers from "./components/pages/Admin/GetAllCustomers";
import ViewAdminByIdnew from "./components/pages/Admin/ViewadminByid2.0";
import AddAdmin from "./components/pages/Admin/AddAdmin";
// import GetAllWorkers from "./components/pages/Admin/GetAllWorkers";
import DeleteComponenent from "./components/pages/Admin/DeleteComponenetCust";
import UpdateCustomer from "./components/pages/CustomerSide/UpdateCustomer2.0"
import UpdateWorker from "./components/pages/Admin/UpdateWorker";
import DeleteWorker from "./components/pages/Admin/DeleteWorker";
import Heading from "./components/pages/Admin/Heading";
import AdminDashboard from "./components/pages/Admin/AdminDashboard";
import CustomerDashboard from "./components/pages/CustomerSide/CustomerDashboard";
import MyOrders from "./components/pages/CustomerSide/ViewAllOrdersnew1";
import BookServicess from "./components/pages/CustomerSide/BookServicess";
import AddCustomer from "./components/pages/CustomerSide/AddCustomernew"
import ViewcustomerByid from "./components/pages/CustomerSide/ViewcustomerByid";
import AddProfession from "./components/pages/Profession/AddPRofession";
import GetAllWorkers from "./components/pages/Admin/GetAllWorkers";
import WorkerDashboard from "./components/pages/WorkerSide/WorkerDashboard";
// import AddWorker from "./components/pages/WorkerSide/AddWorker";
import AddWorker from "./components/pages/WorkerSide/AddWorkernew";
import Validation from "./components/pages/CustomerSide/Validation";
// import MyOrderssWorker from "./components/pages/CustomerSide/MyOrderss";
import ViewworkerByid from "./components/pages/WorkerSide/ViewworkerByid";
import UpdateWorkernew from "./components/pages/WorkerSide/UpdateWorker2.0";
import UserLogin from "./components/pages/auth/UserLogin";
import Coursel from "./components/pages/Coursel";
import Login from "./components/pages/CustomerSide/Login";
import AdminLogin from "./components/pages/Admin/AdminLogin"
import WorkerLogin from "./components/pages/WorkerSide/WorkerLogin";
import ViewAllOrdersForWorker from "./components/pages/WorkerSide/ViewAllOrdersForWorker";
import Pincode from "./components/pincode";
import UpdateCustomerByAdmin from "./components/pages/Admin/UpdtCustByAdmin";
import UpdtWrkByAdmin from "./components/pages/Admin/UpdtWrkByAdmin"
import Footer from "./components/pages/Footer";
import AddAdminnew from "./components/pages/Admin/AddAdminnew";
import GetAllOrderstoAdmin from "./components/pages/Admin/GetAllOrderstoAdmin";
import UpdateOrdersByAdmin from "./components/pages/Admin/UpdateOrdersByAdmin";
import EmailVerifyAdmin from "./components/pages/Login Details/EmailVerifyAdmin";
import EmailVerifyCustomer from "./components/pages/Login Details/EmailVerifyCustomer";
import EmailVerifyWorker from "./components/pages/Login Details/EmailVerifyWorker";
import OtpVerifyAdmin from "./components/pages/Login Details/OtpVerifyAdmin";
import OtpVerifyCustomer from "./components/pages/Login Details/OtpVerifyCustomer";
import OtpVerifyWorker from "./components/pages/Login Details/OtpVerifyWorker";
import PasswordChangeforCustomers from "./components/pages/Login Details/PasswordChangeforCustomer";
import PasswordChangeAdmin from "./components/pages/Login Details/PasswordChangeforAdmin";
import PasswordChangeWorker from "./components/pages/Login Details/PasswordChangeforWorker";
// import UserProfileView from "./components/pages/Admin";
import UpdateOrdersForWorker from "./components/pages/WorkerSide/UpdateOrderForWorker";
import App1 from "./components/pages/Admin/Testpage";
import GetAllFeedback from "./components/pages/Admin/GetAllFeedbacks";
import FeedbackForm from "./components/pages/CustomerSide/Feedback Form";
import ErrorPage from "./components/pages/Admin/errorpage";



function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        
        <Route path="FeedbackForm" element={<FeedbackForm/>}/>
        <Route path="Feedbacks" element={<GetAllFeedback/>}/>
        <Route path="App1" element={<App1/>}/> 
         <Route path="UpdateOrdersForWorker/:id" element={<UpdateOrdersForWorker/>}/> 

        <Route path="PasswordChangeWorker" element={<PasswordChangeWorker/>}/>
        <Route path="PasswordChangeAdmin" element={<PasswordChangeAdmin/>}/>

        <Route path="PasswordChangeforCustomers" element={<PasswordChangeforCustomers/>}/>
        <Route path="OtpVerifyAdmin" element={<OtpVerifyAdmin/>}/>
        <Route path="OtpVerifyCustomer" element={<OtpVerifyCustomer/>}/>
        <Route path="OtpVerifyWorker" element={<OtpVerifyWorker/>}/>


        <Route path="EmailVerifyCustomer" element={<EmailVerifyCustomer/>}/>
        <Route path="EmailVerifyAdmin" element={<EmailVerifyAdmin/>}/>
        <Route path="EmailVerifyWorker" element={<EmailVerifyWorker/>}/>
                    <Route path="UpdateOrdersByAdmin/:id" element={<UpdateOrdersByAdmin/>}/>
          <Route path="GetAllOrderstoAdmin" element={<GetAllOrderstoAdmin/>}/>
          <Route path="pincode" element={<Pincode/>}/>
          <Route path="Validation" element={<Validation/>}/>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="login" element={<LoginReg />} /> */}
            <Route path="service" element={<Service />} />
            <Route path="admin" element={<AdminDashboard />} />
            
            <Route path="AdminLogin" element={<AdminLogin />}/>
            <Route path="WorkerLogin" element={<WorkerLogin/>}/>
              {/* customer side dashboard */}
            
            <Route path="customer" element={<CustomerDashboard />} />
            
            {/* my orders */}
            <Route path="myorders" element={<MyOrders />} />

            {/* book service */}
            <Route path="bookservicess" element={<BookServicess />} />

            {/* add Customer */}
            <Route path="customerReg" element={< AddCustomer/>} />

            {/* update Customer */}
            <Route path="UpdateCustomer/:id" element={< UpdateCustomer/>} />

            {/* update AddProfession */}
            <Route path="AddProfession" element={< AddProfession/>} />
            <Route path="Login" element={<Login/>}/>

            {/* Worker side dashboard */}
            <Route path="worker" element={<WorkerDashboard />} />

              {/* Add Worker */}
              <Route path="AddWorker" element={< AddWorker/>} />

               {/* my orders Worker*/}
            {/* <Route path="MyOrderssWorker" element={<MyOrderssWorker />} /> */}

            <Route path="UpdateCustomerByAdmin/:id" element={<UpdateCustomerByAdmin/>}/>
              {/* ViewworkerByid*/}
              <Route path="ViewworkerByid/:id" element={<ViewworkerByid />} />

            <Route path="UpdtWrkByAdmin/:id" element={<UpdtWrkByAdmin/>}/>
                {/* Update worker*/}
                 <Route path="UpdateWorkernew/:id" element={<UpdateWorkernew />}/>
                
                <Route path="ViewAllOrdersForWorker" element={<ViewAllOrdersForWorker/>}/> 

            {/* <PrivateRoutes exact path="/WorkerLogin" name="Companies" component={props => <WorkerLogin {...props}/>} /> */}

            <Route path="ViewcustomerByid/:id"element={<ViewcustomerByid />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="Carpenter" element={<Carpenter />} />
            <Route path="Electrician" element={<Electrician />} />
            <Route path="Plumber" element={<Plumber />} />
            <Route path="Washing" element={<Washing />} />
            <Route path="Painting" element={<Painting />} />
            <Route path="Salon" element={<Salon />} />

            <Route path="AddAdmin" element={<AddAdminnew />} />
            <Route path="GetAllWorkers" element={<GetAllWorkers />} />
            <Route
              path="DeleteComponenent/:id"
              element={<DeleteComponenent />}
            />

            <Route path="UpdateCustomer/:id" element={<UpdateCustomer />} />
            <Route path="UpdateWorker/:id" element={<UpdateWorker />} />
            <Route path="DeleteWorker/:id" element={<DeleteWorker />} />
            <Route path="GetAllCustomers" element={<GetAllCustomers />} />
            <Route path="ViewAdminByIdnew/:id" element={<ViewAdminByIdnew />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/UserLogin" element={<UserLogin />} />Coursel

          <Route path="/Coursel" element={<Coursel />} />
          <Route path="/Footer" element={< Footer/>} />

          
          <Route path="*" element={< ErrorPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
     
    </>
    
  );
}

export default App;
