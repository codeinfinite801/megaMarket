import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { _id, image, author_name, discount, isNew, name, rating, quantity, price } = book;
    const discountedPrice = (price - (price * discount) / 100).toFixed(2);

    return (
        <div>
            <div>
                <Link to={`/bookDetails/${_id}`}>
                    <div className="hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:border-gray-400 rounded-md p-8 bg-white">
                        <div className="relative flex justify-center">
                            <img className="w-1/2 hover:opacity-90 transition-opacity duration-300" src={image} alt="" />
                            <div className="absolute -top-7 left-5">
                                {
                                    discount > 0 && <div className="bg-red-500 text-white px-2 py-1 rounded-full">
                                        <h3>{discount}% Off</h3>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="flex gap-2 w-full items-center justify-center">
                            <h2 className="text-center text-sm font-semibold mb-2 mt-4">{name}</h2>
                            {
                                isNew === true && <p className="text-[12px] font-bold py-1 px-2 rounded-full bg-purple-500 text-white">New</p>
                            }
                        </div>
                        <h3 className="text-center text-gray-600 text-sm">{author_name}</h3>
                        <p className="text-center flex items-center justify-center text-gray-600">
                            <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                            <span>({rating})</span>
                        </p>
                        <div className="text-center">
                            {
                                quantity > 0 && <p className="text-green-600 text-sm font-semibold">In Stock</p>
                            }
                        </div>
                        <div className="flex items-center justify-center gap-3 mt-1">
                            <p className="text-gray-500"><span className="line-through">TK{price}</span></p>
                            <p className="font-bold text-lg">TK.{discountedPrice}</p>
                        </div>
                    </div>

                </Link>
            </div>
        </div>
    );
};

export default Book;