import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router";
import useBooks from "../../../Hooks/useBooks";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const BookDetails = () => {
    const CallAxios = useAxiosSecure()
    const { id } = useParams();
    const [book, setBook] = useState({})
    const [activeTab, setActiveTab] = useState("tab1")
    const { user } = useContext(AuthContext)
    const handleTab = (tab) => {
        setActiveTab(tab)
    }

    const { _id, name, image, price, author_name, author_image, author_details, category, discount, rating, quantity, read_book, publisher, country, language, isNew, edition_date, total_pages, summary } = book;
    const discountedPrice = parseFloat((price - (price * discount) / 100).toFixed(2));
    console.log(discountedPrice);

    const productData = { productId: _id, email: user?.email, name, image, price, author_name, author_image, author_details, category, discount, rating, quantity, read_book, publisher, country, language, isNew, edition_date, total_pages, summary, amount: 1, count: 1, priceWithDiscount: discountedPrice, discountedPrice: discountedPrice }

    const { data, refetch } = useBooks({ category })

    useEffect(() => {
        fetch(`https://maga-market-server-eta.vercel.app/allBooks/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
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
    console.log(read_book);
    return (
        <>
            <div className="grid grid-cols-12 gap-14 mx-14">
                <div className="col-span-9">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="flex items-center justify-between gap-8">
                            <div onClick={() => document.getElementById('my_modal_3').showModal()} className="p-5 w-2/6 border shadow-md rounded-lg">
                                <h2 className="mb-2 text-right text-lg font-semibold"> একটু পড়ে দেখুন</h2>
                                <img className="w-full rounded-md" src={image} alt="" />
                            </div>
                            <div className="w-[60%]">
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <p className="text-md mt-1">By <span className="font-semibold text-blue-400">{author_name}</span></p>
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
                                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-600 hover:text-white transition duration-300">একটু পড়ে দেখুন </button>
                                    <button className="flex items-center justify-center gap-4 bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition duration-300">
                                        <FaShoppingCart></FaShoppingCart>
                                        <button onClick={() => addToCart(_id)}>Add To Cart</button>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-span-3">
                    <div>
                        <h1>Related Products</h1>
                        <div className="divider"></div>

                        {
                            data?.slice(5, 9).map((book, index) => {
                                return <div key={index}>
                                    <Link to={`/bookDetails/${book?._id}`}>
                                        <div className="flex mb-2">
                                            <div className="w-1/2 ">
                                                <img className="w-[70px] h-[100px]" src={book?.image} alt="" />
                                            </div>
                                            <div className="text-left flex-1">
                                                <h2 className=" text-sm font-semibold mb-2 mt-4">{book?.name}</h2>
                                                <h3 className=" text-gray-600 text-sm">{book?.author_name}</h3>
                                                <p className=" flex items-center text-gray-600">
                                                    <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                                    <span>({book?.rating})</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
            {/* Product specification and summer=y */}
            <div className="mx-14">
                <h1>Product Specification & Summary</h1>
                <div className="my-3">
                    <div className="flex w-2/6 items-center justify-between">
                        <button onClick={() => handleTab("tab1")} className={activeTab === "tab1" ? "btn border border-green-600" : 'btn'}>Summery</button>
                        <button onClick={() => handleTab("tab2")} className={activeTab === "tab2" ? "btn border border-green-600" : 'btn'}>Specifications</button>
                        <button onClick={() => handleTab("tab3")} className={activeTab === "tab3" ? "btn border border-green-600" : 'btn'}>Author</button>
                    </div>
                    <div>
                        {
                            activeTab === "tab3" && <div>
                                <div className="flex gap-10">
                                    <img className="w-full h-full rounded-full mt-5" src={author_image} alt="" />
                                    <div className="mt-10">
                                        <h1 className="font-bold text-2xl mb-5">{author_name}</h1>
                                        <p>{author_details}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            activeTab === "tab2" && <div>
                                <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                    <h1 className="font-bold">Title</h1>
                                    <p>{name}</p>
                                </div>
                                <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                    <h1 className="font-bold">Author</h1>
                                    <p>{author_name}</p>
                                </div>
                                <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                    <h1 className="font-bold">Publisher</h1>
                                    <p>{publisher}</p>
                                </div>
                                <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                    <h1 className="font-bold">Edition</h1>
                                    <p>{edition_date}</p>
                                </div>
                                <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                    <h1 className="font-bold">Number Of Page</h1>
                                    <p>{total_pages}</p>
                                </div>
                                <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                    <h1 className="font-bold">Country</h1>
                                    <p>{country}</p>
                                </div>
                                <div className="flex justify-between mx-4 px-3 py-1 rounded gap-10 w-2/6 items-center">
                                    <h1 className="font-bold">Language</h1>
                                    <p>{language}</p>
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
            <div>

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div>
                                {
                                    read_book?.map(book => {
                                        return <div key={_id}>
                                            <img src={book} alt="" />
                                        </div>
                                    })
                                }
                            </div>
                        </form>

                    </div>
                </dialog>
            </div>
        </>

    );
};

export default BookDetails;