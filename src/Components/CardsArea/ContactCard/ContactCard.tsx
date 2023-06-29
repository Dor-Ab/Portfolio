import { Row } from "react-bootstrap";
import "./ContactCard.css";


interface ContactCardProps {
    name: string
    image: string
    description: string
    url: string
}

function ContactCard(props: ContactCardProps): JSX.Element {
    return (
        <div className="ContactCard">
            <img src={props.image} />
            <Row>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </Row>
        </div>
    );
}

export default ContactCard;
