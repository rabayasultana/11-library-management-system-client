import { useLoaderData } from "react-router-dom/dist";
import Banner from "../../components/Banner";
import TabCategories from "../../components/TabCategories";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TabCategories categories={categories}></TabCategories>
            <Footer></Footer>
        </div>
    );
};

export default Home;