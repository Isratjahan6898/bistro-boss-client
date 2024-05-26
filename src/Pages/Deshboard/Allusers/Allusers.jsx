import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Allusers = () => {
    const axiosSecure= useAxiosSecure();
    
    const {data: user =[], refetch}= useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    }) 

    const handleMakeAdmin= person=>{
         axiosSecure.patch(`/user/admin/${person._id}`)
         .then(res=>{
          console.log(res.data);
          if(res.data.modifiedCount >0){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${person.name} is now admin`,
              showConfirmButton: false,
              timer: 1500
            });
          }
         })
    }

    const handleDeleteUser = person=>{

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
             
              axiosSecure.delete(`/user/${person._id}`)
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
            <div className="flex justify-evenly my-4">
                    <h1 className="text-3xl">All Users</h1>
                    <h1 className="text-3xl">Total Users:{user.length}</h1>
                </div>

                <div>

                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=" bg-[#D1A054]">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
     {
        user.map((person, index)=> <tr key={person._id}>
            <th>{index+1}</th>
            <td>{person.name}</td>
            <td>{person.email}</td>
          {
            person.role === 'admin'? 'admin':<td><button
            onClick={()=>handleMakeAdmin(person)}
            
            ><FaUsers className="text-3xl bg-[#D1A054] p-[6px] rounded-lg"></FaUsers></button></td>
          }
            <td><button 
            onClick={()=>handleDeleteUser(person)}
            ><RiDeleteBinFill className="text-3xl text-red-800"></RiDeleteBinFill></button></td>
          </tr>)
     }
  
    </tbody>
  </table>
</div>
                    </div>
        </div>
    );
};

export default Allusers;