import Cover from "../../Shared/Cover/Cover";
import orderImg from '../../../assets/assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
  const categories= ['salad', 'pizza', 'soup','dessert', 'drinks']
  const {category}= useParams();
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu]= useMenu();
   
    const dessert = menu.filter(item=> item.category === 'dessert')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const salad = menu.filter(item=> item.category === 'salad')
    const soup = menu.filter(item=> item.category === 'soup')
    const drink = menu.filter(item=> item.category === 'drinks')
    return (
        <div className="">

          <Helmet>
            <title>Bistro Boss | Order Food</title>
          </Helmet>
            <Cover img={orderImg} title='Our Order'></Cover>

           <div className="flex items-center justify-center my-[60px]">
           <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
   <div className="flex items-center justify-center">
   <TabList>
        <Tab>Salad</Tab>
        <Tab>pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
   </div>
      <TabPanel>
        <div className="grid grid-cols-3 gap-[20px] mx-[100px]">
        {
          salad.map(item=><FoodCard
           key={item._id}
           item={item}
          ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-3 gap-[20px] mx-[100px]">
        {
         pizza.map(item=><FoodCard
           key={item._id}
           item={item}
          ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-3 gap-[20px] mx-[100px]">
        {
          soup.map(item=><FoodCard
           key={item._id}
           item={item}
          ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-3 gap-[20px] mx-[100px]">
        {
         dessert.map(item=><FoodCard
           key={item._id}
           item={item}
          ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>

      <div className="grid grid-cols-3 gap-[20px] mx-[100px]">
        {
         drink.map(item=><FoodCard
           key={item._id}
           item={item}
          ></FoodCard>)
        }
        </div>
      </TabPanel>
    </Tabs>
           </div>
  
            
        </div>
    );
};

export default Order;