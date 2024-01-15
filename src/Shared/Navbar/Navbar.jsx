import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
                    <button className="text-black border px-4 py-2 rounded text-xl">Sign In</button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden mt-4 px-5">
                <div className="flex items-center justify-between">
                    <img src="https://i.postimg.cc/JnQjXLgB/417533939-1451020992427951-1786153557459718164-n-removebg-preview.png" alt="Logo" className="h-24 w-28" />
                    <div className="flex items-center space-x-4">
                        <span><FaShoppingCart className="text-3xl font-bold"></FaShoppingCart></span>
                        <button className="text-black border px-4 py-2 rounded text-xl">Sign In</button>
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