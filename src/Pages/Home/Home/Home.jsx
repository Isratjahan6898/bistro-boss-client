import Banner from "../Banner/Banner";
import Boos from "../Boos/Boos";
import Call from "../Call/Call";
import Category from "../Category/Category";
import ChefRecomonded from "../ChefRecomonded/ChefRecomonded";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <Boos></Boos>
           <PopularMenu></PopularMenu>
           <Call></Call>
           <ChefRecomonded></ChefRecomonded>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;