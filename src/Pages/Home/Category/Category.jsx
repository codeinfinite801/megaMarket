import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://maga-market-server-eta.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="my-5 bg-white">
            <div>
                <div className="flex items-center justify-between p-5">
                    <h1>Shop By Category</h1>
                    <Link to={'/bookCategory'}>
                        <button className="border text-blue-500 px-6 py-2 border-blue-300 rounded">View All</button>
                    </Link>
                </div>
                {/* <div className="w-full">
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
                            <SwiperSlide key={index}>
                                <Link to={`/allBooks/${item?.category}`} className="block">
                                    <div>
                                        <img className='bg-gray-200 rounded-xl w-5/6 py-4 px-5 mx-auto' src={item?.image} alt={item?.name} />
                                        <h1 className="text-sm mt-5 text-center">{item?.category}</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev invisible lg:visible"></div>
                        <div className="swiper-button-next invisible lg:visible"></div>
                    </Swiper>
                </div> */}
                <div className="w-full lg:pl-4 lg:pr-2 py-4">
                    <div className="lg:grid md:grid items-center gap-5 grid-cols-12">
                        <div className="col-span-4 mx-2 mb-2">
                            {categories.slice(0, 1).map((item, index) => (
                                <div key={index} className="transition-transform duration-300 transform hover:scale-105">
                                    <Link to={`/allBooks/${item?.category}`} className="block">
                                        <div className="bg-gray-300 flex lg:flex-col flex-row-reverse items-end lg:items-center justify-center lg:h-[425px] md:h-72 rounded-lg">
                                            <img className='rounded-xl lg:w-5/6 md:1/2 py-5 lg:h-62 px-5 mx-auto' src={item?.image} alt={item?.name} />
                                            <h1 className="text-base md:text-sm mt-5 p-5">{item?.category}</h1>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-8 mx-2">
                            <div className="lg:grid w-full md:grid grid-cols-2 lg:gap-10 space-y-2 md:gap-5 rounded lg:m-2">
                                {categories.slice(1, 5).map((item, index) => (
                                    <div key={index} className="transition-transform duration-300 transform hover:scale-105">
                                        <Link to={`/allBooks/${item?.category}`} className="block">
                                            <div className="bg-gray-300 rounded-lg flex items-end">
                                                <h1 className="text-base md:text-sm mt-5 p-5">{item?.category}</h1>
                                                <img className='rounded-xl lg:w-3/6 md:w-1/2 py-5 lg:h-48 md:h-32 px-5 mx-auto' src={item?.image} alt={item?.name} />
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Category