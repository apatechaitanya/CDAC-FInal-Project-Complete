import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:8085/Customer/Controller/AllCustomers";

class MyOrders {

    getCustomers(){
        return axios.get(Customer_API_BASE_URL);
    }

    
}

export default new MyOrders()