
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const discountedPrice = (book.price - (book.price * book.discount) / 100).toFixed(2);

    return (
        <div>
            <Link to={`/bookDetails/${book._id}`}>
                <div className="card w-4/4 h-[29rem] bg-base-100  relative group">
                    <div className="p-2">
                        {/* Image and Discount Badge */}
                        <div className="relative w-full h-60 flex justify-center">
                            <img className="w-5/6 h-60 rounded-xl hover:opacity-90 transition-opacity duration-300" src={book?.image} alt="" />
                            {book.discount > 0 &&
                                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-2 py-1 rounded-full">
                                    <h3>{book.discount}% Off</h3>
                                </div>
                            }
                        </div>

                        {/* Book Title and New Badge */}
                        <div className="text-center">
                            <h2 className="text-lg">{book.name}</h2>
                            {book.isNew === true &&
                                <p className="text-[12px] font-bold py-1 px-2 rounded-full bg-purple-500 text-white inline-block">New</p>
                            }
                        </div>

                        {/* Author and Rating */}
                        <h3 className="text-center text-gray-600 text-sm">{book.author_name}</h3>
                        <div className="flex items-center justify-center text-gray-600 mt-2">
                            <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                            <span>({book.rating})</span>
                        </div>
                    </div>

                    {/* Stock Status */}
                    {book.quantity > 0 &&
                        <p className="text-green-600 text-sm font-semibold text-center">In Stock</p>
                    }

                    {/* Price Section */}
                    <div className="flex items-center justify-center gap-3 mt-1 w-full">
                        <p className="text-gray-500"><span className="line-through">TK{book.price}</span></p>
                        <p className="font-bold text-lg">TK.{discountedPrice}</p>
                    </div>

                    {/* View Details Overlay */}


                </div>
            </Link>
        </div >
    );
};

export default Book;
