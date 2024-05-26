import { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const Login = () => {
  
    const [desabled, setDesabled]= useState(true);
    const{signIn, user, googleSignIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location= useLocation();
    const from = location.state?.from?.pathname || '/';
    const axiosPublic= useAxiosPublic()
   

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: "User Login successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });

              navigate(from, {replace:true});
        })

        .catch(error=>{
            console.error(error)
        })
    }

    const handleValidateCaptcha = (e)=>{
           
          const user_captcha_value  = e.target.value;
        
          if(validateCaptcha(user_captcha_value)){
            setDesabled(false)
          }
          else{
            setDesabled(true)
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
            <title>Bistro Boss | Login</title>
        </Helmet>
        <div className="m-[60px]">
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
     <img src={loginImg} alt="" />
    </div>
    <div  className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        
        </div>

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="type the text above" className="input input-bordered" required />
          {/* <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>validate</button> */}
        
        </div>
        <div className="form-control mt-6">
          <button disabled={desabled} className="btn bg-[#D1A054B3]">Login</button>
        </div>
      </form>

      <div className='text-center mb-[30px]'>
        <Link to='/register'><p className='text-[#D1A054] font-bold'>New here? Create a New Account</p></Link>
       
        <p className='font-bold'>Or sign in with</p>
        <div className='flex items-center justify-center mt-[20px] gap-[16px]'>
        <button onClick={handleGoogleLogin}><FcGoogle className='text-3xl' /></button>
        <button><FaGithub className='text-3xl' /></button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        
        </>
    );
};

export default Login;