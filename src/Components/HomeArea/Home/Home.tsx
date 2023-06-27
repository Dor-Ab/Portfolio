import { NavLink } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";

function Home(): JSX.Element {

    const [greeting, setGreeting] = useState<string>("Hello")
    const [greetingAnimation, setGreetingAnimation] = useState<string>("test")

    useEffect(() => {
        let counter = 0
        const greetings = ["שלום", "Привет", "Bonjour", "مرحبًا", "Hello"]

        const greetingInterval = setInterval(() => {
            setGreeting(greetings[counter])
            counter++
            if (counter >= greetings.length) counter = 0
        }, 5000)


        const test = setInterval(() => {
            setGreetingAnimation("")
            setTimeout(() => {
                setGreetingAnimation("test")
            }, 20)
        }, 4980)

        return () => {
            clearInterval(greetingInterval)
            clearInterval(test)
        }
    }, [])

    return (
        <div className="Home">

            <div className="greeting">
                <h1 className={greetingAnimation}>{greeting}</h1>
            </div>

            <div className="whoAmI animatedTile">
                <NavLink to={"/who-am-i"} >Who Am I</NavLink>
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
