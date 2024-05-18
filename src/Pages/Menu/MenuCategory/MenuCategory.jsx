import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import OfferCard from "../TodayOffer/OfferCard";


const MenuCategory = ({items, img, title}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-10 my-16">
                {
                    items.map(item=><OfferCard
                    
                    key={item._id}
                    item={item}
                    >

                    </OfferCard>)
                }

            </div>

             
          <div className="flex justify-center mt-[20px]">
          <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 my-4 text-black'>ORDER YOUR FAVOURITE FOOD</button></Link>
          </div>
            
        </div>
    );
};

export default MenuCategory;