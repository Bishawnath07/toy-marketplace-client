import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBer from "../Shared/NavBer/NavBer";

const Main = () => {
    return (
        <div className="">
             <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;