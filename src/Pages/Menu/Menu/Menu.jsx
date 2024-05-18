import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import home from "../../../assets/assets/home/banner.jpg"
import TodayOffer from "../TodayOffer/TodayOffer";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/assets/menu/dessert-bg.jpeg"
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/assets/menu/salad-bg.jpg'
import soupImg from "../../../assets/assets/menu/soup-bg.jpg"



const Menu = () => {
    const [menu] =useMenu();
    const offered = menu.filter(item=>item.category==='offered')
    const dessert = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const salad = menu.filter(item=>item.category==='salad')
    const soup= menu.filter(item=>item.category==='soup')
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={home} title='our Menu'></Cover>
            <TodayOffer></TodayOffer>

            <MenuCategory items={offered} ></MenuCategory>
            <MenuCategory items={dessert} title='dessert' img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title='pizza' img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>
            
            
        </div>
    );
};

export default Menu;