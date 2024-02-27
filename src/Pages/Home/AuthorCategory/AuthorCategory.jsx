import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AuthorCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allbooks')
            .then(res => res.json())
            .then(data => {
                const uniqueAuthors = data.reduce((acc, curr) => {
                    if (!acc.some(item => item.author_name === curr.author_name)) {
                        acc.push(curr);
                    }
                    return acc;
                }, []);

                setCategories(uniqueAuthors);
            })
    }, []);


    return (
        <div className="my-5 bg-white">
            <div>
                <div className="flex items-center justify-between p-5">
                    <h1>Shop By Author</h1>
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
                        {
                            categories.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link key={index} to={`/authorbooks/${item?.author_name}`} className="block"><></>
                                            <div>
                                                <img className='w-1/2 lg:h-24 border rounded-full mx-auto' src={item?.author_image} alt={item?.author_name} />
                                                <h1 className="text-sm mt-5 text-center">{item?.author_name}</h1>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                );
                            })
                        }
                        <div className="swiper-button-prev invisible lg:visible"></div>
                        <div className="swiper-button-next invisible lg:visible"></div>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default AuthorCategory