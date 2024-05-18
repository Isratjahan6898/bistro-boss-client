

const MenuCard = ({item}) => {
    console.log(item);
    const{image, name, price, recipe}= item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: ' 0 200px 200px 200px'}} src={image} alt="" className="w-[100px]" />
            <div>
               <h3 className="uppercase">{name}..............</h3> 
               <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
            
        </div>
    );
};

export default MenuCard;