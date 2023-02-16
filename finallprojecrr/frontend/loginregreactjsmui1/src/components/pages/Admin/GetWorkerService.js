import axios from "axios";

const Worker_API_BASE_URL = "http://localhost:8080/Worker/Controller/AllWorker";
const Orders_API_BASE_URL = "http://localhost:8080/Admin/Controller/AllOrderstoAdmin";

class GetWorkerService {

    getWorkers(){
        return axios.get(Worker_API_BASE_URL);
    }
    getOrders(){
        return axios.get(Orders_API_BASE_URL);
    }


    
}

export default new GetWorkerService()