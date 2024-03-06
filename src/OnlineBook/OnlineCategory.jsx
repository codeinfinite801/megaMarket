import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const OnlineCategory = () => {
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
            <div className="flex items-center justify-between my-5 pl-2 text-xl border-2 border-l-red-800">
                <h1>Download Free Book</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center justify-center" >
                {data?.map((deal) => <div key={deal?._id} className='flex items-center justify-center'>
                    <div className="rounded duration-300 bg-gray-100 w-80 border hover:border-black  relative group">
                        <figure className="px-2 pt-4">
                            <img src={deal.image} alt="image" className=" w-full h-72 " />
                        </figure>
                        <div className=" my-4 text-center">
                            <h2 className="">{deal?.name}</h2>
                        </div>
                        <div className="mx-1 pb-2">
                            <Link to={deal?.pdf} className="flex items-center justify-center gap-2 text-center mx-auto w-full bg-[#f3a3a3] py-2 mb-2 text-white">
                                <FaDownload
                                ></FaDownload>
                                <p>Download Now</p>
                            </Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default OnlineCategory;