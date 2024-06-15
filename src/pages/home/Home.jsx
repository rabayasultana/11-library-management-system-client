import { useLoaderData } from "react-router-dom/dist";
import Banner from "../../components/Banner";
import TabCategories from "../../components/TabCategories";

const Home = () => {
    // const categories = useLoaderData()
    // console.log(categories)
    return (
        <div>
            <Banner></Banner>
            <TabCategories></TabCategories>
        </div>
    );
};

export default Home;