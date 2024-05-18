import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/assets/home/slide1.jpg'
import slide2 from '../../../assets/assets/home/slide2.jpg'
import slide3 from '../../../assets/assets/home/slide3.jpg'
import slide4 from '../../../assets/assets/home/slide4.jpg'
import slide5 from '../../../assets/assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';


const Category = () => {
    return (
        <div className='my-[100px] mx-[100px]'>
            <div className='text-center'>
                <p className='text-[#D99904] mb-[20px]'>---From 11:00am to 10:00pm---</p>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[20px]' />
                <h1 className='font-bold text-3xl mb-[20px]'>ORDER ONLINE</h1>
                <hr className='border-[2px] w-[300px] ml-[400px] mb-[40px]' />
            </div>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-3xl text-center -mt-12'>SALAD</h1>
        
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-3xl text-center -mt-12'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-3xl text-center -mt-12'>SOUP</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-3xl text-center -mt-12'>CAKE</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-3xl text-center -mt-12'>SALAD</h1>
        </SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Category;