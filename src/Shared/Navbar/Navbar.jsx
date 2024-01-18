import { useContext } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-between">
                <div className="flex items-center w-2/12">
                    <img className="h-24 w-28" src="https://i.postimg.cc/JnQjXLgB/417533939-1451020992427951-1786153557459718164-n-removebg-preview.png" alt="Logo" />
                </div>
                <div className="w-8/12">
                    <div className="flex items-center">
                        <select className="border py-3 px-2 rounded bg-white">
                            <option value="category1">All</option>
                            <option value="category2">Books</option>
                            <option value="category2">SuperStore</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border p-2 rounded w-full"
                        />
                        <span className="bg-sky-400 p-3 rounded-r-sm"><FaSearch className="text-white"></FaSearch></span>
                    </div>
                </div>
                {/* Cart Icon */}
                <div className="flex items-center justify-center  space-x-4 w-2/12">
                    <span><FaShoppingCart className="text-3xl font-bold"></FaShoppingCart></span>
                    {user && user?.email ? <div className="dropdown dropdown-end">
                       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Mega Market Navar" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> : <Link to='/signIn'><button className="text-black border px-4 py-2 rounded text-xl">Sign In</button></Link>}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden mt-4 px-5 mb-5">
                <div className="flex items-center justify-between">
                    <img src="https://i.postimg.cc/JnQjXLgB/417533939-1451020992427951-1786153557459718164-n-removebg-preview.png" alt="Logo" className="h-24 w-28" />
                    <div className="flex items-center space-x-4">
                        <span><FaShoppingCart className="text-3xl font-bold"></FaShoppingCart></span>
                        {user && user?.email ? <div className="dropdown dropdown-end">
                            <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profil
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div> : <Link to='/signIn'><button className="text-black border px-4 py-2 rounded text-xl">Sign In</button></Link>}
                    </div>
                </div>
                <hr></hr>
                {/* Second Line */}
                <div className="mt-4">
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border p-2 rounded w-full"
                        />
                        <span className="bg-sky-400 p-3 rounded-r-sm"><FaSearch className="text-white"></FaSearch></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
