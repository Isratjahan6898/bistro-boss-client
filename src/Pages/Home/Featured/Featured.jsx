
import featuredImg from '../../../assets/assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed my-[60px]'>

            <div className='text-center pt-[30px]'>
                <p className='text-[#D99904] mb-[20px]'>---Check it out---</p>
                <hr className='border-[2px] w-[300px] ml-[470px] mb-[20px]' />
                <h1 className='font-bold text-3xl text-white mb-[20px]'>FROM OUR MENU</h1>
                <hr className='border-[2px] w-[300px] ml-[470px] mb-[40px]' />
            </div>


            <div className="flex justify-center items-center gap-[20px] py-20 px-36">
                <div>
                          <img src={featuredImg} alt="" />
                </div>
                <div className='text-white '>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>where can i get some?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat ipsam at doloribus. Assumenda perspiciatis eaque dolorem suscipit rerum placeat distinctio, sequi molestias minus doloremque itaque provident facere et laborum?
                    </p>
                    <button className='btn btn-outline border-0 border-b-4 my-4 text-white'>Order Now</button>
                </div>

            </div>
            
        </div>
    );
};

export default Featured;