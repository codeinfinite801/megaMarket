import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaHome } from "react-icons/fa";

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
        <ul>
          <div className="divider"></div>
          <li className="flex items-center gap-3 justify-center">
            <FaHome />
            <Link>Home</Link>
          </li>
        </ul>
      </div>
      {/* sidebar ends here */}

      {/* Content session start here */}
      <div>
        <Outlet />
      </div>
      {/* Content session ends here */}
    </div>
  );
};

export default Dashboard;
