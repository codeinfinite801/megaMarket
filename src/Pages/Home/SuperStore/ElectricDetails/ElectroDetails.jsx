import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";


const ElectroDetails = () => {
    const [imageIn, setIndex] = useState(0)
    const CallAxios = useAxiosSecure()
    const [item, setItem] = useState({})
    const { id } = useParams();
    const { features, model, isNew, brand, country, color, warranty, discount, rating, quantity, price, main_category, category, brand_logo, name, image, _id } = item

    const img = image?.length > 0 ? image[imageIn] : '';


    const discountedPrice = (price - (price * discount) / 100).toFixed(2);
    const productData = { features, model, isNew, country, color, warranty, discount, rating, quantity, price, main_category, category, brand_logo, name, image, productId: _id }
    useEffect(() => {

        CallAxios.get(`allElectronics/${id}`)
            .then(item => setItem(item?.data))
    }, [CallAxios,id])
    if (!item) return <h1>Loading ....</h1>
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
    const handleIndex = (i) => {
        setIndex(i)
    }
    return (
        <div>
            <div className="grid grid-cols-12 gap-14 mx-14">
                <div className="col-span-10">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="flex justify-between gap-8">
                            <div className="p-5 w-3/6 border shadow-md rounded-lg">
                                <div className="flex flex-col">
                                    <div className="w-full">
                                        <img className="w-full h-96 rounded-md" src={img} alt="" />
                                    </div>
                                    <div className="flex items-center border-t-2 pt-2 justify-evenly my-5 gap-4">
                                        {
                                            image?.map((item, index) => {
                                                return (
                                                    <img
                                                        onMouseEnter={() => handleIndex(index)}
                                                        className="w-14"
                                                        key={index}
                                                        src={item}
                                                    />
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-[60%]">
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <p className="text-md my-2">Brand : <span className="font-semibold text-blue-400">{brand}</span></p>
                                <p className="text-sm  text-blue-400 my-2">Category :  {category}</p>
                                <div className="flex items-center  text-gray-600 my-2">
                                    <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                    <span className="ml-2">({rating}) Ratings</span>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <p className="text-gray-500"><span className="line-through">TK{price}</span></p>
                                    <p className="font-bold text-lg text-red-500">TK.{discountedPrice}</p>
                                </div>
                                <div>
                                    <div className="flex gap-10 my-8">
                                        <h1 className="text-gray-600">Highlights :  </h1>
                                        <ul className="list-disc">
                                            <li><span className="text-gray-600">Warranty : </span> <span >{warranty}</span></li>
                                            <li><span className="text-gray-600">Color : </span> <span >{color}</span></li>
                                            <li><span className="text-gray-600">Model : </span> <span >{model}</span></li>
                                        </ul>
                                    </div>
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
            <div className="mx-14 my-5">
                <h1>Product Summary & Specification</h1>
                <div className="my-4 border-y-2 py-4 font-semibold">
                    <h1 className="my-2">Summary :</h1>
                    <p>{features}</p>
                </div>
                <div className="my-4">
                    <h1 className="my-2 font-semibold">Specification:</h1>
                    <div>
                        <div className="flex flex-col gap-5 justify-evenly">
                            <div className="flex gap-10 mx-4 w-6/6 px-3 py-1 rounded items-center">
                                <h1 className="font-bold">Title</h1>
                                <p className="text-right">{name}</p>
                            </div>
                            <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                <h1 className="font-bold">Quantity</h1>
                                <p className="text-right">{quantity}</p>
                            </div>
                            <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                <h1 className="font-bold">Warranty</h1>
                                <p className="text-right">{warranty}</p>
                            </div>
                            <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                <h1 className="font-bold">Color</h1>
                                <p className="text-right">{color}</p>
                            </div>
                            <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                <h1 className="font-bold">Model</h1>
                                <p className="text-right">{model}</p>
                            </div>
                            <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                <h1 className="font-bold">Price</h1>
                                <p className="text-right">{price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectroDetails;