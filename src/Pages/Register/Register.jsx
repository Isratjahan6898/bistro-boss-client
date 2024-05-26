import { Link, useNavigate } from "react-router-dom";

import loginImg from '../../assets/assets/others/authentication2.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Register = () => {
  const axiosPublic= useAxiosPublic()

    const{ user, setUser, createUser, updateUserProfile,googleSignIn}= useContext(AuthContext);
    console.log(updateUserProfile);
   
    const navigate = useNavigate()

    const handleRegister =async(e)=>{
      e.preventDefault();
      
      const form = e.target;
      const name = form.name.value;
      const photo= form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
       
      // console.log({name,photo,email,password});




      try{
        const userInfo={name, email}

        const result=await createUser (email,password)
        console.log(result);
        await updateUserProfile(name,photo)
        setUser({...user, photoURL:photo, displayName:name})

        axiosPublic.post('/user', userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user Added successfully');
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user create successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(location?.state? location.state :'/')
          }
        })


      }
      catch(error){
        console.log(error);
        

      }
  }

  const handleGoogleLogin =()=>{
    googleSignIn()
    .then(result=>{
      console.log(result.user);
      const userInfo={
        email:result.user?.email,
        name:result.user?.displayName

      }
      axiosPublic.post('/user', userInfo)
      .then(res=>{
        console.log(res.data);
        navigate(location?.state? location.state :'/')
      })
    })
  }

  

   
    return (
      <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

<div className="m-[60px]">
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center w-1/2 lg:text-left">
   <img src={loginImg} alt="" />
  </div>
  <div className="card shrink-0 w-1/2 max-w-sm p-[20px] shadow-2xl bg-base-100">
  <form onSubmit={handleRegister}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium bg-red-400 tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>

    <div className='text-center mb-[30px]'>
    <Link to='/login'>  <p className='text-[#D1A054] font-bold'>Already registered? Go to log in</p></Link>
      
      <p className='font-bold'>Or sign in with</p>
     
    </div>

    <div className='flex items-center justify-center mt-[20px] mb-[20px] gap-[16px]'>
        <button onClick={handleGoogleLogin}><FcGoogle className='text-3xl' /></button>
        <button><FaGithub className='text-3xl' /></button>
        </div>
  </div>
</div>
</div>
      </div>
      </>
    );
};

export default Register;