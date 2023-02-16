import React from "react";
import { Card, CardBody } from "reactstrap";

function Heading(props){
    return(
<div className="Dashheading">
<div className="my-2    ">
    <div>
        <h1 className="text-center my-3">{props.head}</h1>
        
    </div>
</div>
</div>
    );
}

export default Heading;