import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="my-5 bg-white">
            <div>
                <div className="flex items-center justify-between p-5">
                    <h1>Shop By Category</h1>
                    <button className="border text-blue-500 px-6 py-2 border-blue-300 rounded">View All</button>
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
                                    <SwiperSlide key={index}>
                                        <div>
                                            <img className='bg-gray-200 rounded-xl p-2 mx-auto' src={item?.image} alt={item?.name} />
                                            <h1 className="text-sm mt-5 text-center">{item?.category}</h1>
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

export default Category