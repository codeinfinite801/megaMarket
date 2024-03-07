import { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router";
import useBooks from "../../../Hooks/useBooks";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import Reviews from "../../Reviews/Reviews";

const BookDetails = () => {
    const CallAxios = useAxiosSecure();
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [activeTab, setActiveTab] = useState("tab1");
    const { user } = useContext(AuthContext);
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    const navigate = useNavigate();
    const { _id, name, image, price, author_name, author_image, author_details, category, discount, rating, quantity, read_book, publisher, country, language, isNew, edition_date, total_pages, summary } = book;
    const discountedPrice = parseFloat((price - (price * discount) / 100).toFixed(2));

    const productData = { productId: _id, email: user?.email, name, image, price, author_name, author_image, author_details, category, discount, rating, quantity, read_book, publisher, country, language, isNew, edition_date, total_pages, summary, amount: 1, count: 1, priceWithDiscount: discountedPrice, discountedPrice: discountedPrice };

    const { data } = useBooks({ category });

    useEffect(() => {
        fetch(`https://mega-merket-project-server-site.vercel.app/allBooks/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id]);

    const addToCart = (id) => {
        CallAxios.post(`/addProducts/${_id}`, productData)
            .then(res => {
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Book Added to Cart Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    const addOnWishlist = (id) => {
        CallAxios.post("/wishList", productData)
            .then(res => {
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Book Added On WishList Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    const handleLogin = () => {
        navigate('/signIn');
    };

    return (
        <>
            <div className="grid grid-cols-12 gap-5 mx-5">
                <div className="lg:col-span-9 col-span-12">
                    <div className="mx-auto">
                        <div className="lg:flex items-center justify-between gap-8">
                            <div onClick={() => document.getElementById('my_modal_3').showModal()} className="p-5 lg:w-2/6 border shadow-md rounded-lg">
                                <h2 className="mb-2 text-right text-lg font-semibold">একটু পড়ে দেখুন</h2>
                                <img className="w-5/6 mx-auto rounded-md" src={image} alt="" />
                            </div>
                            <div className="lg:w-[60%] w-full pb-4">
                                <h2 className="text-2xl py-4 lg:pb-0 lg:text-left text-center font-bold">{name}</h2>
                                <p className="text-md lg:text-left text-center mt-1">By <span className="font-semibold text-blue-400">{author_name}</span></p>
                                <p className="text-sm lg:text-left text-center text-gray-600 mt-1">{category}</p>
                                <div className="flex justify-center lg:justify-start items-center  text-gray-600 mt-2">
                                    <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                    <span className="ml-2">({rating}) Ratings</span>
                                </div>
                                <div className="flex justify-center lg:justify-start items-center gap-3 mt-3">
                                    <p className="text-gray-500"><span className="line-through">TK{price}</span></p>
                                    <p className="font-bold text-lg text-red-500">TK.{discountedPrice}</p>
                                </div>
                                <div className="flex gap-3 my-2 lg:justify-start justify-center">
                                    <img src="https://www.rokomari.com/static/200/images/svg/in-stock(mini).svg" alt="" />
                                    <span className="text-sm">In Stock ( {quantity} Copies Available)</span>
                                </div>
                                <p className="text-sm text-center lg:text-left mt-2 italic">স্টক আউট হওয়ার আগেই অর্ডার করুন</p>
                                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center lg:justify-start items-center gap-5 mt-4">
                                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className=" relative px-4 py-3 rounded-lg   border-2 text-green-600 border-green-400 bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-green-400 before:transition-transform   before:duration-500  before:contents-[''] hover:text-black  before:hover:scale-x-100">একটু পড়ে দেখুন </button>
                                    {
                                        user && user?.email ? <button className="flex gap-2 relative px-4 py-3 rounded-lg  items-center justify-center  border-2 text-black  border-yellow-500 bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-yellow-500 before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100">
                                            <FaShoppingCart className="text-xl"></FaShoppingCart>
                                            <button onClick={() => addToCart(_id)}>Add To Cart</button>
                                        </button> : <button className="flex gap-2 text-base relative px-2 py-3 rounded-lg  items-center justify-center  border-2 text-black  border-yellow-500 bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-yellow-500 before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100">
                                            <FaShoppingCart className="text-2xl"></FaShoppingCart>
                                            <button onClick={handleLogin}>Add To Cart</button>
                                        </button>
                                    }
                                    {
                                        user && user?.email ? <button className="flex items-center justify-center gap-2 relative px-4 py-3 rounded-lg   border-2 text-pink-600 border-pink-500 bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-pink-500 before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100">
                                            <FaRegHeart className="text-2xl" />
                                            <button onClick={() => addOnWishlist(_id)}>WishList</button>
                                        </button> : <button className="flex items-center justify-center gap-2 relative px-4 py-3 rounded-lg w-36  border-2 text-pink-600 border-pink-400 bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-pink-400 before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100">
                                            <FaRegHeart className="text-2xl"></FaRegHeart>
                                            <button onClick={handleLogin}>WishList</button>
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div>
                        <h1>Related Products</h1>
                        <div className="divider"></div>
                        {
                            data?.slice(5, 9).map((book, index) => (
                                <Link to={`/bookDetails/${book?._id}`} key={index}>
                                    <div  className="flex mb-2">
                                        <div className="w-1/2">
                                            <img className="w-[70px] h-[100px]" src={book?.image} alt="" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h2 className="text-sm font-semibold mb-2 mt-4">{book?.name}</h2>
                                            <h3 className="text-gray-600 text-sm">{book?.author_name}</h3>
                                            <p className="flex items-center text-gray-600">
                                                <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                                <span>({book?.rating})</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-12 lg:mx-5">
                    <h1 className="font-bold">Product Specification & Summary :</h1>
                    <div className="my-3">
                        <div className="flex items-center  lg:justify-start justify-center lg:w-full mx-auto">
                            <div className="flex w-full lg:w-2/6 items-center justify-between">
                                <button onClick={() => handleTab("tab1")} className={activeTab === "tab1" ? "btn btn-border-green" : "btn"}>Summery</button>
                                <button onClick={() => handleTab("tab2")} className={activeTab === "tab2" ? "btn btn-border-green" : "btn"}>Specifications</button>
                                <button onClick={() => handleTab("tab3")} className={activeTab === "tab3" ? "btn btn-border-green" : "btn"}>Author</button>
                            </div>
                        </div>
                        <div>
                            {
                                activeTab === "tab3" && (
                                    <div className="lg:flex gap-10">
                                        <img className="lg:w-28 mx-auto h-full rounded-full mt-5" src={author_image} alt="" />
                                        <div className="mt-10 flex-1">
                                            <h1 className="font-bold text-center lg:text-left text-2xl mb-5">{author_name}</h1>
                                            <p className="text-center lg:text-left">{author_details}</p>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                activeTab === "tab2" && (
                                    <div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
                                            <div className="bg-gray-100 p-3 rounded-md">
                                                <h1 className="font-bold">Title :</h1>
                                                <p>{name}</p>
                                            </div>
                                            <div className="bg-gray-100 p-3 rounded-md">
                                                <h1 className="font-bold">Author :</h1>
                                                <p>{author_name}</p>
                                            </div>
                                            <div className="bg-gray-100 p-3 rounded-md">
                                                <h1 className="font-bold">Publisher :</h1>
                                                <p>{publisher}</p>
                                            </div>
                                            <div className="bg-gray-100 p-3 rounded-md">
                                                <h1 className="font-bold">Edition :</h1>
                                                <p>{edition_date}</p>
                                            </div>
                                            <div className="bg-gray-100 p-3 rounded-md">
                                                <h1 className="font-bold">Number Of Page :</h1>
                                                <p>{total_pages}</p>
                                            </div>
                                            <div className="bg-gray-100 p-3 rounded-md">
                                                <h1 className="font-bold">Country :</h1>
                                                <p>{country}</p>
                                            </div>
                                            <div className="bg-gray-100 p-3 rounded-md">
                                                <h1 className="font-bold">Language :</h1>
                                                <p>{language}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                activeTab === "tab1" && (
                                    <div>
                                        <p className="my-5">{summary}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Reviews image={image} name={name} rating={rating} productId={_id}></Reviews>
            </div>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div>
                                {
                                    read_book?.map(book => (
                                        <div key={_id}>
                                            <img src={book} alt="" />
                                        </div>
                                    ))
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
