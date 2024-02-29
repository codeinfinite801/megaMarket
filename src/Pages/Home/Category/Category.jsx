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
                <div className="w-full pl-4 pr-2">
                    <div className="grid items-center gap-5 grid-cols-12">
                        <div className="col-span-4">
                            {categories.slice(0, 1).map((item, index) => (
                                <div key={index} className="transition-transform duration-300 transform hover:scale-105">
                                    <Link to={`/allBooks/${item?.category}`} className="block">
                                        <div className="bg-gray-300 flex flex-col items-center justify-center h-[425px] rounded-lg">
                                            <img className='rounded-xl w-5/6 py-5 h-62 px-5 mx-auto' src={item?.image} alt={item?.name} />
                                            <h1 className="text-base mt-5 p-5">{item?.category}</h1>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-8">
                            <div className="grid grid-cols-2 gap-10 rounded m-2">
                                {categories.slice(1, 5).map((item, index) => (
                                    <div key={index} className="transition-transform duration-300 transform hover:scale-105">
                                        <Link to={`/allBooks/${item?.category}`} className="block">
                                            <div className="bg-gray-300 rounded-lg flex items-end">
                                                <h1 className="text-base mt-5 p-5">{item?.category}</h1>
                                                <img className='rounded-xl w-3/6 py-5 h-48 px-5 mx-auto' src={item?.image} alt={item?.name} />
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