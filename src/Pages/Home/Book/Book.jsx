import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { _id, image, author_name, discount, isNew, name, rating, quantity, price } = book;
    const discountedPrice = (price - (price * discount) / 100).toFixed(2);

    return (
        <Link to={`/bookDetails/${_id}`}>
            <div className="hover:border rounded-md p-8">
                <div className="relative flex justify-center">
                    <img className="w-full h-[200px]" src={image} alt="" />
                    <div className="absolute -top-7 -left-7">
                        {
                            discount > 0 && <div className="bg-red-300 px-3 py-4 rounded-full">
                                <h3>{discount}%</h3>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <h2 className="text-center mb-2 mt-4">{name}</h2>
                    {
                        isNew === true && <p className="text-[12px] font-bold py-1 px-2 rounded-full bg-purple-400">New</p>
                    }
                </div>
                <h3 className="text-center">{author_name}</h3>
                <p className="text-center"> rating({rating})</p>
                <div className="text-center">
                    {
                        quantity > 0 && <p className="text-green-500">Product In Stack</p>
                    }
                </div>
                <div className="flex items-center justify-evenly">
                    <p>TK.<span className="line-through">{price}</span></p>

                    <p className="font-bold">TK.{discountedPrice}</p>
                </div>
            </div></Link>
    );
};

export default Book;