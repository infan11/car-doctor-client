import About from "../../About/About";
import Banner from "../Banner";
import MoreServices from "../MoreServises/MoreServices";
import PopularProducts from "../PopularProducts.jsx/PopularProducts";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <MoreServices></MoreServices>
    <PopularProducts></PopularProducts>
     
        </div>
    );
};

export default Home;