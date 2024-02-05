import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { MdPayments } from "react-icons/md";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex md:flex-row flex-col">
        {/* Navbar */}
        <div className="md:w-72 p-5 text-center  bg-[#F2F2F2] md:min-h-screen">
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
                onClick={()=>setOpen(!false)}
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
              Welcome <sup className="italic">{user && user?.displayName}</sup>
            </p>
            <div tabIndex={0} className=" avatar mb-5 hidden md:inline-block">
              <div className="md:w-24 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
          </div>
          {/* Routes start here */}
          <div className="flex-none hidden lg:block">
            <ul className="">
              <li>
                {/* <FaArrowRight className="text-xl" /> */}
                <Link
                  to={"/dashboard/order-history"}
                  className="flex items-center gap-2 mb-3"
                >
                  {" "}
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
                  {" "}
                  <MdPayments />
                  Payment History
                </Link>
              </li>
              <li>
                {/* <GiLoveHowl className="text-xl" /> */}
                <Link
                  to={"/dashboard/order-history"}
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
            </ul>
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            <li>
              {/* <FaArrowRight className="text-xl" /> */}
              <Link
                to={"/dashboard/order-history"}
                className="flex items-center gap-2 mb-3"
                onClick={()=>setOpen(!true)}
              >
                {" "}
                <FaArrowRight />
                Your Order
              </Link>
            </li>
            <li>
              {/* <FaArrowRight className="text-xl" /> */}
              <Link
                to={"/dashboard/paymentHistory"}
                className="flex items-center gap-2 mb-3"
                onClick={()=>setOpen(!true)}
              >
                {" "}
                <MdPayments />
                Payment History
              </Link>
            </li>
            <li>
              {/* <GiLoveHowl className="text-xl" /> */}
              <Link
                to={"/dashboard/order-history"}
                className="flex items-center gap-2 mb-3"
                onClick={()=>setOpen(!true)}
              >
                <GiLoveHowl className="text-red-600 text-xl" /> Wish List
              </Link>
            </li>
            <div className="divider"></div>
            <li className="flex items-center gap-2 justify-center">
              <FaHome />
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
