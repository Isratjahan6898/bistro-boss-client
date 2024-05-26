import { RiDeleteBinFill } from "react-icons/ri";
import useMenu from "../../../hooks/useMenu";
import { MdSystemUpdateAlt } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItem = () => {
    const [menu, , refetch]= useMenu();
    const axiosSecure= useAxiosSecure();
    const handleDeleteItem=async (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res= await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if(res.data. deletedCount>0){
                    refetch()
                       Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
            
            }
          });
    }
    return (
        <div className="mt-[60px] mb-[60px]">
            <div className='text-center'>
                <p className='text-[#D99904] mb-[20px]'>---Hurry Up---</p>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[20px]' />
                <h1 className='font-bold text-3xl mb-[20px]'>MANAGE ALL ITEMS</h1>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[40px]' />
            </div>

            <div>

<div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead className=" bg-[#D1A054]">
<tr>
<th></th>
<th>Item Image</th>
<th>Item Name</th>
<th>Price</th>
<th>Action</th>
<th>Action</th>
</tr>
</thead>
<tbody>

{
  menu.map((item, index)=><tr key={item._ie}>
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
    <button className="btn btn-ghost btn-xs"><MdSystemUpdateAlt   className="text-3xl bg-[#D1A054] p-[4px]"/></button>
 </th>
    <th>
      <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-xs"><RiDeleteBinFill className="text-3xl text-red-800"></RiDeleteBinFill></button>
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

export default ManageItem;