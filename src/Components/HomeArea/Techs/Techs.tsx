import "./Techs.css";
import TechCard from "../../CardsArea/TechCard/TechCard";
import jsImg from "../../../Assets/Images/JavaScript.png"
import htmlImg from "../../../Assets/Images/html.png"
import bootstrapImg from "../../../Assets/Images/Bootstrap.png"
import cssImg from "../../../Assets/Images/css.png"
import reactImg from "../../../Assets/Images/React.jpg"
import expressImg from "../../../Assets/Images/Express.png"
import fireBaseImg from "../../../Assets/Images/FireBase.png"
import gitImg from "../../../Assets/Images/Git.png"
import gitHubImg from "../../../Assets/Images/Github.png"
import mongoImg from "../../../Assets/Images/Mongo.png"
import sqlImg from "../../../Assets/Images/MySql.png"
import nodeImg from "../../../Assets/Images/Node.png"
import oopImg from "../../../Assets/Images/OOP.png"
import tsImg from "../../../Assets/Images/TypeScript.png"
import jqueryImg from "../../../Assets/Images/jQuery.png"
import phpImg from "../../../Assets/Images/php.png"
import { Row } from "react-bootstrap";

function Techs(): JSX.Element {
    return (
        <div className="Techs">
            <Row>
                <h2>My Skills And Technologies:</h2>
            </Row>
            <div className="techsContainer">
                <TechCard name="JavaScript" photo={jsImg} />
                <TechCard name="HTML" photo={htmlImg} />
                <TechCard name="CSS" photo={cssImg} />
                <TechCard name="React" photo={reactImg} />
                <TechCard name="Bootstrap" photo={bootstrapImg} />
                <TechCard name="Express.js" photo={expressImg} />
                <TechCard name="FireBase" photo={fireBaseImg} />
                <TechCard name="Git" photo={gitImg} />
                <TechCard name="GitHub" photo={gitHubImg} />
                <TechCard name="MongoDb" photo={mongoImg} />
                <TechCard name="MySQL" photo={sqlImg} />
                <TechCard name="Node.js" photo={nodeImg} />
                <TechCard name="OOP" photo={oopImg} />
                <TechCard name="TypeScript" photo={tsImg} />
                <TechCard name="jQuery" photo={jqueryImg} />
                <TechCard name="PHP" photo={phpImg} />
            </div>
        </div>
    );
}

export default Techs;
