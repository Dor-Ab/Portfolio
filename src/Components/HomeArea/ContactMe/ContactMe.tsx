import ContactCard from "../../CardsArea/ContactCard/ContactCard";
import "./ContactMe.css";
import wsImage from "../../../Assets/Images/whatsapp.jpg"
import fbImage from "../../../Assets/Images/Facebook Card.jpg"
import liImage from "../../../Assets/Images/LinkedIn Card.jpg"
import phoneNum from "../../../Assets/Images/Call Me Card.jpg"
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ContactMe(): JSX.Element {
    return (
        <div className="ContactMe">
            <Row>
                <Col xs="3" className="btnsContainer">
                    <NavLink className="btns" to={"/home"}>Home</NavLink>
                </Col>
                <Col>
                    <h2>Contact Me:</h2>
                </Col>
                <Col xs="3">
                </Col>
            </Row>
            <div className="cardsContainer">
                <ContactCard name="Facebook" image={fbImage} description="Feel free to reach me out on Facebook!" url="https://m.me/APerfectHunk" bgColor="#4b77cf" btnContent="Messanger Chat" />
                <ContactCard name="WhatsApp" image={wsImage} description="Feel free to reach me out on Whatsapp!" url="https://wa.me/972527727614" bgColor="#009633" btnContent="WhatsApp Chat" />
                <ContactCard name="LinkedIn" image={liImage} description="Feel free to reach me out on LinkedIn!" url="https://www.linkedin.com/in/dor-abutbul" bgColor="#4b77cf" btnContent="LinkdIn Chat" />
                <ContactCard name="Phone Number" image={phoneNum} description="Call Me Between 12:00 and 20:00" url="tel:+972527727614" bgColor="#009633" btnContent="Call Me" />
            </div>
        </div>
    );
}

export default ContactMe;
