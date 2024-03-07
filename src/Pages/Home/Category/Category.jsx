import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://maga-market-server-eta.vercel.app/category')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <>
      <div className="my-5 bg-white">
        <div>
          <div className="flex items-center justify-between p-5">
            <h1>Shop By Category</h1>
            <Link to={'/bookCategory'}>
              <button className="border text-blue-500 px-6 py-2 hover:bg-blue-600 hover:text-white duration-200 border-blue-300 rounded">View All</button>
            </Link>
          </div>
          <div className="w-full lg:pl-4 lg:pr-2 py-4">
            <div className="lg:grid md:grid items-center lg:gap-5 grid-cols-12">
              <div className="col-span-4 mx-2 mb-2">
                {categories.slice(0, 1).map((item, index) => (
                  <div key={index} className="transition-transform duration-300 transform hover:scale-105">
                    <Link to={`/allBooks/${item?.category}`} className="block">
                      <div className="bg-[#cc00ff21] flex flex-row-reverse md:items-center items-end lg:items-center justify-center lg:h-[420px] md:h-[255px] rounded-lg">
                        <img className='rounded-xl lg:w-4/6 md:w-1/2  py-5 pr-2 lg:h-62 lg:px-5 mx-auto' src={item?.image} alt={item?.name} />
                        <h1 className="text-base md:text-sm flex-1 mt-5 p-2">{item?.category}</h1>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="col-span-8 mx-2">
                <div className="lg:grid w-full md:grid grid-cols-2 lg:gap-10 md:gap-2 rounded lg:m-2">
                  {categories.slice(1, 5).map((item, index) => (
                    <div key={index} className="transition-transform lg:mb-0 md:mb-0 mb-2 duration-300 transform hover:scale-105">
                      <Link to={`/allBooks/${item?.category}`} className="block ">
                        <div className="bg-[#cc00ff21] rounded-lg  flex items-end">
                          <h1 className="text-base flex-1 md:text-sm mt-5 lg:p-5 p-2">{item?.category}</h1>
                          <img className='rounded-xl lg:w-3/6 md:w-1/2 py-5 lg:h-48 md:h-32 px-2 lg:px-5 mx-auto' src={item?.image} alt={item?.name} />
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
    </>
  );
};

export default Category;
