import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaArrowRight, FaHome, FaUser  } from "react-icons/fa";
import { GiLoveHowl,GiBabyBottle } from "react-icons/gi";
import { MdPayments,MdMenuBook  } from "react-icons/md";
import { FcTwoSmartphones } from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import Swal from "sweetalert2";
import manageOderIcon from "../../src/assets/manageOrder.png";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { user, logOut ,loading} = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();

  if (loading) {
    return (
      <div className="w-96 h-96 flex items-center justify-center mx-auto text-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  // logout function

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to logout this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire({
          title: "Success!",
          text: "You successfully logout this website ",
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex md:flex-row flex-col">
          {/* Navbar */}
          <div className="md:w-72 p-5 text-center  bg-[#2B3B4A] text-white md:min-h-screen">
            <div className="flex lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                  onClick={() => setOpen(!false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="">
              <p className="md:text-xl font-bold p-3 lg:hidden ">
                Welcome to <sup className="italic text-2xl">Dashboard</sup>
              </p>
              <p className="md:text-xl font-bold p-3 hidden md:inline-block  ">
                Welcome{" "}
                <sup className="italic">{user && user?.displayName}</sup>
              </p>
              <div tabIndex={0} className=" avatar mb-5 hidden md:inline-block">
                <div className="md:w-24 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            </div>
            {/* Routes start here */}
            <div className="flex-none hidden lg:block">
              {isAdmin ? (
                <ul className="">
                  <li>
                    <Link
                      to={"/dashboard/admin"}
                      className="flex items-center gap-2 mb-3"
                    >
                     <FaUser/>
                      Admin Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/manage-order"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <img className="w-5 h-5" src={manageOderIcon} alt="" />
                      Manage Order
                    </Link>
                  </li>

                  <li>
                 
                    <Link
                      to={"/dashboard/add-books"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <MdMenuBook  className="text-2xl text-red-400" />
                      Add Books
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/dashboard/add-electronic"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <FcTwoSmartphones className="text-2xl" />
                     Add Electronic Product
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/dashboard/add-kisdsProduct"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <GiBabyBottle  className="text-2xl text-red-500" />
                      Add kids product
                    </Link>
                  </li>


                  <li>
                    <Link
                      to={"/dashboard/manage-user"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <FaUser className="text-xl text-blue-500" />
                      Manage User
                    </Link>
                  </li>
                  <div className="divider"></div>
                  <li className="flex items-center gap-2 justify-center">
                    <FaHome className="text-2xl text-blue-500"/>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <button
                      className="flex text-red-400"
                      onClick={handleLogOut}
                    >
                      <IoMdLogOut className="text-2xl" />
                      Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="">
                  <li>
                    <Link
                      to={"/dashboard/user"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <FaArrowRight />
                      User Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/order-history"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <FaArrowRight />
                      Your Order
                    </Link>
                  </li>
                  <li>
                    {/* <FaArrowRight className="text-xl" /> */}
                    <Link
                      to={"/dashboard/paymentHistory"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <MdPayments />
                      Payment History
                    </Link>
                  </li>
                  <li>
                    {/* <GiLoveHowl className="text-xl" /> */}
                    <Link
                      to={"/wishList"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <GiLoveHowl className="text-red-600 text-xl" /> Wish List
                    </Link>
                  </li>
                  <div className="divider"></div>
                  <li className="flex items-center gap-2 justify-center">
                    <FaHome />
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <button
                      className="flex text-red-400"
                      onClick={handleLogOut}
                    >
                      <IoMdLogOut className="text-2xl" />
                      Logout
                    </button>
                  </li>
                </ul>
              )}
              {/* routes end */}
            </div>
          </div>
          {/* Page content here */}
          <div className="text-center flex-1 pt-4">
            <Outlet />
          </div>
        </div>
        {open && (
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {isAdmin ? (
              <ul className="menu p-4 w-80 min-h-full bg-base-200">
                <li>
                  <Link
                    to={"/dashboard/manage-order"}
                    className="flex items-center gap-2 mb-3"
                    onClick={()=>setOpen(!open)}
                  >
                    <img className="w-5 h-5" src={manageOderIcon} alt="" />
                    Manage Order
                   
                  </Link>
                </li>
                <li>
                    <Link
                      to={"/dashboard/add-books"}
                      className="flex items-center gap-2 mb-3"
                      onClick={()=>setOpen(!open)}
                    >
                      <MdMenuBook  className="text-2xl text-red-400" />
                      Add Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/add-electronic"}
                      className="flex items-center gap-2 mb-3"
                    >
                      <FcTwoSmartphones className="text-2xl" />
                     Add Electronic Product
                     onClick={()=>setOpen(!open)}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/add-kisdsProduct"}
                      className="flex items-center gap-2 mb-3"
                      onClick={()=>setOpen(!open)}
                    >
                      <GiBabyBottle  className="text-2xl text-red-500" />
                      Add kids product
                    </Link>
                  </li>
                <li>
                  <Link
                    to={"/dashboard/manage-user"}
                    className="flex items-center gap-2 mb-3"
                    onClick={()=>setOpen(!open)}
                  >
                    <FaUser className="text-xl text-blue-500" />
                    Manage User
                  </Link>
                </li>
                <div className="divider"></div>
                  <li className="flex items-center gap-2 justify-center">
                    <FaHome />
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <button
                      className="flex text-red-400"
                      onClick={handleLogOut}
                    >
                      <IoMdLogOut className="text-2xl" />
                      Logout
                    </button>
                  </li>
              </ul>
            ) : (
              <ul className="menu p-4 w-80 min-h-full bg-base-200">
                <li>
                  <Link
                    to={"/dashboard/order-history"}
                    className="flex items-center gap-2 mb-3"
                    onClick={() => setOpen(!true)}
                  >
                    <FaArrowRight />
                    Your Order
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/paymentHistory"}
                    className="flex items-center gap-2 mb-3"
                    onClick={() => setOpen(!true)}
                  >
                    {" "}
                    <MdPayments />
                    Payment History
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard/order-history"}
                    className="flex items-center gap-2 mb-3"
                    onClick={() => setOpen(!true)}
                  >
                    <GiLoveHowl className="text-red-600 text-xl" /> Wish List
                  </Link>
                </li>
                <div className="divider"></div>
                <ul>
                  <li className="flex items-center justify-center">
                    <FaHome className="text-2xl text-blue-500"/>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <button
                      className="flex text-red-400"
                      onClick={handleLogOut}
                    >
                      <IoMdLogOut className="text-2xl" />
                      Logout
                    </button>
                  </li>
                </ul>
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
