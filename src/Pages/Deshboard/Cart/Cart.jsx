import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {
    const[cart, refetch]= useCart();
    const totalPrice = cart.reduce((total, item)=> total+item.price,0)
    const axiosSecure = useAxiosSecure();
    const handleDelete=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
          axiosSecure.delete(`/cart/${id}`)
          .then(res=>{
           if(res.data.deletedCount>0){
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

           }
          })
        }
      });
    }
    return (
        <div>
            <div className="flex gap-[50px] justify-between mx-[30px] mt-[50px]">
                <h1 className="text-3xl">Item:{cart.length}</h1>
                <h1 className="text-3xl">TotalPrice:{totalPrice}</h1>
                <button className="btn bg-[#D1A054]">Pay</button>
            </div>.


            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054]">
      <tr>
        <th></th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index)=><tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {item.name}
              
            </td>
            <td>{item.price}</td>
            <th>
              <button 
              onClick={()=>handleDelete(item._id)}
              className="btn bg-[#D1A054] btn-xs">Delete</button>
            </th>
          </tr>)
      }
     
 
    </tbody>
   
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart; 