import { Outlet } from "react-router-dom";
import Navber from "../components/nav/Navber";


const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;