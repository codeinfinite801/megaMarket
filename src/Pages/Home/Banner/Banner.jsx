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
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/Vk7R3PB8/Your-paragraph-text-1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/25mPMspz/Enjoy-Up-to.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/zX0GN5Dd/418592057-2618324061660390-6319980139185750532-n.jpg" alt="" />
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





