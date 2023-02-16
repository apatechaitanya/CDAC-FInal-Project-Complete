import { useEffect, useState } from "react";
import { Button, CardBody, CardHeader, Container, FormGroup } from "reactstrap";
import { RegisterAdmin } from "../Api/User-Service";



const RegisterAdminData = () => {
   
   
   
 const [data,setData]= useState({

    firstname:'',
    lastname:'',
    password:'',
    emailId:'',
    mobileno:'',
   address:{
    city:'',
    landmark:'',
    pincode:'',
     state:'',
    }
 }) 

 
 //Submit form

 const submitForm=(event)=>{
    event.preventDefault()
    console.log(data);

//code for validation

//connecting to api

        RegisterAdmin(data).then((resp) => {
            console.log(resp);
            console.log("Sucess log")

        }).catch((error)=>{
            console.log(error);
            console.log("Error log")

        })

 }
   
 
   //handle change

   const handleChange=(event,property)=>{

    //dynamic
    setData({ ...data,[property]:event.target.value  })
   
   }
   
   
   
   
   
   
   
   
    return(
        
        <Container className="text-center">
            
            {JSON.stringify(data)}
<card >

<CardHeader>

<CardBody >

<form onSubmit={submitForm}>
        <FormGroup>
        {/* USername field */}
            <label for="firstname">Enter First Name</label>
            <input 
            TextField margin='normal'
            type="text"
            id="firstname"
            onChange={(e)=>handleChange(e,'firstname')}
            value={data.firstname}
            />
        </FormGroup>

        <FormGroup>
        {/* USername field */}
            <label for="lastname">Enter Last Name</label>
            <input 
            TextField margin='normal'
            type="text"
            id="lastname"
            onChange={(e)=>handleChange(e,'lastname')}
            value={data.lastname}
            />
        </FormGroup>

        <FormGroup>
        {/* password; field */}
            <label for="password;">Enter Password</label>
            <input 
            type="text"
            id="password;"
            onChange={(e)=>handleChange(e,'password')}
            value={data.password}
            />
        </FormGroup>

        <FormGroup>
        {/* emailId; field */}
            <label for="emailId;">Enter EmailId</label>
            <input 
            type="text"
            id="emailId;"
            onChange={(e)=>handleChange(e,'emailId')}
            value={data.emailId}
            />
        </FormGroup>

        <FormGroup>
        {/* mobileno; field */}
            <label for="mobileno;">Enter Mobileno</label>
            <input 
            type="text"
            id="mobileno;"
            onChange={(e)=>handleChange(e,'mobileno')}
            value={data.address.mobileno}
            />
        </FormGroup>

      {/*   <FormGroup>
        
            <label for="address_id;">Enter address_id</label>
            <input 
            type="text"
            id="address_id;"
            onChange={(e)=>handleChange(e,'address_id')}
            value={data.address_id}
            />
        </FormGroup>
    */}

        <FormGroup>
        {/* city; field */}
            <label for="city;">Enter City</label>
            <input 
            type="text"
            id="city;"
            onChange={(e)=>handleChange(e,'city')}
            value={data.address.city}
            />
        </FormGroup>

        <FormGroup>
        {/* landmark; field */}
            <label for="landmark;">Enter Landmark</label>
            <input 
            type="text"
            id="landmark;"
            onChange={(e)=>handleChange(e,'landmark')}
            value={data.landmark}
            />
        </FormGroup>

        <FormGroup>
        {/* pincode; field */}
            <label for="pincode;">Enter Pincode</label>
            <input 
            type="text"
            id="pincode;"
            onChange={(e)=>handleChange(e,'pincode')}
            value={data.pincode}
            />
        </FormGroup>

        <FormGroup>
        {/* state; field */}
            <label for="state;">Enter State</label>
            <input 
            type="text"
            id="state;"
            onChange={(e)=>handleChange(e,'state')}
            value={data.state}
            />
        </FormGroup>

            <Container className="text-center">
            <Button color="dark">Register</Button>

            </Container>

</form>


</CardBody>


</CardHeader>



</card>



        </Container>
        
        
     


    )



}
export default RegisterAdminData;