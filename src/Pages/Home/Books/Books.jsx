import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../Book/Book";
import useBooks from "../../../Hooks/useBooks";


const Books = () => {
    const { category } = useParams();
    const { data } = useBooks({ category })
    const [author, setAuthor] = useState([])
    const [dataIndex, setDataIndex] = useState(10)
    useEffect(() => {
        if (data) {
            const authorList = data.reduce((acc, book) => {
                if (book?.author_name && !acc.includes(book.author_name)) {
                    return [...acc, book.author_name];
                }
                return acc;
            }, []);

            setAuthor(authorList);
        }
    }, [data]);
    const handleData = () => {
        setDataIndex(data?.length)
    }


    // ------
    const [sortOrder, setSortOrder] = useState(null);
    const [sortByRating, setSortByRating] = useState(false);
    const [selectedAuthorName, setSelectedAuthorName] = useState(new Set());

    const handlePriceLowToHigh = () => {
        setSortOrder("asc");
        setSortByRating(false);
    };

    const handlePriceHighToLow = () => {
        setSortOrder("desc");
        setSortByRating(false);
    };

    const handleBestRating = () => {
        setSortByRating(!sortByRating);
        setSortOrder(null);
    };

    const handleShortByDiscount = () => {
        setSortByRating(false);
        setSortOrder('discount');
    };

    const handleTypeFilter = (author_name) => {
        setSelectedAuthorName((prevTypes) => {
            const newTypes = new Set(prevTypes);
            if (newTypes.has(author_name)) {
                newTypes.delete(author_name);
            } else {
                newTypes.add(author_name);
            }
            return newTypes;
        });
    };

    const filteredProducts = data?.filter((product) => {
        return (
            (!selectedAuthorName.size || selectedAuthorName.has(product.author_name))
        );
    });

    let sortedAndFilteredProducts = filteredProducts;

    if (sortByRating) {
        sortedAndFilteredProducts = sortedAndFilteredProducts.slice().sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "desc") {
        sortedAndFilteredProducts = sortedAndFilteredProducts.slice().sort((a, b) => b.price - a.price);
    } else if (sortOrder === "discount") {
        sortedAndFilteredProducts = sortedAndFilteredProducts.slice().sort((a, b) => b.discount - a.discount);
    } else if (sortOrder === "asc") {
        sortedAndFilteredProducts = sortedAndFilteredProducts.slice().sort((a, b) => a.price - b.price);
    }

    return (
        <div>
            <div className="px-5 my-16 hidden lg:block">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-2 static">
                        <div className="bg-white shadow-xl rounded-lg p-3 border">
                            <div className="py-2 px-2 border-b-2">
                                <p className="font-bold">Sort</p>
                            </div>
                            {/* price low to high shorting */}
                            <div className="form-control flex items-start">
                                <label className="label cursor-pointer">
                                    <input type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handlePriceLowToHigh} />
                                    <span className="label-text ml-5">Price Low - High</span>
                                </label>
                            </div>
                            <div className="form-control flex items-start">
                                <label className="label cursor-pointer">
                                    <input type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handlePriceHighToLow} />
                                    <span className="label-text ml-5">Price High - Low</span>
                                </label>
                            </div>
                            <div className="form-control flex items-start">
                                <label className="label cursor-pointer">
                                    <input type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handleBestRating} />
                                    <span className="label-text ml-5">Best Rating</span>
                                </label>
                            </div>
                            <div className="form-control flex items-start">
                                <label className="label cursor-pointer">
                                    <input type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handleShortByDiscount} />
                                    <span className="label-text ml-5">Discount</span>
                                </label>
                            </div>
                        </div>
                        {/* sort - 2 */}
                        <div>
                            <div className="flex items-center justify-center gap-4 shadow-xl border-2 px-2 py-4 my-2">
                                <input type="radio" name="sort" id="inStock" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="inStock" className="ml-2 block text-sm font-medium text-gray-700 flex-1">In Stock</label>
                            </div>
                        </div>
                        {/* Filter By Author */}
                        <div className="bg-white shadow-xl rounded-lg p-3 border">
                            <div className="py-2 px-2 border-b-2">
                                <p className="font-bold">Filter By Author</p>
                            </div>
                            {/* {
                                author?.map((author, index) => {
                                    return <div key={index}>
                                        <div className="flex items-center justify-center gap-4 my-2">
                                            <input type="checkbox" name="sort" id={author} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                            <label htmlFor={author} className="ml-2 block text-sm font-medium text-gray-700 flex-1">{author}</label>
                                        </div>
                                    </div>
                                })
                            } */}
                            {Array.from(new Set(data?.map((product) => product.author_name))).map((author_name) => (
                                <div key={author_name} className="form-control flex items-start">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            onChange={() => handleTypeFilter(author_name)}
                                            checked={selectedAuthorName.has(author_name)}
                                        />
                                        <span className="label-text ml-5">{author_name}</span>
                                    </label>
                                </div>
                            ))}

                        </div>


                    </div>
                    <div className="col-span-10">
                        <h2 className="text-2xl mb-5">{category} {data?.length}</h2>
                        <h2>{sortedAndFilteredProducts?.length}</h2>
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-3">
                            {/* {
                                data?.map(book => <Book key={book?._id} book={book}></Book>)
                            } */}
                            {sortedAndFilteredProducts?.map((book) => <Book key={book?._id} book={book}></Book>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <div>
                    <div>
                        <div className="bg-white flex items-center justify-between shadow-xl rounded-lg p-3 border">
                            <div className="py-2 px-2 border-b-2">
                                <p className="font-bold">Sort</p>
                            </div>
                            <div className="my-2">
                                <select name="sort" id="sort-select" className="focus:ring-indigo-500 h-10 text-indigo-600 border-gray-300 w-full">
                                    <option value="best-seller">Best Seller</option>
                                    <option value="low-to-high">Price Low to High</option>
                                    <option value="high-to-low">Price High to Low</option>
                                    <option value="discount">Discount</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white flex items-center justify-between shadow-xl rounded-lg p-3 border">
                                <div className="py-2 px-2 border-b-2">
                                    <p className="font-bold">Filter</p>
                                </div>
                                <div className="relative my-2">
                                    <select name="author" id="author-select" className="focus:ring-indigo-500 h-10 text-indigo-600 border-gray-300 w-full">
                                        <option value="">Select Author</option>
                                        {
                                            author?.map((author, index) => (
                                                <option key={index} value={author}>
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" name="selectedAuthors" value={author} className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300" />
                                                        <span className="ml-2">{author}</span>
                                                    </label>
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-5 mx-3">
                            <h2 className="text-2xl mb-5">{category} {data?.length}</h2>
                            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-3">
                                {
                                    data?.slice(0, dataIndex).map(book => <Book key={book?._id} book={book}></Book>)
                                }
                            </div>
                            <div className={dataIndex === data?.length ? 'hidden' : 'flex'}>
                                <button onClick={() => handleData()} className="border-green-600 px-6 py-2 border rounded-lg  mx-auto">See All</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;