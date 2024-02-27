import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../Book/Book";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import ElectricDetails from "./ElectricDetails/ElectricDetails";



const SuperStoreCategory = () => {
    const axiosSecure = useAxiosSecure()
    const { category } = useParams();
    const [data, setData] = useState([])

    const [author, setAuthor] = useState([])

    useEffect(() => {
        axiosSecure.get('/allElectronics')
            .then(item => {
                console.log(item.data);
                const allData = item?.data.filter(fillItem => fillItem?.category.toLowerCase() === category.toLowerCase())
                setData(allData)
                console.log(allData);
            })
    }, [axiosSecure,category]);
    return (
        <div className="px-5 my-16">
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


                </div>
                <div className="col-span-10">
                    <h2 className="text-2xl mb-5">{category} {data?.length}</h2>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-3">
                        {
                            data?.map(electric => <ElectricDetails key={electric?._id} electric={electric}></ElectricDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperStoreCategory;