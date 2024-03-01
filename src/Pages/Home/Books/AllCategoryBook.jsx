import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategoryBook = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (

        <div className="bg-white my-5 px-5">
            <div className="flex items-center justify-between my-5 pl-2 text-xl border-l-4 border-l-red-800">
                <h1 className="font-bold">All Category Books</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-center">
                {
                    data?.map(book => {
                        return (
                            <div key={book?._id} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <Link to={`/allbooks/${book?.category}`} className="block">
                                    <div className="relative">
                                        <img className=" w-full" src={book?.image} alt={book?.name} />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                            <h1 className="text-lg font-semibold text-white text-center">{book?.name}</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>



    );
};

export default AllCategoryBook;