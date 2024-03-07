import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ElectricDetails from "./ElectricDetails/ElectricDetails";
import useElectronics from "../../../Hooks/useElectronics";

const SuperStoreCategory = () => {
    const {data:data2, isLoading} = useElectronics()
    const { category } = useParams();
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [sortBy, setSortBy] = useState("");

    // useEffect(() => {
    //     axiosSecure.get('/allElectronics')
    //         .then(response => {
    //             const allData = response.data.filter(item => item.category.toLowerCase() === category.toLowerCase());
    //             setData(allData);
    //             setSortedData(allData); // Initially set the sortedData to match the fetched data
    //         });
    // }, [category]);
    useEffect(() => {
                const allData =data2?.filter(item => item.category?.toLowerCase() === category?.toLowerCase());
                setData(allData);
                setSortedData(allData);

    }, [category,data2]);

    useEffect(() => {
        if (sortBy === "best-seller") {
            // Implement best seller sorting logic
        } else if (sortBy === "low-to-high") {
            const sorted = data.slice().sort((a, b) => a.price - b.price);
            setSortedData(sorted);
        } else if (sortBy === "high-to-low") {
            const sorted = data.slice().sort((a, b) => b.price - a.price);
            setSortedData(sorted);
        } else if (sortBy === "discount") {
            const sorted = data.slice().sort((a, b) => b.discount - a.discount); // Change this line
            setSortedData(sorted);
        }
    }, [data, sortBy]);


    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortBy(value);
    };

    return (
        <div className="px-5 my-16">
            <div className="lg:block hidden md:block ">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-2 static">
                        <div className="bg-white shadow-xl rounded-lg p-3 border">
                            <div className="py-2 px-2 border-b-2">
                                <p className="font-bold">Sort</p>
                            </div>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <input type="radio" name="sort" id="low-to-high" value="low-to-high" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handleSortChange} />
                                <label htmlFor="low-to-high" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Price Low to High</label>
                            </div>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <input type="radio" name="sort" id="high-to-low" value="high-to-low" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handleSortChange} />
                                <label htmlFor="high-to-low" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Price High to Low</label>
                            </div>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <input type="radio" name="sort" id="discount" value="discount" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handleSortChange} />
                                <label htmlFor="discount" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Discount</label>
                            </div>
                        </div>
                        {/* Filter options */}
                        <div>
                            <div className="flex items-center justify-center gap-4 shadow-xl border-2 px-2 py-4 my-2">
                                <input type="radio" name="sort" id="inStock" value="inStock" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" onChange={handleSortChange} />
                                <label htmlFor="inStock" className="ml-2 block text-sm font-medium text-gray-700 flex-1">In Stock</label>
                            </div>
                        </div>
                    </div>
                    {
                        isLoading ? <div className="flex col-span-10 items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div> : <div className="col-span-10">
                        <h2 className="text-2xl mb-5">{category} {sortedData?.length}</h2>
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3">
                            {sortedData?.map(electric => <ElectricDetails key={electric?._id} electric={electric}></ElectricDetails>)}
                        </div>
                    </div>
                    }
                </div>
            </div>

            <div className="lg:hidden">
                <div>
                    <div className="bg-white flex items-center justify-between shadow-xl rounded-lg p-3 border">
                        <div className="py-2 px-2 border-b-2">
                            <p className="font-bold">Sort</p>
                        </div>
                        <div className="my-2">
                            <select name="sort" id="sort-select" className="focus:ring-indigo-500 h-10 text-indigo-600 border-gray-300 w-full" onChange={handleSortChange}>

                                <option value="low-to-high">Price Low to High</option>
                                <option value="high-to-low">Price High to Low</option>
                                <option value="discount">Discount</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-5 mx-3">
                        <h2 className="text-2xl mb-5">{category} {sortedData?.length}</h2>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
                            {sortedData?.map(electric => <ElectricDetails key={electric?._id} electric={electric}></ElectricDetails>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperStoreCategory;
