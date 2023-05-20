import Banner from "../Banner/Banner";
import LatestBlog from "../LatestBlog/LatestBlog";
import ToyGallery from "../ToyGallery/ToyGallery";
import Tranding from "../Tranding/Tranding";
import Gellary from "./Gellary/Gellary";
import Tabs from "./Tabs/Tabs";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <Gellary></Gellary>
            <Tabs></Tabs>
            <Tranding></Tranding>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;