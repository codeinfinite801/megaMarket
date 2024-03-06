import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from 'react-icons/fa';

const HomeOnline = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/onlineBooks')
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <div className="bg-white my-5 px-5">
            <div className="flex items-center justify-between py-5">
                <h1>Download Free Book</h1>
                <Link to={"/onlineBooks"}>
                    <button className="border hover:bg-blue-500 hover:text-white duration-300 text-blue-500 px-6 py-2 border-blue-300 rounded">View All</button>
                </Link>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-5 items-center justify-center">
                {data?.slice(0, 5).map(book => (
                    <div key={book?._id} className="bg-gray-100 py-3 px-2 rounded-lg relative">
                        <Link>
                            <div>
                                <div className="relative">
                                    <img className="h-72 w-48 rounded mx-auto" src={book?.image} alt="" />
                                    <h1 className="mt-4 text-center lg:text-left text-lg pb-3">{book?.name}</h1>
                                </div>
                                <div className="text-black hero-overlay bg-opacity-60 top-0 w-full h-full absolute z-20">
                                    <div className="flex items-end h-full">
                                        <Link className="w-full flex gap-3 items-center justify-center text-center bg-purple-400 py-3 rounded text-white">
                                            <FaDownload></FaDownload>
                                            <button>Download</button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeOnline;
