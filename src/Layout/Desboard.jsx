import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";
import { FaAlipay } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { LuMenuSquare } from "react-icons/lu";
import { FaBorderAll } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Desboard = () => {
    const[cart]= useCart();
    
    const [isAdmin]= useAdmin();
    console.log(isAdmin);
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                 <ul className="menu">
                    {
                        isAdmin?
                        
                        <>
                          <li className="mb-[16px]">
                    <NavLink to='/desboard/adminHome'> <IoHome className='text-2xl' />
                    Admin Home</NavLink>
                    </li>
                    <li className="mb-[16px]">
                    <NavLink to='/desboard/addItem'> <FaCalculator className='text-2xl' />
                    AddItems</NavLink>
                    </li>
                    <li className="mb-[16px]">
                    <NavLink to='/desboard/manageItem'> <FaAlipay className='text-2xl' />
                   Manage Items</NavLink>
                    </li>
                  <li>
                    <NavLink to='/desboard/manageBooking'> <FaCartShopping className='text-2xl' />
                    ManageBooking</NavLink>
                    </li>
                    <li className="mb-[16px]">
                    <NavLink to='/desboard/allUsers'> <MdOutlinePreview className='text-2xl' />
                    All Users</NavLink>
                    </li>

                        </>

                        :

                        <>
                          <li className="mb-[16px]">
                    <NavLink to='/desboard/userHome'> <IoHome className='text-2xl' />
                    User Home</NavLink>
                    </li>
                    <li className="mb-[16px]">
                    <NavLink to='/desboard/reservation'> <FaCalculator className='text-2xl' />
                    ReserVation</NavLink>
                    </li>
                    <li className="mb-[16px]">
                    <NavLink to='/desboard/payment'> <FaAlipay className='text-2xl' />
                   Payment History</NavLink>
                    </li>
                  <li>
                    <NavLink to='/desboard/cart'> <FaCartShopping className='text-2xl' />
                    My Cart{cart.length}</NavLink>
                    </li>
                    <li className="mb-[16px]">
                    <NavLink to='/desboard/review'> <MdOutlinePreview className='text-2xl' />
                    Add Review</NavLink>
                    </li>

                    <li className="mb-[16px]">
                    <NavLink to='/desboard/booking'> <TbBrandBooking className='text-2xl' />
                    My Booking</NavLink>
                    </li>
                        </>
                    }

               

                    <hr className="border-2"></hr>

                    
                    <li className="mb-[16px]">
                    <NavLink to='/'> <IoHome className='text-2xl' />
                    Home</NavLink>
                    </li>

                    <li className="mb-[16px]"><NavLink to='/menu'> <LuMenuSquare className="text-2xl" /> Our Menu</NavLink></li>


                     <li className="mb-[16px]"><NavLink to='/order/salad'> <FaBorderAll className="text-2xl"/>Our Order</NavLink></li>
                    

                    <li className="mb-[16px]">
                    <NavLink to='/'> <IoIosContacts  className='text-2xl' />
                    Contact</NavLink>
                    </li>
                 </ul>
            </div>

            <div className="flex-1">

                <Outlet></Outlet>
                </div>

        </div>
    );
};

export default Desboard;