import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const   AuthorCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/allbooks')
            .then(res => res.json())
            .then(data => {
                const uniqueAuthors = data.reduce((acc, curr) => {
                    if (!acc.some(item => item.author_name === curr.author_name)) {
                        acc.push(curr);
                    }
                    return acc;
                }, []);

                setCategories(uniqueAuthors);
            });
    }, []);

    return (
        <div className="my-5 bg-white">
            <div>
                <div className="flex items-center justify-between p-5">
                    <h1>Shop By Author</h1>
                    <button className="border text-blue-500 px-6 py-2 hover:bg-blue-600 hover:text-white duration-200 border-blue-300 rounded">View All</button>
                </div>
                <Swiper
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 }
                    }}
                    className="mySwiper"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={`/authorbooks/${item.author_name}`} className="block">
                                <div>
                                    <img className='w-1/2 lg:h-24 border rounded-full mx-auto' src={item.author_image} alt={item?.author_name} />
                                    <h1 className="text-sm mt-5 text-center">{item?.author_name}</h1>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AuthorCategory;
