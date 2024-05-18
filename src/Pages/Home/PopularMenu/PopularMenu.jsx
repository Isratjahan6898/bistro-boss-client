
import useMenu from "../../../hooks/useMenu";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const PopularMenu = () => {
       const [menu]= useMenu()
       const popular = menu.filter(item=> item.category === 'popular')
    return (
        <div className='my-[100px] mx-[100px]'>
             <div className='text-center'>
                <p className='text-[#D99904] mb-[20px]'>---Check it out---</p>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[20px]' />
                <h1 className='font-bold text-3xl mb-[20px]'>FROM OUR MENU</h1>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[40px]' />
            </div>
        
            <div className="grid grid-cols-2 gap-4">
                {
                  popular.map(item=><MenuCard
                  key={item._id}
                  item={item}

                  ></MenuCard>)  
                }
            </div>
          <div className="flex justify-center mt-[20px]">
          <button className='btn btn-outline border-0 border-b-4 my-4 text-black'>View All Menu</button>
          </div>
        </div>
    );
};

export default PopularMenu;