import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";


const ElectroDetails = () => {
    const CallAxios = useAxiosSecure()
    const [item, setItem] = useState({})
    const { id } = useParams();
    const { features, model, isNew, brand, country, color, warranty, discount, rating, quantity, price, main_category, category, brand_logo, name, image, _id } = item
    const discountedPrice = (price - (price * discount) / 100).toFixed(2);
    const productData = { features, model, isNew, country, color, warranty, discount, rating, quantity, price, main_category, category, brand_logo, name, image, productId: _id }
    useEffect(() => {

        CallAxios.get(`allElectronics/${id}`)
            .then(item => setItem(item?.data))
    }, [])

    const addToCart = (id) => {
        console.log(id);
        CallAxios.post(`/addProducts/${_id}`, productData)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    return Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Book Added to Cart Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <div className="grid grid-cols-12 gap-14 mx-14">
                <div className="col-span-9">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="flex items-center justify-between gap-8">
                            <div className="p-5 w-2/6 border shadow-md rounded-lg">
                                <h2 className="mb-2 text-right text-lg font-semibold"> একটু পড়ে দেখুন</h2>
                                <img className="w-full rounded-md" src={image} alt="" />
                            </div>
                            <div className="w-[60%]">
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <p className="text-md mt-1">By <span className="font-semibold text-blue-400">{brand}</span></p>
                                <p className="text-sm text-gray-600 text-blue-400 mt-1">{category}</p>
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
                                    <button className="flex items-center justify-center gap-4 bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition duration-300">
                                        <FaShoppingCart></FaShoppingCart>
                                        <button onClick={() => addToCart(_id)}>Add To Cart</button>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ElectroDetails;