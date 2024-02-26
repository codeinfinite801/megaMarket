// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const KidsProduct = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/kidsCategory')
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
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 px-4">
                        {
                            categories.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link to={`/allkids/${item?.category}`}>
                                            <div>
                                                <img className='bg-gray-200 w-[95%]  lg:h-[170px] md:h-[195px] h-[150px] rounded-xl p-2' src={item?.image} alt={item?.name} />
                                                <h1 className="text-sm mt-5 mb-2 text-center">{item?.category}</h1>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* <Swiper
                    watchSlidesProgress={true}
                    modules={[Navigation]}
                    slidesPerView={2}

                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 6
                        }
                    }}
                    className="mySwiper"
                >
                   
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper> */}

                </div>
            </div>
        </div>
    );
};

export default KidsProduct;