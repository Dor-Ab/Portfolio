import { Row } from "react-bootstrap";
import "./TechCard.css";

interface TechCardProps {
    name: string
    photo: string
}

function TechCard(props: TechCardProps): JSX.Element {
    return (
        <div className="TechCard">
            <Row>
                <h3>{props.name}</h3>
            </Row>
            <img src={props.photo} alt="" />
        </div>
    );
}

export default TechCard;
