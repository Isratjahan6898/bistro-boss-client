import { useForm } from "react-hook-form"
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosPublic= useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {
        register,
       reset,
        handleSubmit,
      } = useForm()
      const onSubmit =async (data) => {
        
        console.log(data)
        //upload img to imgbb and then get an url 
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });

        if(res.data.success){
          const menuItem ={
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
          }
          const menuRes = await axiosSecure.post('/menu', menuItem);
          console.log(menuRes.data);
          if(menuRes.data.insertedId){
            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is added to menu item`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
        console.log(res.data);
    
         
    
    
    } 
  


    return (
        <div className="mt-[60px] mb-[60px]">
             <div className='text-center'>
                <p className='text-[#D99904] mb-[20px]'>---WHATS NEW---</p>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[20px]' />
                <h1 className='font-bold text-3xl mb-[20px]'>ADD ITEMS</h1>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[40px]' />
            </div>

            <div className="bg-base-200 mx-[50px] p-[30px]">

            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
   

      <div className="form-control">
        <label className="label">
          <span className="label-text">Receipe Name</span>
        </label>
        <input type="text" name='name' placeholder="receipe name" {...register("name")} className="input input-bordered" required />
      </div>
      <div className="flex justify-between">
       <div className="form-control">
          <label className="label">
            <span className="label-text">category</span>
          </label>
          <select {...register("category")} className="select select-bordered w-[460px]" required>
  <option disabled selected>Category</option>
  <option>salad</option>
  <option>pizza</option>
  <option>soup</option>
  <option>dessert</option>
  <option>drink</option>
</select>
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" name='price' {...register("price")} placeholder="price" className="input input-bordered w-[460px]" required />
        </div>
       </div>


       <div className="form-control">
          <label className="label">
            <span className="label-text">Receipe Details</span>
          </label>
          <textarea placeholder="Receipe details" {...register("recipe")} className="textarea textarea-bordered textarea-lg w-full h-[200px]"  required></textarea>
        </div>
         <div className="form-control ">
         <input type="file" {...register("image")}  className="file-input w-full my-[20px] max-w-xs" required />
         </div>
          

        <div className="form-control mt-6">
          <button className="btn bg-[#BB8506]">Add Item <FaUtensilSpoon></FaUtensilSpoon></button>
        </div>
    </form>
            </div>
            
         
           </div>


        </div>
    );
};

export default AddItems;