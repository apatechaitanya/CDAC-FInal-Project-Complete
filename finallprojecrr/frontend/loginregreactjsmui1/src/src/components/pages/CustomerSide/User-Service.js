import { myAxios } from "./urlapp";


export const RegisterAdmin=(user)=>{

    return myAxios.post('/Admin/Controller/RegistrationAdmin',user)
    .then((response)=> response.data);

};