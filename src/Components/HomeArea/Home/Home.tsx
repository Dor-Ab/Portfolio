import { NavLink } from "react-router-dom";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            <div className="greeting">
                <h1>Hello</h1>
            </div>

            <div className="whoAmI animatedTile">
                <NavLink to={"who-am-i"} >Who Am I</NavLink>
            </div>

            <div className="techs animatedTile">
                <NavLink to={""}>Technologies</NavLink>
            </div>

            <div className="contactMe animatedTile">
                <NavLink to={""}>Contact Me</NavLink>
            </div>

            <div className="projects animatedTile">
                <NavLink to={""}>Projects</NavLink>
            </div>

        </div>
    );
}

export default Home;
