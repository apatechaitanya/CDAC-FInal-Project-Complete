import axios from "axios";

const Admin_API_BASE_URL = "http://localhost:8080/Admin/Controller/RegistrationAdmin";
const AdminGet_API_BASE_URL = "http://localhost:8080/Admin/Controller/GetCustomers";


class AdminServices {

    createAdmin(admin){
        return axios.post(Admin_API_BASE_URL,admin);
    }


    getAdminById(adminId){
        return axios.get(`http://localhost:8080/Admin/Controller/GetCustomers/${adminId}`);
    }
}

export default new AdminServices()