import { Row } from "react-bootstrap";
import "./ProjectCard.css";

interface ProjectCardProps {
    name: string
    image: string
    description: string
    url: string
    btnContent: string
    extraContent?: string
    extraBtn?: boolean
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
    return (
        <div className="ProjectCard">
            <img src={props.image} />
            <Row>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                {props.extraContent &&
                    <p>{props.extraContent}</p>
                }
            </Row>
            <div className="ProjectCardBtns">
                <a href={props.url} target="_blank">{props.btnContent}</a>
                {props.extraBtn &&
                    <a href="https://dor-ab.github.io/CryptoSiteProject/" target="_blank">Website</a>
                }
            </div>
        </div>
    );
}

export default ProjectCard;
