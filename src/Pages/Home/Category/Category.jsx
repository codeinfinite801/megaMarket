import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useGetCategoryQuery } from "../../../redux/api/api";

const Category = () => {
  const { data: categories } = useGetCategoryQuery();
  return (
    <div className="my-5 bg-white">
      <div>
        <div className="flex items-center justify-between p-5">
          <h1>Shop By Category</h1>
          <Link to={"/bookCategory"}>
            <button className="border text-blue-500 px-6 py-2 border-blue-300 rounded">
              View All
            </button>
          </Link>
        </div>
        <div className="w-full">
          <Swiper
            watchSlidesProgress={true}
            modules={[Navigation]}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper"
          >
            {categories?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={`/allBooks/${item?.category}`} className="block">
                  <div>
                    <img
                      className="bg-gray-200 rounded-xl w-5/6 py-4 px-5 mx-auto"
                      src={item?.image}
                      alt={item?.name}
                    />
                    <h1 className="text-sm mt-5 text-center">
                      {item?.category}
                    </h1>
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

export default Category;
