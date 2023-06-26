import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import Home from "../../HomeArea/Home/Home";
import WhoAmI from "../../HomeArea/WhoAmI/WhoAmI";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/who-am-i" element={<WhoAmI />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
