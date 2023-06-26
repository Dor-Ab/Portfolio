import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import lightBg from "../../../Assets/Images/light-bg.jpg"
import darkBg from "../../../Assets/Images/dark-bg.jpg"
import "./Layout.css";
import { useEffect, useState } from "react";
import { darkModeStore } from "../../../Redux/darkModeState";

function Layout(): JSX.Element {

    useEffect(() => {
        const isDark = localStorage.getItem("dark")
        if (isDark) {
            setBg(darkBg)
            setColor("bisque")
        }
        else {
            setBg(lightBg)
            setColor("black")
        }

        const unsubscribe = darkModeStore.subscribe(() => {
            const isDark = localStorage.getItem("dark")
            if (isDark) {
                setBg(darkBg)
                setColor("bisque")
            }
            else {
                setBg(lightBg)
                setColor("black")
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const [bg, setBg] = useState<string>(lightBg)
    const [color, setColor] = useState<string>("black")

    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main style={{ backgroundImage: `url(${bg})`, color: color }}>
                <Routing />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
