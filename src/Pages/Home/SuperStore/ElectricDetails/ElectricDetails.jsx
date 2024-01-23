import { Link } from "react-router-dom";


const ElectricDetails = ({ electric }) => {

    const {features ,model ,isNew, country, color,warranty, discount, rating, quantity, price, main_category, category, brand_logo, name, image, _id} = electric
    const discountedPrice = (price - (price * discount) / 100).toFixed(2);

    return (
        <div>
            <div>
                <Link to={`/electricdetails/${_id}`}>
                    <div className="hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:border-gray-400 rounded-md p-8 bg-white flex flex-col h-full">
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                {/* Image and Discount Badge */}
                                <div className="relative w-full flex justify-center mb-4">
                                    <img className="w-4/6 hover:opacity-90 transition-opacity duration-300" src={image[0]} alt="" />
                                    {discount > 0 &&
                                        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-2 py-1 rounded-full">
                                            <h3>{discount}% Off</h3>
                                        </div>
                                    }
                                </div>

                                {/* Book Title and New Badge */}
                                <div className="text-center">
                                    <h2 className="text-sm font-semibold mb-1">{name}</h2>
                                    {isNew === true &&
                                        <p className="text-[12px] font-bold py-1 px-2 rounded-full bg-purple-500 text-white inline-block">New</p>
                                    }
                                </div>

                                {/* Author and Rating */}
                                <h3 className="text-center text-gray-600 text-sm"></h3>
                                <div className="flex items-center justify-center text-gray-600 mt-2">
                                    <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                    <span>({rating})</span>
                                </div>
                            </div>

                            {/* Stock Status */}
                            {quantity > 0 &&
                                <p className="text-green-600 text-sm font-semibold text-center">In Stock</p>
                            }
                        </div>

                        {/* Price Section */}
                        <div className="flex items-center justify-center gap-3 mt-1 w-full">
                            <p className="text-gray-500"><span className="line-through">TK{price}</span></p>
                            <p className="font-bold text-lg">TK.{discountedPrice}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ElectricDetails;