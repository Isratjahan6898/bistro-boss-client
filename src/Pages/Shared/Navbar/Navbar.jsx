import { Link } from 'react-router-dom';

import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import useCart from '../../../hooks/useCart';

const Navbar = () => {

  const {user, logOut}= useContext(AuthContext);
  const [cart]= useCart();
  console.log(cart);
  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch()
  }
    const navOption = <>
       <li><Link to='/'>Home</Link></li>
       
       <li><a>Contact Us</a></li>

       <li><a>DeshBoard</a></li>
       <li><Link to='/menu'>Our Menu</Link></li>
       <li><Link to='/order/salad'>Our Shop</Link></li>

       <li><Link to='/desboard/cart'>
       <button className="btn">
       <FaCartShopping className='text-2xl' />
       <div className="">+{cart.length}</div>
       </button>
       
       </Link></li>
       {/* <img className='w-[40px] h-[40px]' src={logo} alt="" /> */}

      {
        user ? <>
               <button onClick={handleLogOut} className='mx-[10px]'>LogOut</button>
               <div title={user.displayName} className="w-10 rounded-full">
               <img src={user.photoURL}  alt="Tailwind"   className='rounded-full' />
            </div>
        </> :<>
         <Link to='/login'>   <button className='mx-[10px]'>Login</button></Link>
       
        
        </>
      }
    
    </>
    return (
        <div className=" "> 
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {/* <li><a>Item 1</a></li>
       
        <li><a>Item 3</a></li> */}

        {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BISTRO BOSS <br>
    </br>
    Restaurant
    </a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;