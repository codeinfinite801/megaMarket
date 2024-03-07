import { useContext, useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useCarts from "../../Hooks/useCarts";
import useWishList from "../../Hooks/useWishList";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const navigate = useNavigate()
  const [allBooks, setAllBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(true)
  const [search, setSearch] = useState('All')
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const signOut = () => {
    logOut();
  };



  useEffect(() => {
    fetch(`https://maga-market-server-eta.vercel.app/search?category=${search}`)
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, [search]);

  const [cart] = useCarts();
  const [wishList] = useWishList();

  // Filter books based on search query
  const filteredBooks = allBooks.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleValue = (event) => {
    const selectedCategory = event?.target?.value;
    setSearch(selectedCategory)
  };
  const searchResult = (book) => {
    if (book?.main_category === "ইলেক্ট্রনিক্স") {
      navigate(`/electricdetails/${book?._id}`)
      setShow(false)
      setSearchQuery('')
    }
    if (book?.main_category === "কিডস জোন") {
      navigate(`/kidsDetails/${book?._id}`)
      setShow(false)
      setSearchQuery('')
    }
    if (book?.read_book) {
      navigate(`/bookDetails/${book?._id}`)
      setShow(false)
      setSearchQuery('')
    }
  }
  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center w-2/12">
          <Link to="/">
            <img
              className="h-24 w-28"
              src="https://i.postimg.cc/JnQjXLgB/417533939-1451020992427951-1786153557459718164-n-removebg-preview.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="w-8/12">
          <div className="flex items-center">
            <select onChange={handleValue} className="border py-3 px-2 rounded bg-white">
              <option value="All">All</option>
              <option value="Books">Books</option>
              <option value="SuperStore">SuperStore</option>
            </select>
            <input
              type="text"
              // onBlur={() => setShow(!show)}
              onSelect={() => setShow(true)}
              placeholder="Search..."
              className="border p-2 rounded-l w-full ml-2"
              value={searchQuery}

              onChange={handleSearch}
            />
            <span className="bg-sky-400 p-3 rounded-r">
              <FaSearch className="text-white"></FaSearch>
            </span>
          </div>
          {
            show && <div className="relative">
              <div className={`absolute w-full bg-white z-10 rounded-lg ${searchQuery.length === 0 ? 'hidden' : 'block'}`} style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <div className="">
                  <div className="flex flex-col gap-4">
                    {filteredBooks?.map(book => (
                      <div key={book?._id} onClick={() => searchResult(book)} className="flex hover:bg-gray-200 px-4 py-2 text-black gap-5 items-center justify-between">
                        <div className="flex items-center gap-5">
                          {book.image && ( // Check if book.image exists
                            <img className="w-14" src={Array.isArray(book?.image) && book?.image?.length ? book?.image[0] : book.image} alt="" />
                          )}
                          <div>
                            <h1>{book?.name}</h1>
                            <p className="text-gray-500">{book?.author_name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <p className="text-red-600">({book?.discount})% Off</p>
                          <p>{book?.price} TK</p>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          }

        </div>
        {/* Cart Icon */}
        <div className="flex items-center justify-center  space-x-6 w-3/12">
          <Link to={"/wishList"}>
            <div className="indicator">
              <GoChecklist className="text-4xl  hover:text-pink-500 font-semibold"></GoChecklist>
              <span className="badge badge-md badge-secondary indicator-item">
                {wishList.length}
              </span>

            </div>
          </Link>

          <Link to={"/placeOrder"}>
            <div className="indicator">
              <FaShoppingCart className="text-4xl hover:text-blue-500 font-semibold"></FaShoppingCart>
              <span className="badge badge-md badge-info indicator-item">
                {cart.length}
              </span>

            </div>
          </Link>
          {user && user?.email ? (
            <div className="dropdown dropdown-end z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
              >
                {user && isAdmin ? (
                  <li>
                    {user && (
                      <Link
                        to={"dashboard/admin"}
                        className="justify-between font-bold"
                      >
                        Dashboard
                      </Link>
                    )}
                  </li>
                ) : (
                  <li>
                    {user && (
                      <Link
                        to={"dashboard/user"}
                        className="justify-between font-bold"
                      >
                        Dashboard
                      </Link>
                    )}
                  </li>
                )}
                <li>
                  <button onClick={signOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signIn">
              <button className=" relative px-4 py-2 rounded-lg  w-28 border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden mt-4 px-5 mb-5">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="https://i.postimg.cc/JnQjXLgB/417533939-1451020992427951-1786153557459718164-n-removebg-preview.png"
              alt="Logo"
              className="h-24 w-28"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link to={"/wishList"}>
              <div className="indicator">
                <GoChecklist className="text-4xl  hover:text-pink-500 font-semibold"></GoChecklist>
                <span className="badge badge-md badge-secondary indicator-item">
                  {wishList.length}
                </span>
              </div>
            </Link>

            <Link to={"/placeOrder"}>
              <div className="indicator">
                <FaShoppingCart className="text-4xl hover:text-blue-500 font-semibold"></FaShoppingCart>
                <span className="badge badge-md badge-info indicator-item">
                  {cart.length}
                </span>
              </div>
            </Link>
            {/* <span><FaShoppingCart className="text-3xl font-bold"></FaShoppingCart></span> */}

            {user && user?.email ? (
              <div className="dropdown dropdown-end z-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={1}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <Link to="/paymentHistory">
                    <li>Payment History</li>
                  </Link>
                  <li>
                    <a>Settings</a>
                  </li>

                  <li>
                    <button onClick={signOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signIn">
                <button className="text-black border px-4 py-2 rounded text-xl">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr></hr>
        {/* Second Line */}
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-l w-full ml-2"
              value={searchQuery}
              onBlur={() => setShow(false)}
              onSelect={() => setShow(true)}
              onChange={handleSearch}
            />
            <span className="bg-sky-400 p-3 rounded-r-sm">
              <FaSearch className="text-white"></FaSearch>
            </span>
          </div>
          {
            show && <div className="relative">
              <div className={`absolute w-full bg-white z-10 rounded-lg ${searchQuery?.length === 0 ? 'hidden' : 'block'}`} style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <div className="">
                  <div className="flex flex-col gap-4">
                    {filteredBooks?.map(book => (
                      <div key={book?._id} onClick={() => searchResult(book)} className="flex hover:bg-gray-200 px-4 py-2 text-black gap-5 items-center justify-between">
                        <div className="flex items-center gap-5">
                          <img className="w-14" src={book?.image} alt="" />
                          <div>
                            <h1>{book?.name}</h1>
                            <p className="text-gray-500">{book?.author_name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <p className="text-red-600">({book?.discount})% Off</p>
                          <p>{book?.price} TK</p>
                        </div>
                      </div>

                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
          <div>
            <div className="relative">
              <div className={`absolute w-full bg-white z-10 rounded-lg ${searchQuery.length === 0 ? 'hidden' : 'block'}`} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <div className="">
                  <div className="flex flex-col gap-4">
                    {filteredBooks?.map(book => (
                      <Link to={`/bookDetails/${book?._id}`} key={book?._id} >
                        <div className="flex hover:bg-gray-200 px-4 py-2 text-black gap-5 items-center justify-between">
                          <div className="flex items-center gap-5">
                            <img className="w-14" src={book?.image} alt="" />
                            <div>
                              <h1>{book?.name}</h1>
                              <p className="text-gray-500">{book?.author_name}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-5">
                            <p className="text-red-600">({book?.discount})% Off</p>
                            <p>{book?.price} TK</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;