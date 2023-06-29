import ContactCard from "../../CardsArea/ContactCard/ContactCard";
import "./ContactMe.css";
import wsImage from "../../../Assets/Images/whatsapp.jpg"

function ContactMe(): JSX.Element {
    return (
        <div className="ContactMe">
            <ContactCard name="WhatsApp" image={wsImage} description="" url="" />
        </div>
    );
}

export default ContactMe;
