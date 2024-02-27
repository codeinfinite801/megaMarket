import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import useKids from "../../../Hooks/useKids";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";


const KidsDetails = () => {
    const { id } = useParams();
    const [kid, setKid] = useState({})
    const [activeTab, setActiveTab] = useState("tab1")
    const [imageIn, setIndex] = useState(0)
    const { user } = useContext(AuthContext);
    // const { user } = useContext(AuthContext)
    const handleTab = (tab) => {
        setActiveTab(tab)
    }
    const navigate = useNavigate();

    const { _id, image, category, brand, brand_logo, discount, isNew, name, rating, quantity, price, features, summary, volume, age, country, product_code, brand_details } = kid;
    const discountedPrice = parseFloat((price - (price * discount) / 100).toFixed(2))
    const productData = { productId: _id, email: user?.email, image, category, brand, brand_logo, discount, isNew, name, rating, quantity, price, features, summary, volume, age, country, product_code, brand_details, count: 1, priceWithDiscount: discountedPrice, discountedPrice: discountedPrice }

    const img = image?.length > 0 ? image[imageIn] : '';
    const { data } = useKids({ category })
    // console.log(category);
    const CallAxios = useAxiosSecure()
    // console.log(data)
    useEffect(() => {
        fetch(`http://localhost:5000/kidsZone/${id}`)
            .then(res => res.json())
            .then(data => setKid(data))
    }, [])

    const handleIndex = (i) => {
        setIndex(i)
    }

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

    const handleLogin = () => {
        navigate('/signIn')
    }
    return (
        <div className="md:grid grid-cols-12 gap-14 md:mx-14 mx-4">
            <div className="lg:col-span-9 md:col-span-12">
                <div className="max-w-[1000px] mx-auto">
                    <div className="md:flex justify-between gap-8">
                        <div className="p-5 md:w-3/6 border shadow-md rounded-lg">
                            <div className="flex flex-col">
                                <div className="w-full">
                                    <img className="w-full rounded-md" src={img} alt="" />
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

                        <div className="md:w-[60%]">
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
                            <div className="flex items-center md:justify-normal justify-between md:gap-10 gap-3 mt-4">
                                {
                                    user && user?.email ? <button className="flex items-center justify-center gap-1 md:gap-4 bg-yellow-500 text-[10px] md:text-[16px] text-white md:px-6 md:py-3 py-2 px-2 rounded hover:bg-yellow-600 transition duration-300">
                                        <FaShoppingCart></FaShoppingCart>
                                        <button onClick={() => addToCart(_id)}>Add To Cart</button>
                                    </button> : <button className="flex items-center justify-center gap-1 md:gap-4 bg-yellow-500 text-[10px] md:text-[16px] text-white md:px-6 md:py-3 py-2 px-2 rounded hover:bg-yellow-600 transition duration-300">
                                        <FaShoppingCart></FaShoppingCart>
                                        <button onClick={handleLogin}>Add To Cart</button>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product details */}
                <div className=" mt-12">
                    <h1>Product Specification & Summary</h1>
                    <div className="my-3">
                        <div className="flex items-center md:gap-10 gap-1">
                            <button onClick={() => handleTab("tab1")} className={activeTab === "tab1" ? "btn border btn-sm md:btn-md  border-green-600" : 'btn md:btn-md btn-sm'}>Summery</button>
                            <button onClick={() => handleTab("tab2")} className={activeTab === "tab2" ? "btn border btn-sm md:btn-md  border-green-600" : 'btn md:btn-md btn-sm'}>Specifications</button>
                            <button onClick={() => handleTab("tab3")} className={activeTab === "tab3" ? "btn border  btn-sm md:btn-md border-green-600" : 'btn md:btn-md btn-sm'}>Brand</button>
                        </div>
                        <div>
                            {
                                activeTab === "tab3" && <div>
                                    <div className="md:flex items-center md:gap-10 gap-5">
                                        <img className="w-[150px] h-[150px] rounded-full mt-5" src={brand_logo} alt="brand logo" />
                                        <div className="mt-10">
                                            <h1 className="font-bold text-2xl mb-5">{brand}</h1>
                                            <p>{brand_details}</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {

                                activeTab === "tab2" && <div className="my-8">


                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                            <tbody>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Title
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {name}
                                                    </td>

                                                </tr>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Category
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {category}
                                                    </td>

                                                </tr>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Brand
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {brand}
                                                    </td>

                                                </tr>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Country
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {country}
                                                    </td>

                                                </tr>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Volume
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {volume}
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Age
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {age}
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Feature
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {features}
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                        Product Code
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {product_code}
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                            {
                                activeTab === "tab1" && <div>
                                    <p className="my-5 ">{summary}</p>
                                </div>
                            }
                        </div>
                    </div>

                </div>

            </div>
            <div className="lg:col-span-3 md:col-span-12">
                <div>
                    {
                        data?.slice(0, 5).map((kids) =>
                            <div key={kids?._id}>
                                <Link to={`/kidsDetails/${kids?._id}`}>
                                    <div className="flex mb-2 mt-4">
                                        <div className="w-1/2 ">
                                            <img className="w-[70px] h-[100px]" src={kids?.image[0]} alt="" />
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

                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default KidsDetails;