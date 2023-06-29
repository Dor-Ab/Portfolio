import { Row } from "react-bootstrap";
import "./ContactCard.css";
import { useEffect, useState } from "react";


interface ContactCardProps {
    name: string
    image: string
    description: string
    url: string
    bgColor: string
    btnContent: string
}

function ContactCard(props: ContactCardProps): JSX.Element {

    useEffect(() => {
        if (props.name === "Phone Number") {

            let CurrentHour = new Date().getHours()

            if (CurrentHour <= 12 || CurrentHour >= 20) {
                setDisabled("disabled")
                setBgColor("grey")
            }
        }

    }, [])

    const [disabled, setDisabled] = useState<string>("")
    const [bgColor, setBgColor] = useState<string>(props.bgColor)


    return (
        <div className="ContactCard">
            <img src={props.image} />
            <Row>
                <h5>{props.name}</h5>
                <p>{props.description}</p>
            </Row>
            <a href={props.url} className={disabled} target="_blank" style={{ backgroundColor: bgColor }}>{props.btnContent}</a>
        </div>
    );
}

export default ContactCard;
