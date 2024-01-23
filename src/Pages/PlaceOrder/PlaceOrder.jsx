import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SidePart from "./SidePart";
import useCarts from "../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/AxiosSecure/useAxiosSecure";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import Popular from "./Popular";
import { Link } from "react-router-dom";


const PlaceOrder = () => {
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCarts()
    // console.log(cart);
    const axiosSecure = useAxiosSecure()
    // state
    const [count, setCount] = useState(1);



    const handleIncrease = (id) => {
        const updatedData = cart.map((product) => {
            if (product._id === id) {
                setCount(count + 1)
            }
        })
    };

    const setDecrease = () => {
        count > 1 ? setCount(count - 1) : setCount(1)

    }



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
        <div>
            <div className="flex gap-5 bg-[#c6d0da] px-10">
                <div className="w-8/12 mt-5">
                    {/* div-1 */}
                    <div className="bg-[#fff] px-5 py-5 flex justify-between">
                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <p>Select All ({cart.length})</p>
                        </div>
                        <div className="flex gap-2">
                            <h2>{user?.email}</h2>
                            <p>your total:</p>
                        </div>
                    </div>
                    {/* div-2 */}
                    <div className="bg-[#fff] mt-5 mb-5">
                        {
                            cart.map(item => <div className="flex mb-5" key={item._id}>
                                <div className="w-1/12 flex justify-center items-center text-center">
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="px-3 py-3 w-3/12">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="w-3/12">
                                    <div className="mt-[50px]">
                                        <h1 className="text-xl">{item.name}</h1>
                                        <h2 className="text-xl mt-2">{item.author_name}</h2>
                                        <div className="flex gap-3 mt-3">
                                            <button onClick={() => handleDelete(item._id)}><img src="https://www.rokomari.com/static/200/images/icon_trash.png" alt="" /></button>
                                            <button className="flex gap-2"><img src="https://www.rokomari.com/static/200/images/icon_wishlist.png" alt="" /><span>WishList</span></button>
                                        </div>
                                        <h2 className="text-red-800 mt-3">Only {item.quantity} copies available</h2>
                                    </div>
                                </div>
                                <div className="w-3/12 flex justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <button onClick={setDecrease} className="px-3 py-2 text-lg bg-gray-200"><FaMinus></FaMinus></button>
                                        <input className="w-[30px] text-center text-black" placeholder={count} type="text" name="" id="" />
                                        <button onClick={() => handleIncrease(item._id)} className="px-3 py-2 bg-gray-200"><FaPlus></FaPlus></button>
                                    </div>
                                </div>
                                <div className="w-2/12 flex justify-center items-center">
                                    <h2>{item.price * count}</h2>
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
                                    <Link to={'/order'}>
                                        <button className="btn btn-warning">Place Order <span><FaArrowRight></FaArrowRight></span></button>
                                    </Link>
                                    {/* placed order end */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-4/12 mt-5 mb-5">
                    <SidePart></SidePart>
                </div>
            </div>
            <Popular></Popular>
            {/* mohiuddin */}
        </div>
    );
};

export default PlaceOrder;










