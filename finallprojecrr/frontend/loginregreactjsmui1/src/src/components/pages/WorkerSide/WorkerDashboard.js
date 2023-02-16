import { Container, Row, Col } from "reactstrap";
import Options from "./Options";

import Workerheading from "../Admin/Workerheading";
import WorkerLogin from "./WorkerLogin";
import worker from "../WorkerSide/workerdash.jpg";
function WorkerDashboard() {
      const items = JSON.parse(localStorage.getItem("worker-info"));

    return (
        <>
         <div className="dashboard" style={{border:"10px solid grey" ,margin:"auto", height:"590px"}}>
 
            <Workerheading/>
      <Container className="dashContainer">
        <Row>
          <Col md={3}>
              {
                items?<Options/>:<WorkerLogin/>
            }
          </Col>
          <Col md={8}>
          <img 
                    src={worker} 
                    style={{height:400,width:710,marginLeft:200,marginTop:20}}
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
export default WorkerDashboard;