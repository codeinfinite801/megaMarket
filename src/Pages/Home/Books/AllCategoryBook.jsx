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
            <div className="flex items-center justify-between my-5 pl-2 text-xl border-2 border-l-red-800">
                <h1>Read Book Online</h1>
            </div>
            <div className="grid grid-cols-5 gap-5 items-center justify-center" >
                {
                    data?.map(book => {
                        return <div key={book?._id}>
                            <Link to={`/onlineBook/${book?._id}`}>
                                <div>
                                    <img className="h-72 rounded" src={book?.image} alt="" />
                                    <h1 className="mt-4 text-lg pb-3">{book?.name}</h1>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllCategoryBook;