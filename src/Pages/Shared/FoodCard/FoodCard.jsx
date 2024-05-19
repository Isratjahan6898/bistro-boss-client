

const FoodCard = ({item}) => {
    const{image, name, price, recipe}= item;

    const handleAddtoCart = food=>{
      console.log(food);
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