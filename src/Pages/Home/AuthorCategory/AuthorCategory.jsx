import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
const AuthorCategory = () => {
    const categories = [
        {
            "image": "https://ds.rokomari.store/rokomari110/people/2222ed505a94_1.jpg",
            "name": "হুমায়ূন আহমেদ"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/ed4943e549d4_25.jpg",
            "name": "ইমদাদুল হক মিলন"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/6dcf2594df14_50.jpg",
            "name": "আনিসুল হক"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/1323bb4c3d84_93.jpg",
            "name": "মুহম্মদ জাফর ইকবাল"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/fb6c4210c5c4_124.JPG",
            "name": "আলী ইমাম"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/0ee263848dc4_163.jpg",
            "name": "হাসনাত আবদুল হাই"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/ee6cbc815d64_171.jpg",
            "name": "সুমন্ত আসলাম"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/1e7f33735024_318.jpg",
            "name": "সেলিনা হোসেন"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/8c00f2f53_340.jpg",
            "name" : "ড. তারেক শামসুর রেহমান"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/3101034fa054_846.jpg",
            "name" : "সুনীল গঙ্গোপাধ্যায় (নীললোহিত)"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/b3ab3aa8d394_2187.jpg",
            "name" : "আইজ্যাক আসিমভ"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/f27061e6a394_2210.jpg",
            "name" : "পাওলো কোয়েলহো"
        },
        {
            "image": "https://ds.rokomari.store/rokomari110/people/b60f5c1bd_2254.jpg",
            "name" : "পাওলো কোয়েলহো"
        }
    ]

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
                                            <img className='w-1/2 border rounded-full mx-auto' src={item?.image} alt={item?.name} />
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

export default AuthorCategory