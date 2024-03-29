import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Popular = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/allBooks')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log('from popular', categories);

    return (
        <div>
            <h2 className="px-5 text-3xl font-medium mb-5">Recently Sold Products</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-3 mt-5 mb-5">
                {
                    categories.slice(5, 10).map((category) => <Link to={`/bookDetails/${category._id}`} key={category?._id}>
                        <div className="hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:border-gray-400 rounded-md md:p-8 p-2 bg-white flex flex-col h-full">
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Image and Discount Badge */}
                                    <div className="relative w-full flex justify-center mb-4">
                                        <img className="md:w-5/6 w-full md:h-[200px] h-[150px] hover:opacity-90 transition-opacity duration-300" src={category.image} alt="" />
                                        {category?.discount > 0 &&
                                            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-2 py-1 rounded-full text-[12px]">
                                                <h3>{category.discount}% Off</h3>
                                            </div>
                                        }
                                    </div>

                                    {/* Book Title and New Badge */}
                                    <div className="text-center">
                                        <h2 className="text-sm font-semibold mb-1">{category.name}
                                        {category.isNew === true &&
                                            <p className="md:text-[12px] text-[10px] md:ml-2 ml-1 font-bold md:py-1 px-2 rounded-full bg-purple-500 text-white inline-block">New</p>
                                        }
                                        </h2>
                                    </div>

                                    {/* Author and Rating */}
                                    <h3 className="text-center text-gray-600 text-sm">{category.author_name}</h3>
                                    <div className="flex items-center justify-center text-gray-600 mt-2">
                                        <img className="md:w-24 w-[90px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rating_stars_4.5.svg/1280px-Rating_stars_4.5.svg.png" alt="" />
                                        <span>({category?.rating})</span>
                                    </div>
                                </div>

                                {/* Stock Status */}
                                {category.quantity > 0 &&
                                    <p className="text-green-600 text-sm font-semibold text-center">In Stock</p>
                                }
                            </div>

                            {/* Price Section */}
                            <div className="flex items-center justify-center gap-3 mt-1 w-full">
                                <p className="text-gray-500 md:text-lg"><span className="line-through">TK{category.price}</span></p>
                                <p className="font-bold md:text-lg">{category.price + category?.discount}TK</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Popular;