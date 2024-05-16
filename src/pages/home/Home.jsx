import Banner from "../../components/Banner";
import TabCategories from "../../components/TabCategories";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TabCategories></TabCategories>
            <Footer></Footer>
        </div>
    );
};

export default Home;