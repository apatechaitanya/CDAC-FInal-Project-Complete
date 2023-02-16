import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:8080/Customer/Controller/Registration";
//const generatedbill_API_BASE_URL = "http://localhost:8080/Customer/Controller/Registration";
class CustomerServices {

    Createcustomer(customer){
        return axios.post(Customer_API_BASE_URL,customer);
    }

     generatedBill (id) {
        return axios.get(`http://localhost:8080/Customer/Controller/generatedbill/${id}`);
      };
      
       paymentdone (id) {
        return axios.get(`http://localhost:8080/Customer/Controller/Registration/customer/payment/${id}`);
      };

    
}

export default new CustomerServices()