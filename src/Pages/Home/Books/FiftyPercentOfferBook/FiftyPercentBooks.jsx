import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const FiftyPercentBooks = () => {
  const [fiftyPercentBook, setFiftyPercentBook] = useState([]);

  //   some id which item are 50% discount
  const disCountIds = [
    "65def5db1f84c73804d2c8a5",
    "65def5db1f84c73804d2c8a8",
    "65def5db1f84c73804d2c8b6",
    "65def5db1f84c73804d2c8b5",
    "65def5db1f84c73804d2c8e9",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://mega-merket-project-server-site.vercel.app/allBooks"
      );
      const jsonData = response?.data;
      const filteredData = jsonData.filter((item) =>
        disCountIds.includes(item._id)
      );
      setFiftyPercentBook(filteredData);
    };
    fetchData();
  }, [disCountIds]);
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg p-5 h-fit my-5">
      <div className="flex justify-between md:flex-row flex-col gap-5">
        <h2 className="text-3xl">
          সকল বইয়ে{" "}
          <span className="text-red-500 text-4xl align-super">Up To 50% </span>{" "}
          ছাড়
        </h2>
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
            {fiftyPercentBook?.slice(0, 5).map((book) => (
              <SwiperSlide className="mt-5" key={book._id}>
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
                        <span className="line-through text-sm md:text-normal">
                          TK{book?.price}
                        </span>
                      </p>
                      <p className="font-bold text-sm md:text-lg text-red-500">
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

export default FiftyPercentBooks;
