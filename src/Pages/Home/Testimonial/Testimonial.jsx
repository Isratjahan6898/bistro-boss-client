
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { IoMdGitCompare } from "react-icons/io";


const Testimonial = () => {
    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <div className='my-[100px] mx-[100px]'>
              <div className='text-center'>
                <p className='text-[#D99904] mb-[20px]'>---From 11:00am to 10:00pm---</p>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[20px]' />
                <h1 className='font-bold text-3xl mb-[20px]'>ORDER ONLINE</h1>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[40px]' />
            </div>
            
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=><SwiperSlide key={review._id}>

                <div className='flex flex-col items-center mx-24  my-16'>

                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    
    <IoMdGitCompare  className='mt-[20px] text-4xl'/>    

                    <p className='py-8'>{review.details}</p>
                    <h1 className='text-2xl font-bold text-[#CD9003]'>{review.name}</h1>

                </div>
            </SwiperSlide>)
        }
       
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;