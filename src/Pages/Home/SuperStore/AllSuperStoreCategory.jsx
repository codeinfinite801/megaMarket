import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSuperStoreCategory = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/superstore')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (

        <div className="bg-white my-5 px-5">
            <div className="flex items-center justify-between my-5 pl-2 text-xl border-l-4 border-l-red-800">
                <h1 className="font-bold">All Superstore Category</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-center">
                {
                    data?.map(book => {
                        return (
                            <div key={book?._id} className="relative bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <Link to={`/superstore/${book?.name}`} className="block w-full px-3 py-4">
                                    <img src={book?.image} alt={book?.name} className="w-1/2 h-34 mx-auto" />
                                    <h1 className="text-sm font-semibold text-black text-center">{book?.name}</h1>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>



    );
};

export default AllSuperStoreCategory;