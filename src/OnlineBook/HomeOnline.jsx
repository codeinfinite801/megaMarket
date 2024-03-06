import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { IoEyeOutline } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";

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
        <div className="bg-white my-5  px-4">
            <div className="flex items-center justify-between py-5">
                <h1>Download Free Book</h1>
            </div>
            <div className="lg:grid md:grid grid-cols-12  gap-4">
                <div className="col-span-4 mb-2">
                    <div className="flex flex-col px-2 items-center justify-center bg-[#cc00ff21] h-full">
                        <img src="https://i.ibb.co/qYJ9ZkS/Screenshot-1.png" alt="" />
                        <h1 className="lg:text-3xl md:text-lg">Get Our Free Book Now</h1>
                        <p className="lg:text-2xl md:text-base"><span className="text-[#ff7272] font-bold">Download</span> It Now !!</p>
                        <Link className="bg-[#f3a3a3] text-white hover:bg-red-600 duration-200   rounded px-6 py-2 my-4" to={"/onlineBooks"}>View All</Link>
                    </div>
                </div>
                <div className="col-span-8 mb-2">
                    <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2 '>
                        {data?.slice(0, 8).map((deal) => <div key={deal?._id} className='flex items-center justify-center'>
                            <div className="rounded duration-300 bg-gray-100 w-80 border hover:border-black  relative group">
                                <figure className="px-2 pt-4">
                                    <img src={deal.image} alt="image" className="w-full lg:h-52 md:h-52 " />
                                </figure>
                                <div className=" my-4 text-center">
                                    <h2 className="">{deal?.name}</h2>
                                </div>
                                <div className="mx-1 pb-2">
                                    <Link to={deal?.pdf} className="flex hover:bg-red-600 duration-200  items-center justify-center gap-2 text-center mx-auto w-full bg-[#f3a3a3] py-2 mb-2 text-white">
                                        <FaDownload></FaDownload>
                                        <p className="text-base md:text-sm">Download Now</p>
                                    </Link>
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOnline;
