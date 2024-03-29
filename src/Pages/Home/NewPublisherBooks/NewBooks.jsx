import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const NewBooks = () => {
  const [newBooks, setNewBooks] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get(
        "https://mega-merket-project-server-site.vercel.app/newPublish/books"
      )
      .then((res) => setNewBooks(res?.data));
  }, [axiosPublic]);
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg p-5 h-fit">
      <div className="flex justify-between">
        <h2 className="text-3xl">নতুন প্রকাশিত বই</h2>
      </div>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <div className="">
            {newBooks?.slice(0, 5).map((book) => (
              <SwiperSlide className="mt-5" key={book}>
                <Link to={`/bookDetails/${book?._id}`}>
                  <div className="border">
                    <div className="relative w-full flex justify-center mb-4">
                      <img
                        className="w-full p-2 hover:opacity-90 transition-opacity duration-300"
                        src={book?.image}
                        alt=""
                      />
                      {book?.discount > 0 && (
                        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-2 py-1 rounded-full">
                          <h3>{book?.discount}% Off</h3>
                        </div>
                      )}
                    </div>
                    <p className="text-center">
                      {" "}
                      {book?.name.length > 20
                        ? `${book?.name.substring(0, 20)}...`
                        : book?.name}
                    </p>
                    <div className="flex justify-center items-center">
                      <img
                        className="w-24"
                        src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg"
                        alt=""
                      />
                      <span className="ml-2">({book?.rating})</span>
                    </div>
                    <p className="text-sm text-center text-[#33C24D] pb-3">
                      Product In Stock
                    </p>
                    <div className="flex items-center gap-3 mt-3 justify-center">
                      <p className="text-gray-500">
                        <span className="line-through text-sm md:text-lg">
                          TK{book?.price}
                        </span>
                      </p>
                      <p className="font-bold md:text-lg text-sm text-red-500">
                        TK.
                        {(
                          book?.price -
                          (book?.price * book?.discount) / 100
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NewBooks;
