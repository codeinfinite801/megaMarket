
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ChildrenAllBook = () => {
    const { ageRange } = useParams();
    const [childrensBooks, setChildrensBooks] = useState([]);
    const [sorting, setSorting] = useState('');
    const [authors, setAuthors] = useState('');
    const [bestSell, setBestSell] = useState('');
    const [discount, setDiscount] = useState('');



    const applySorting = (books, sortingType, comparator) => {
        if (sortingType) {
            const sortedBooks = [...books];
            sortedBooks.sort(comparator);
            setChildrensBooks(() => sortedBooks);
        }
    };

    const handleInputChange = (sortType) => {
        setSorting(sortType);
    };

    const handleAuthorChange = (name) => {
        setAuthors(name);
    };

    const handleBestSell = (sortSellType) => {
        setBestSell(sortSellType);
    };

    const handleDiscount = (discountType) => {
        setDiscount(discountType);
    };

    const uniqueAuthors = new Set();

    childrensBooks?.forEach((author) => {
        uniqueAuthors.add(author.author_name);
    });

    useEffect(() => {
        let cancelRequest = false;

        fetch('http://localhost:5000/allbooks')
            .then((response) => response.json())
            .then((data) => {
                if (!cancelRequest) {
                    const childBooks = data?.filter((books) => books?.category === ageRange);
                    setChildrensBooks(childBooks);
                }
            });

        return () => {
            cancelRequest = true;
        };
    }, [ageRange]);

    useEffect(() => {
        let filteredBooks = childrensBooks;

        if (authors) {
            filteredBooks = childrensBooks?.filter(
                (books) => books?.author_name === authors
            );
        }

        const sortedBooks = applySorting(filteredBooks, sorting, (bookA, bookB) => {
            const priceA = bookA.price;
            const priceB = bookB.price;

            if (sorting === 'asc') {
                return priceA - priceB;
            } else if (sorting === 'desc') {
                return priceB - priceA;
            }

            return 0;
        });

        const sortedBestSellBooks = applySorting(
            sortedBooks,
            bestSell,
            (bookA, bookB) => {
                const ratingA = bookA.rating;
                const ratingB = bookB.rating;

                if (bestSell === 'desc') {
                    return ratingB - ratingA;
                }

                return 0;
            }
        );

        const sortedDiscountBooks = applySorting(
            sortedBestSellBooks,
            discount,
            (bookA, bookB) => {
                const discountA = bookA.discount;
                const discountB = bookB.discount;

                if (discount === 'desc') {
                    return discountB - discountA;
                }

                return 0;
            }
        );

        setChildrensBooks(sortedDiscountBooks);
    }, [sorting, bestSell, discount, childrensBooks, authors]);

    return (
        <div className='w-[100%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 p-6'>
            <div className='col-span-1 items-center justify-center text-center'>
                <div className="bg-white shadow-xl rounded-lg p-3 border">
                    <div className="py-2 px-2 border-b-2">
                        <p className="font-bold">Sort</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 my-2">
                        <input type="radio" name="sort" id="best-seller"
                            onChange={() => handleBestSell("desc")}
                            checked={bestSell === "desc"}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="best-seller" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Best Seller</label>
                    </div>
                    <div className="flex items-center justify-center gap-4 my-2">
                        <input
                            type="radio"
                            name="sort"
                            id="low-to-high"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={() => handleInputChange("asc")}
                            checked={sorting === "asc"}
                        />
                        <label htmlFor="low-to-high" className="ml-2 block text-sm font-medium text-gray-700 flex-1">
                            Price Low to High
                        </label>
                    </div>

                    <div className="flex items-center justify-center gap-4 my-2">
                        <input
                            type="radio"
                            name="sort"
                            id="high-to-low"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={() => handleInputChange("desc")}
                            checked={sorting === "desc"}
                        />
                        <label htmlFor="high-to-low" className="ml-2 block text-sm font-medium text-gray-700 flex-1">
                            Price High to Low
                        </label>
                    </div>
                    <div className="flex items-center justify-center gap-4 my-2">
                        <input type="radio" name="sort" id="discount"
                            onChange={() => handleDiscount("desc")}
                            checked={discount === "desc"}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="discount" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Discount</label>
                    </div>
                </div>
                {/* sort - 2 */}
                <div className='bg-white shadow-xl rounded-lg p-3 border mt-4'>
                    <div className="flex items-center justify-center gap-4  px-2">
                        <input type="radio" name="sort" id="eBook" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="eBook" className="ml-2 block text-sm font-medium text-gray-700 flex-1">eBook</label>
                    </div>
                    <div className="divider"></div>
                    <div className="flex items-center justify-center gap-4   px-2">
                        <input type="radio" name="sort" id="inStock" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="inStock" className="ml-2 block text-sm font-medium text-gray-700 flex-1">In Stock</label>
                    </div>
                </div>

                {/* Filter By Author */}
                <div className="bg-white shadow-xl rounded-lg p-3 border mt-4">
                    <div className="py-2 px-2 border-b-2">
                        <p className="font-bold">Filter By Author</p>
                    </div>

                    {

                        Array.from(uniqueAuthors).map((uniqueAuthor, index) => (
                            <div key={index} className="flex items-center justify-center gap-4 my-2">
                                <input
                                    type="radio"
                                    name="sort"
                                    id={`author-${index}`}
                                    onChange={() => handleAuthorChange(uniqueAuthor)}
                                    checked={authors === uniqueAuthor}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor={`author-${index}`} className="ml-2 block text-sm font-medium text-gray-700 flex-1">
                                    {uniqueAuthor}
                                </label>
                            </div>
                        ))
                    }

                </div>
            </div>

            {/* All book show here */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 col-span-3 justify-center items-center mx-auto text-center'>
                {childrensBooks?.map((book) => (
                    <div key={book._id} className='flex items-center justify-center'>
                        <div className="card w-72 h-96 bg-base-100 shadow-xl relative group">
                            <figure className="p-2">
                                <img src={book.image} alt="Book" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-xl">{book.name}</h2>
                                <p>{book.author_name}</p>
                                <p>{book.price}</p>
                                <p>{book.rating}</p>
                            </div>
                            <Link to={`/bookDetails/${book._id}`}>
                                <div className="card-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="card w-72 h-96">
                                        <Link to={`/bookDetails/${book._id}`}>
                                            <button className="btn btn-primary w-full mt-[21rem]">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChildrenAllBook;