import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SuperStore = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/superstore')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="my-5 rounded bg-white shadow-xl">
            <div>
                {/* Super store */}
                <div className="flex items-center justify-between p-5">
                    <h1>Super Store Product</h1>
                    <button className="border text-blue-500 px-6 py-2 border-blue-300 rounded">View All </button>
                </div>
                <div className="mx-2">
                    <Swiper
                        watchSlidesProgress={true}
                        modules={[Navigation]}
                        slidesPerView={4}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 3
                            },
                            640: {
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 5
                            },
                            1280: {
                                slidesPerView: 6
                            }
                        }}
                        className="mySwiper"
                    >
                        {categories.map((item, index) => (
                            <SwiperSlide key={index} className="py-6">
                                <Link to={`/superstore/${item?.name}`} className="block">
                                    <div className="mr-5">
                                        <img className='bg-gray-200 rounded-xl p-2 mx-auto' src={item?.image} alt={item?.name} />
                                        <h1 className="text-sm mt-5 text-center">{item?.name}</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev invisible lg:visible"></div>
                        <div className="swiper-button-next invisible lg:visible"></div>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default SuperStore