import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
const BooksCategory = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://mega-merket-project-server-site.vercel.app/oneBooksPerCategory")
      .then((res) => setAllBooks(res.data));
  }, []);
  const handleAllBooks =(category)=>{
    console.log(category)
  }
//   console.log(allBooks);
  return (
    <div className="max-w-6xl mx-auto my-5 bg-white shadow-lg p-5 h-fit">
      <div className="flex justify-between">
        <h2 className="text-3xl">Shop By Category</h2>
        <button className="btn btn-outline text-blue-400">
          View All <IoIosArrowForward className="text-2xl" />{" "}
        </button>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {allBooks?.map((book) => (
            <SwiperSlide className="mt-5" key={book._id} onClick={()=>handleAllBooks(book?.category)}>
                <div className="p-5 border">
                    <img className="h-40" src={book?.image} alt="" />
                    <h2>{book?.category}</h2>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksCategory;
