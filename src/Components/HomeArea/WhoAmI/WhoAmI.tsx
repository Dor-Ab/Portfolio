import { NavLink } from "react-router-dom";
import "./WhoAmI.css";
import { Row, Col } from "react-bootstrap";
import myPhoto from "../../../Assets/Images/Me (temp).jpg";
import johnBryce from "../../../Assets/Images/john-bryce.jpg";

function WhoAmI(): JSX.Element {
    return (
        <div className="WhoAmI">
            <Row>
                <h1>So, Who Am I ?</h1>
            </Row>

            <Row>
                <Col xs={3}></Col>
                <Col>
                    <p>My name is Dor Abutbul and i'm a Fullstack Developer.</p>
                    <p>I studied at John Bryce Training College in 2022 until 2023.</p>
                </Col>
                <Col xs={3}></Col>
            </Row>

            <Row>
                <Col></Col>
                <Col className="myPhoto">
                    <img src={myPhoto} />
                </Col>
                <Col></Col>
            </Row>


            <Row>
                <h2>What Am I Looking For ?</h2>
            </Row>

            <Row>
                <Col xs={3}></Col>
                <Col>
                    <p>I'm looking for a Fullstack Development position in a happy and friendly office.</p>
                </Col>
                <Col xs={3}></Col>
            </Row>

            <NavLink className="techs" to={"/technologies"}>My Skills</NavLink>
        </div>
    );
}

export default WhoAmI;
