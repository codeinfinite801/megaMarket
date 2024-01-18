import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
const SuperStore = () => {
    const categories = [
        {
            "image": "https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial7.png",
            "name": "Comforters, Quilts & Duvets"
        },
        {
            "image": "https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial2.png",
            "name": "Electric Kettle"
        },
        {
            "image": "https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial5.png",
            "name": "Room Heaters"
        },
        {
            "image": "https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial4.png",
            "name": "Shaving & Grooming"
        },
        {
            "image": "https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial3.png",
            "name": "Stationery"
        },
        {
            "image": "https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial2.png",
            "name": "Calculator"
        },
        {
            "image": "https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial7.png",
            "name": "Diary and Notebook"
        }
    ]


    return (
        <div className="my-5 rounded bg-white shadow-xl">
            <div>
                {/* Super store */}
                <div className="flex items-center justify-between p-5">
                    <h1>Super Store Product</h1>
                    <button className="border text-blue-500 px-6 py-2 border-blue-300 rounded">View All </button>
                </div>
                <div>
                    <Swiper
                        watchSlidesProgress={true}
                        modules={[Navigation]}
                        slidesPerView={4}

                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 5
                            },
                            1280: {
                                slidesPerView: 6
                            }
                        }}
                        className="mySwiper"
                    >
                        {
                            categories.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="py-6">
                                        <div className="mr-5">
                                            <img className='bg-gray-200 rounded-xl p-2 mx-auto' src={item?.image} alt={item?.name} />
                                            <h1 className="text-sm mt-5 text-center">{item?.name}</h1>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default SuperStore