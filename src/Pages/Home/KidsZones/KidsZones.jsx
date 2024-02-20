import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KidZone from "../KidZone/KidZone";


const KidsZones = () => {
    const { category } = useParams();
    const [kids, setKids] = useState([]);

    useEffect(() => {
        fetch(`https://maga-market-server-eta.vercel.app/kidsZone?category=${category}`)
            .then(res => res.json())
            .then(data => setKids(data))
    }, [category])

    // const { data, refetch } = useBooks({ category })
    const [brand, setBrand] = useState([])

    useEffect(() => {
        if (kids) {
            const brandList = kids.reduce((acc, kid) => {
                if (kid?.brand && !acc.includes(kid.brand)) {
                    return [...acc, kid.brand];
                }
                return acc;
            }, []);

            setBrand(brandList);
        }
    }, [kids]);
    return (
        <div className="px-5 my-16">
            <div className="grid grid-cols-12 gap-2">
                <div className="lg:col-span-2 md:col-span-4 col-span-12">
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
                            <label htmlFor="discount" className="ml-2 block text-sm font-medium text-gray-700 flex-1">In Stock</label>
                        </div>
                    </div>
                    {/* Filter By Brand */}
                    <div className="bg-white shadow-xl rounded-lg p-3 border">
                        <div className="py-2 px-2 border-b-2">
                            <p className="font-bold">Filter By Brand</p>
                        </div>
                        {
                            brand?.map((item, index) => {
                                return <div key={index}>
                                    <div className="flex items-center justify-center gap-4 my-2">
                                        <input type="checkbox" name="sort" id="best-seller" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                        <label htmlFor="best-seller" className="ml-2 block text-sm font-medium text-gray-700 flex-1">{item}</label>
                                    </div>
                                </div>
                            })
                        }

                    </div>

                </div>
                <div className="lg:col-span-10 md:col-span-8 col-span-12">
                    <h2 className="text-2xl mb-5">{category} {kids?.length}</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-3">
                        {
                            kids?.map(kid => <KidZone key={kid?._id} kid={kid}></KidZone>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsZones;