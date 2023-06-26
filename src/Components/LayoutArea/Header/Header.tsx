import { useEffect } from "react";
import { DarkModeActionType, darkModeStore } from "../../../Redux/darkModeState";
import "./Header.css";

function Header(): JSX.Element {

    useEffect(() => {
        const darkInit = localStorage.getItem("dark")
        darkInit ? darkModeStore.dispatch({ type: DarkModeActionType.DarkMode, payload: true }) :
            darkModeStore.dispatch({ type: DarkModeActionType.LightMode, payload: false })
    }, [])

    function handleClick() {
        if (darkModeStore.getState().darkMode === false) {
            localStorage.setItem("dark", "true")
            darkModeStore.dispatch({ type: DarkModeActionType.DarkMode, payload: true })
        }
        else {
            localStorage.removeItem("dark")
            darkModeStore.dispatch({ type: DarkModeActionType.LightMode, payload: false })
        }
    }

    return (
        <div className="Header">
            <h2>Header....</h2>
            <button onClick={handleClick}>dark</button>
        </div>
    );
}

export default Header;
