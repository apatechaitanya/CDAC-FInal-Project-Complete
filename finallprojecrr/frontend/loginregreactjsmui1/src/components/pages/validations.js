


const validations =(values) =>{

        let errors={};

        if(!values.first_name){
            errors.first_name="name is required"
        }

        if(!values.last_name){
            errors.first_name="name is required"
        }
        if(!values.emailId){
            errors.emailId="Email is required"

        }else if(!/^\S+@\S+$/i.test(values.emailId)){
            errors.emailId="Email is invalid"
        }
      
        if(!values.password){
            errors.password="Password is required"     
        }else if(! /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test
        (values.password)){
            errors.password="Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:"
        }
     
        if(!values.mobile){
            errors.mobile="No is required"
        }else if(! /^((\\+91-?)|0)?[0-9]{10}$/.test
        (values.mobile)){
            errors.mobile="Minimum 10 digits required"
        }

        if(!values.mobileno){
            errors.mobileno="No is required"
        }else if(! /^((\\+91-?)|0)?[0-9]{10}$/.test
        (values.mobileno)){
            errors.mobileno="Minimum 10 digits required"
        }

        if(!values.landmark){
            errors.mobile="No is required"
        }else if(! /(.*[a-z]){3}/i.test
        (values.landmark)){
            errors.landmark="Minimum 3 characters required"
        }

     return errors; 
}
export default validations