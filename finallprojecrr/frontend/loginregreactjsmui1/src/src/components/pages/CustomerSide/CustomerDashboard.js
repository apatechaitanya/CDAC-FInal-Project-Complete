import { Container, Row, Col } from "reactstrap";
import Options from "./Options";
import Login from "./Login";
import CustomerHead from "../Admin/CustomerHead";
import Heading from "../Admin/Heading";
import worker from "../WorkerSide/workingmannew.jpg";
function CustomerDashboard() {
        const items = JSON.parse(localStorage.getItem("user-Info"));
    return (
        <>
        <div className="dashboard" style={{border:"10px solid grey" ,margin:"auto", height:"590px"}}>
            <CustomerHead/>
      <Container className="dashContainer">
        <Row>
          <Col md={3}>
               {
                items?<Options/>:<Login/>
           }
          </Col>
          <Col md={9}>
          < img 
                    src={worker}
                    style={{height:430,width:710,marginLeft:200,marginTop:20}}
                    className="img-fluid animated"
                    alt="home img"

                  />
          </Col>
        </Row>
      </Container>
       </div>
        </>
    );
}
export default CustomerDashboard;