import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../Book/Book";
import useBooks from "../../../Hooks/useBooks";


const Books = () => {
    const { category } = useParams();
    const { data} = useBooks({ category })
    console.log(data);
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
    return (
        <div>
            <div className="px-5 my-16 hidden lg:block">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-2 static">
                        <div className="bg-white shadow-xl rounded-lg p-3 border">
                            <div className="py-2 px-2 border-b-2">
                                <p className="font-bold">Sort</p>
                            </div>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <input type="radio" name="sort" id="best-seller" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="best-seller" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Best Seller</label>
                            </div>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <input type="radio" name="sort" id="low-to-high" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="low-to-high" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Price Low to High</label>
                            </div>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <input type="radio" name="sort" id="high-to-low" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="high-to-low" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Price High to Low</label>
                            </div>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <input type="radio" name="sort" id="discount" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label htmlFor="discount" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Discount</label>
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
                            {
                                author?.map((author, index) => {
                                    return <div key={index}>
                                        <div className="flex items-center justify-center gap-4 my-2">
                                            <input type="checkbox" name="sort" id={author} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                            <label htmlFor={author} className="ml-2 block text-sm font-medium text-gray-700 flex-1">{author}</label>
                                        </div>
                                    </div>
                                })
                            }

                        </div>


                    </div>
                    <div className="col-span-10">
                        <h2 className="text-2xl mb-5">{category} {data?.length}</h2>
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-3">
                            {
                                data?.map(book => <Book key={book?._id} book={book}></Book>)
                            }
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