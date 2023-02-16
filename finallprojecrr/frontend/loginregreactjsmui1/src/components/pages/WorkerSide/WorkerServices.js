import axios from "axios";

const Customer_API_BASE_URL =
  "http://localhost:8080/Worker/Controller/RegistrationWorker";

class WorkerServices {
  Createworker(worker) {
    return axios.post(Customer_API_BASE_URL, worker);
  }
}

export default new WorkerServices();
