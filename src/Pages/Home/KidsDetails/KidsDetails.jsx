import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useBooks from "../../../Hooks/useBooks";


const KidsDetails = () => {
    const { id } = useParams();
    const [kid, setKid] = useState({})

    const { _id, image, category, brand, brand_logo, discount, isNew, name, rating, quantity, price, features,summary, country } = kid;
    const discountedPrice = (price - (price * discount) / 100).toFixed(2);
    // console.log(kid);
    const { kids, refetch } = useBooks({ category })

    useEffect(() => {
        fetch(`https://maga-market-server-eta.vercel.app/kidsZone/${id}`)
            .then(res => res.json())
            .then(data => setKid(data))
    },[])
    return (
        <div className="grid grid-cols-12 gap-14 mx-14">
        <div className="col-span-9">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex justify-between gap-8">
                    <div className="p-5 w-2/6 border shadow-md rounded-lg">
                        <h2 className="mb-2 text-right text-lg font-semibold"> একটু পড়ে দেখুন</h2>
                        <img className="w-full rounded-md" src={image} alt="" />
                    </div>
                    <div className="w-[60%]">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-md mt-1">By <span className="font-semibold text-blue-400">{brand}</span></p>
                        <p className="text-sm text-blue-400 mt-1">{category}</p>
                        <div className="flex items-center  text-gray-600 mt-2">
                            <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                            <span className="ml-2">({rating}) Ratings</span>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <p className="text-gray-500"><span className="line-through">TK{price}</span></p>
                            <p className="font-bold text-lg text-red-500">TK.{discountedPrice}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <img src="https://www.rokomari.com/static/200/images/svg/in-stock(mini).svg" alt="" />
                            <span className="text-sm">In Stock </span>
                            <span className="text-sm">
                                ( {quantity} Copies Available)
                            </span>
                        </div>
                        <p className="text-sm mt-2 italic">স্টক আউট হওয়ার আগেই অর্ডার করুন</p>
                        <div className="flex items-center gap-10 mt-4">
                            <button className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-600 hover:text-white transition duration-300">একটু পড়ে দেখুন </button>
                            <button className="flex items-center justify-center gap-4 bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition duration-300">
                                <FaShoppingCart></FaShoppingCart>
                                <span>Add To Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        {/* <div className="col-span-3">
            <div>
                {
                    kids?.slice(0, 5).map((kids, index) => {
                        return <div key={index}>
                            <Link to={`/kidsDetails/${kids?._id}`}>
                                <div className="flex mb-2">
                                    <div className="w-1/2 ">
                                        <img className="w-[70px] h-[100px]" src={kids?.image} alt="" />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h2 className=" text-sm font-semibold mb-2 mt-4">{kids?.name}</h2>
                                        <h3 className=" text-gray-600 text-sm">{kids?.brand}</h3>
                                        <p className=" flex items-center text-gray-600">
                                            <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                            <span>({kids?.rating})</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div> */}
        
    </div>
    );
};

export default KidsDetails;