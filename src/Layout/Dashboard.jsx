import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { MdPayments } from "react-icons/md";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex gap-5">
      {/* sidebar start here */}
      <div className="w-72 min-h-screen bg-[#38BDF8] text-center p-4 text-white">
        <p className="text-xl font-bold">
          Welcome <sup className="italic">{user && user?.displayName}</sup>
        </p>
        <div tabIndex={0} className=" avatar">
          <div className="w-24 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
          </div>
        </div>
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
      </div>
      {/* sidebar ends here */}

      {/* Content session start here */}
      <div className="text-center flex-1 pt-4">
        <Outlet />
      </div>
      {/* Content session ends here */}
    </div>
  );
};

export default Dashboard;
