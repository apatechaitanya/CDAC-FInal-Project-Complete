import axios from "axios";
import { useEffect, useState } from "react";
import { Button, CardBody, CardHeader, Container, FormGroup } from "reactstrap";
import { RegisterAdmin } from "../CustomerSide/User-Service";



const AddProfession = () => {
   
   
   
 const [input,setInput]= useState({

    prof_name:'',
    basic_charges:'',
   
 }) 

 
 //Submit form

 const submitForm=(event)=>{
    event.preventDefault()
    console.log();
alert(JSON.stringify(input));
//code for validation

//connecting to api
console.log("post will happen");
axios.post("http://localhost:8080/Profession/Controller/RegistrationProfession",input).then(response=>{alert(response.data);}).catch(error=>{})
console.log(input);
        // RegisterAdmin(data).then((resp) => {
        //     console.log(resp);
        //     console.log("Sucess log")

        // }).catch((error)=>{
        //     console.log(error);
        //     console.log("Error log")

        // })

 }
   
 
   //handle change

   const handleChange=(event,property)=>{

    //dynamic
    setInput({ ...input,[property]:event.target.value  })
   
   }
   
   
   
   
   
   
   
   
    return(
        
        <Container className="text-center">
            
            {JSON.stringify(input)}
<card >

<CardHeader>

<CardBody >

<form onSubmit={submitForm}>
        <FormGroup>
        {/* prof_name field */}
            <label for="username">Enter prof_name</label>
            <input 
            TextField margin='normal'
            type="text"
            id="prof_name"
            onChange={(e)=>handleChange(e,'prof_name')}
            value={input.prof_name}
            />
        </FormGroup>

        <FormGroup>
        {/* password; basic_charges */}
            <label for="password;">basic_charges</label>
            <input 
            type="text"
            id="basic_charges;"
            onChange={(e)=>handleChange(e,'basic_charges')}
            value={input.basic_charges}
            />
        </FormGroup>

       
       


       

       

       

            <Container className="text-center">
            <Button color="dark">Add</Button>

            </Container>

</form>


</CardBody>


</CardHeader>



</card>



        </Container>
        
        
     


    )



}
export default AddProfession;