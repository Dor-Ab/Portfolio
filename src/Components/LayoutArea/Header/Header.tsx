import { useEffect, useState } from "react";
import { DarkModeActionType, darkModeStore } from "../../../Redux/darkModeState";
import "./Header.css";

function Header(): JSX.Element {

    const [darkMode, setDarkMode] = useState<string>("Go Dark")

    useEffect(() => {
        const darkInit = localStorage.getItem("dark")

        if (darkInit) {
            darkModeStore.dispatch({ type: DarkModeActionType.DarkMode, payload: true })
            setDarkMode("Light It")
        }
        else {
            darkModeStore.dispatch({ type: DarkModeActionType.LightMode, payload: false })
            setDarkMode("Go Dark")
        }
    }, [])

    function handleClick() {
        if (darkModeStore.getState().darkMode === false) {
            localStorage.setItem("dark", "true")
            darkModeStore.dispatch({ type: DarkModeActionType.DarkMode, payload: true })
            setDarkMode("Light It")
        }
        else {
            localStorage.removeItem("dark")
            darkModeStore.dispatch({ type: DarkModeActionType.LightMode, payload: false })
            setDarkMode("Go Dark")
        }
    }

    return (
        <div className="Header">
            <h2>My CV</h2>
            <div className="darkModeContainer">
                <button onClick={handleClick}>{darkMode}</button>
            </div>
        </div>
    );
}

export default Header;
