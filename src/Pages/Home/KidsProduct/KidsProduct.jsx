import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const KidsProduct = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://maga-market-server-eta.vercel.app/kidsCategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="my-5 bg-white">
        <div>
            <div className="flex items-center justify-between p-5">
                <h1>Explore Our Kids' Products</h1>
                
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
                   {/* <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 px-4"> */}
                   {
                        categories.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link to={`/allkids/${item?.category}`}>
                                        <div>
                                            <img className='bg-gray-200 w-[170px] h-[150px] rounded-xl p-2' src={item?.image} alt={item?.name} />
                                            <h1 className="text-sm mt-5 mb-2 text-center">{item?.category}</h1>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        })
                    }
                   {/* </div> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>

            </div>
        </div>
    </div>
    );
};

export default KidsProduct;