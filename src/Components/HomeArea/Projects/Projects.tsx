import "./Projects.css";
import ProjectCard from "../../CardsArea/ProjectCard/ProjectCard";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import dorBnb from "../../../Assets/Images/dorBNB.jpg"
import cryptoWorld from "../../../Assets/Images/CryptoWorld.jpg"
import portfolio from "../../../Assets/Images/Portfolio.jpg"
import RESTBuild from "../../../Assets/Images/layerd api.jpg"

function Projects(): JSX.Element {
    return (
        <div className="Projects">
            <Row>
                <Col xs="3" className="btnsContainer">
                    <NavLink className="btns" to={"/home"}>Home</NavLink>
                </Col>
                <Col>
                    <h2>My Projects:</h2>
                </Col>
                <Col xs="3">
                </Col>
            </Row>

            <div className="projectCardContainer">
                <ProjectCard name="dorBNB" description="Vacations Fullstack System" image={dorBnb} url="https://github.com/Dor-Ab/dorBNB-Vacation-Project" btnContent="GitHub" />
                <ProjectCard name="Crypto World" description="Crypto Currency Website" image={cryptoWorld} url="https://github.com/Dor-Ab/CryptoSiteProject" btnContent="GitHub" extraBtn={true} />
                <ProjectCard name="Portfolio" description="This Website" image={portfolio} url="https://github.com/Dor-Ab/Portfolio" btnContent="GitHub" />
                <ProjectCard name="REST API Builder" description={`npm To Build REST API, React & SQL Options`} image={RESTBuild} url="https://github.com/Dor-Ab/Layered-Rest-Api-Npm" btnContent="GitHub" />

            </div>
        </div>
    );
}

export default Projects;
