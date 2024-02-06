import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SidePart from "./SidePart";
import useCarts from "../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/AxiosSecure/useAxiosSecure";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import Popular from "./Popular";
import { Link } from "react-router-dom";
import axios from "axios";


const PlaceOrder = () => {
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCarts()
    // console.log(cart);

    const axiosSecure = useAxiosSecure()
    const totalPrice = cart?.reduce((previousPrice, current) => previousPrice + current?.priceWithDiscount, 0)







    const handleIncrease = (id) => {
        axios.put(`https://maga-market-server-eta.vercel.app/addProducts/${id}/increment`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
    };
    const handleDecrease = (id) => {
        axios.put(`https://maga-market-server-eta.vercel.app/addProducts/${id}/decrement`)
            .then(res => {
                console.log(res.data);
                refetch();
            })
    };



    // delete product
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/addProducts/${id}`);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Favorite Item has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.error("Error deleting item:", error.message);
                    // Handle error state
                }
            }
        });
    };




    return (
        <div className="bg-gray-200 p-4">
            {
                cart?.length > 0 ?
                    <div className="md:flex flex-row gap-5 bg-[#c6d0da] md:px-10">
                        <div className="md:w-8/12 w-full mt-5">
                            {/* div-1 */}
                            <div className="bg-[#fff] md:px-5 px-2 py-2 md:py-5 flex justify-between">
                                <div >
                                    <p className="md:text-lg text-sm font-bold text-sky-600">{user?.displayName}</p>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <h2 className="md:text-lg text-sm">{user?.email.slice(0, 12)}</h2>
                                    <p className="md:text-lg text-sm">your total: <span className="text-xl text-sky-500">{totalPrice} TK</span></p>
                                </div>
                            </div>
                            {/* div-2 */}
                            <div className="bg-[#fff] mt-5 mb-5 px-3">
                                {
                                    cart.map(item => <div className="flex mb-5" key={item._id}>
                                        {/* image */}
                                        <div className="px-3 flex justify-center items-center py-3 lg:w-3/12 w-8/12">
                                            <img src={item.image} alt="" />
                                        </div>
                                        {/* name and others */}
                                        <div className="lg:w-3/12 w-full py-2">
                                            <div className="md:mt-[50px]">
                                                <h1 className="md:text-xl text-sm font-medium">{item.name}</h1>
                                                <h2 className="md:text-xl text-sm mt-2">{item.author_name}</h2>
                                                {/* small device start*/}
                                                <div className="w-2/12 flex gap-2 lg:hidden justify-start items-center">
                                                    {/* <h2>{(item.price - item?.discount) * count}</h2> */}
                                                    {
                                                        item.discount ? <h2 className="text-red-700 block"><del>{item.price}</del></h2> : ''
                                                    }
                                                </div>
                                                <p>Price: {item?.price}</p>
                                                <p>Discount : {item?.discount}%</p>
                                                {/* end */}
                                                <div className="flex gap-3 mt-3">
                                                    <button onClick={() => handleDelete(item._id)}><img src="https://www.rokomari.com/static/200/images/icon_trash.png" alt="" /></button>
                                                    <button className="flex gap-2"><img src="https://www.rokomari.com/static/200/images/icon_wishlist.png" alt="" /><span>WishList</span></button>
                                                </div>
                                                <h2 className="text-red-800 mt-3 md:text-lg text-sm">Only {item?.quantity} copies available</h2>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="lg:w-3/12 w-full justify-end md:px-0 px-10 flex lg:justify-center items-center">
                                            <div className="md:flex flex-row justify-center items-center">
                                                <button
                                                    onClick={() => handleDecrease(item?._id)}
                                                    className="px-3 rounded-[3px] py-2 text-lg bg-gray-200 hover:text-blue-600 hover:border hover:border-blue-500"
                                                    disabled={item?.count <= 1}
                                                >
                                                    <FaMinus></FaMinus>
                                                </button>
                                                <p className="text-center px-2 font-bold">{item?.count}</p>
                                                <button onClick={() => handleIncrease(item?._id)}
                                                    className="px-3 py-2 bg-gray-200 hover:text-blue-600 hover:border hover:border-blue-500 rounded-[3px]" disabled={item?.count >= 10}
                                                >
                                                    <FaPlus></FaPlus>
                                                </button>
                                            </div>
                                        </div>
                                        {/* price */}
                                        <div className="w-2/12 lg:flex hidden justify-center items-center gap-2">
                                            <h2>{item?.priceWithDiscount}</h2>
                                            {
                                                item.discount ? <h2 className="text-red-700 block"><del>{item?.price * item?.count}</del></h2> : ''
                                            }
                                        </div>
                                    </div>)
                                }
                                <hr className="mt-5 mb-5" />
                                <div className="py-5">
                                    <div className="text-end px-5">
                                        <p>Apply Promo Code or Voucher Code on the Shipping Page</p>
                                        <div className="flex gap-5 justify-end mt-5">
                                            <button className="btn btn-outline btn-accent">Order As a Gift</button>
                                            {/* placed order button start */}
                                            {
                                                user && user?.email ? <Link to={'/order'}>
                                                    <button className="btn btn-warning">Place Order <span><FaArrowRight></FaArrowRight></span></button>
                                                </Link> : <Link to={'/signIn'}>
                                                    <button className="btn btn-warning">Place Order <span><FaArrowRight></FaArrowRight></span></button>
                                                </Link>
                                            }
                                            {/* placed order end */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="md:w-4/12 w-full mt-5 mb-5">
                            <SidePart></SidePart>
                        </div>
                    </div>
                    :
                    <div className="text-center mt-10 mb-10">
                        <div className="flex justify-center items-center">
                            <img className="h-[200px]" src="https://www.rokomari.com/static/200/images/icon_empty_cart.png" alt="" />
                        </div>
                        <h2 className="text-3xl font-semibold mt-5">Your Cart is Empty!</h2>
                        <p className="text-lg mt-3">Looks like you haven not made order yet.</p>
                        <Link to={'/'}>
                            <button className="mt-3 text-xl font-bold text-sky-600">Continue to shopping</button>
                        </Link>
                    </div>
            }
            <div className="my-8">
                <Popular></Popular>
            </div>

        </div>
    );
};

export default PlaceOrder;














