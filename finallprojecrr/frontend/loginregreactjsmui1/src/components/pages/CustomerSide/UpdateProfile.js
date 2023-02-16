import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:8080/Customer/Controller/Customers";

class UpdateProfile {

    updateCustomer(){
        return axios.get(Customer_API_BASE_URL);
    }

    
}

export default new UpdateProfile()