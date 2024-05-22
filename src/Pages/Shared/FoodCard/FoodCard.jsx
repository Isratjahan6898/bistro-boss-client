import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const FoodCard = ({item}) => {
    const{image, name, price, recipe, _id}= item;
    const{user}= useAuth();
    console.log(user);
    const[, refetch]=useCart();
    const navigate = useNavigate()
    const location= useLocation();
    const axiosSecure= useAxiosSecure();

    const handleAddtoCart = food=>{
      console.log(food);
      if(user.email){
        // todo something
        const cartItem ={
          menuId: _id,
          email:user.email,
          name,
          image,
          price
        }

     axiosSecure.post('/cart', cartItem)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:`${name} is added successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
      }
      else{
        Swal.fire({
          title: "you are not logged in",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login !"
        }).then((result) => {
          if (result.isConfirmed) {
        //  goto login page
        navigate('/login', {state:{from:location}})
          }
        });
      }
    }
    return (
        <div>
            <div className="card w-[350px] h-[500px] bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
    <button
    onClick={()=> handleAddtoCart(item)}
    
    className='btn btn-outline border-0 border-b-4 my-4 text-[#BB8506]'>add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;