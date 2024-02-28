import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeOnline = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/onlineBooks')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div className="bg-white my-5 px-5">
            <div className="flex items-center justify-between py-5">
                <h1>Read Book Online</h1>
                <Link to={"/onlineBooks"}>
                    <button className="border text-blue-500 px-6 py-2 border-blue-300 rounded">View All</button>
                </Link>
            </div>
            <div className="grid grid-cols-5 gap-5 items-center justify-center" >
                {
                    data?.slice(0, 5).map(book => {
                        return <Link to={`/onlineBook/${book?._id}`} key={book?._id}>
                            <div>
                                <div>
                                    <img className="h-72 rounded mx-auto" src={book?.image} alt="" />
                                    <h1 className="mt-4 text-lg pb-3">{book?.name}</h1>
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default HomeOnline;