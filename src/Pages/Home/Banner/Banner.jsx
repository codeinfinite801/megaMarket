// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='lg:h-[550px] w-full md:h-[400px] h-[200px]' src="https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=826&t=st=1707904123~exp=1707904723~hmac=ecbe58d8afcdd338f09a4f31a1f1abd684576ed7f8e99508a3cb103f654a6357" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='lg:h-[550px] w-full md:h-[400px] h-[200px]' src="https://i.postimg.cc/25mPMspz/Enjoy-Up-to.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='lg:h-[550px] w-full md:h-[400px] h-[200px]' src="https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201772.jpg?w=826&t=st=1707904242~exp=1707904842~hmac=40abf6b72639d86d48ef04b55ddbb2e14ed47a34bffa1254311988108aa79563" alt="" />
                    </SwiperSlide>

                    {/* <SwiperSlide>
                    <img src="https://i.postimg.cc/bJQ0WwnJ/DESKTOP3bea55e3-9bf8-4538-bc6f-438594a31ce8.webp" alt="" />
                </SwiperSlide> */}

                </Swiper>
            </div>
        </>
    );
};

export default Banner;





