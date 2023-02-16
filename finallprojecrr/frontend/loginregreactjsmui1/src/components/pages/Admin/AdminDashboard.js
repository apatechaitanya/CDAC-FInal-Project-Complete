import { Container, Row, Col } from "reactstrap";
import Options from "./Options";
import Adminhead from "./Adminhead";
import Heading from "./Heading";
import AdminLogin from "./AdminLogin";
import { height } from "@mui/system";
import worker from "../WorkerSide/workingmannew.jpg";
function AdminDashboard() {
      const items = JSON.parse(localStorage.getItem("admin-Info"));
    return (
        <>
        <div className="dashboard" style={{border:"10px solid grey" ,margintop:"20", height:"590px"}}>
            <Adminhead/>
      <Container className="dashContainer">
        <Row>
          <Col md={3} className="optionss">
              {
                items?<Options/>:<AdminLogin/>
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
export default AdminDashboard;