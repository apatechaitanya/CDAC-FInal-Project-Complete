import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:8080/Customer/Controller/AllCustomers";
const EMPLOYEE_BASE_REST_API_URL="http://localhost:8080/Customer/Controller/updateCustomers"
const Customer_Get_REST_API_URL="http://localhost:8080/Customer/Controller/GetCustomers"
const Feedback_Get_REST_API_URL="http://localhost:8080/Customer/Controller/AllFeedback"
class GetCustomerService {

    getCustomers(){
        return axios.get(Customer_API_BASE_URL);
    }
    updateCustomer(cust_id, customers){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +cust_id, customers);
    }

    getCustomerById(id){
        return axios.get(Customer_Get_REST_API_URL + '/' + id);
    }
    
    getAllFeedbacks(){
        return axios.get(Feedback_Get_REST_API_URL);
    }

}

export default new GetCustomerService()