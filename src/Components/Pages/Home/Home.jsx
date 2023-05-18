import Banner from "../Banner/Banner";
import Gellary from "./Gellary/Gellary";
import Tabs from "./Tabs/Tabs";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Gellary></Gellary>
            <Tabs></Tabs>
        </div>
    );
};

export default Home;