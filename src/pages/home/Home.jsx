
import Banner from "../../components/Banner";
import TabCategories from "../../components/TabCategories";
import About from "./About";
import Review from "./Review";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <TabCategories></TabCategories>
            <About></About>
            <Review></Review>
        </div>
    );
};

export default Home;