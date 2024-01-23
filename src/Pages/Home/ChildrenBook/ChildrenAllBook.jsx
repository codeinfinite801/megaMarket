

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ChildrenAllBook = () => {
    const { ageRange } = useParams()
    console.log(ageRange);

    const [childrensBooks, setChildrensBooks] = useState([]);
    console.log(childrensBooks);
    useEffect(() => {
        let cancelRequest = false;

        fetch("https://mega-merket-project-server-site.vercel.app/allbooks")
            .then((response) => response.json())
            .then((data) => {
                if (!cancelRequest) {
                    console.log(data);
                    const childBooks = data?.filter(
                        (books) => books?.category === ageRange
                    );
                    setChildrensBooks(childBooks);
                }
            });

        return () => {
            cancelRequest = true;
        };
    }, [ageRange]);

    return (
        <div className='w-[100%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 p-6'>
            <div className='col-span-1 items-center justify-center text-center'>
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
                <div className='bg-white shadow-xl rounded-lg p-3 border mt-4'>
                    <div className="flex items-center justify-center gap-4  px-2">
                        <input type="radio" name="sort" id="eBook" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="eBook" className="ml-2 block text-sm font-medium text-gray-700 flex-1">eBook</label>
                    </div>
                    <div className="divider"></div>
                    <div className="flex items-center justify-center gap-4   px-2">
                        <input type="radio" name="sort" id="inStock" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label htmlFor="inStock" className="ml-2 block text-sm font-medium text-gray-700 flex-1">In Stock</label>
                    </div>
                </div>

                {/* Filter By Author */}
                <div className="bg-white shadow-xl rounded-lg p-3 border mt-4">
            <div className="py-2 px-2 border-b-2">
                <p className="font-bold">Filter By Author</p>
            </div>
            {
                childrensBooks?.map((author, index) => {
                    return <div key={index}>
                        <div className="flex items-center justify-center gap-4 my-2">
                            <input type="radio" name="sort" id={author._id} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label htmlFor={author._id}  className="ml-2 block text-sm font-medium text-gray-700 flex-1">{author.author_name}</label>
                        </div>
                    </div>
                })
            }

        </div>
            </div>

            {/* All book show here */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 col-span-3 justify-center items-center mx-auto text-center'>
                {childrensBooks?.map((book) => (
                    <div key={book._id} className='flex items-center justify-center'>
                        <div className="card w-72 h-96 bg-base-100 shadow-xl relative group">
                            <figure className="p-2">
                                <img src={book.image} alt="Book" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-xl">{book.name}</h2>
                                <p>{book.author_name}</p>
                            </div>
                            <div className="card-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="flex flex-col items-center  space-y-40">
                                        <button className="btn btn-primary">Add to Cart</button>
                                        <button className="btn btn-secondary">View Details</button>
                                       
                                    </div>

                                </div>
                            </div>
                          
                        </div>


                    </div>

                ))}
            </div>
        </div>
    );
};

export default ChildrenAllBook;

// {/* <div className="px-5 my-16">
// <div className="grid grid-cols-12 gap-2">
//     <div className="col-span-2">
//         <div className="bg-white shadow-xl rounded-lg p-3 border">
//             <div className="py-2 px-2 border-b-2">
//                 <p className="font-bold">Sort</p>
//             </div>
//             <div className="flex items-center justify-center gap-4 my-2">
//                 <input type="radio" name="sort" id="best-seller" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
//                 <label htmlFor="best-seller" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Best Seller</label>
//             </div>
//             <div className="flex items-center justify-center gap-4 my-2">
//                 <input type="radio" name="sort" id="low-to-high" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
//                 <label htmlFor="low-to-high" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Price Low to High</label>
//             </div>
//             <div className="flex items-center justify-center gap-4 my-2">
//                 <input type="radio" name="sort" id="high-to-low" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
//                 <label htmlFor="high-to-low" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Price High to Low</label>
//             </div>
//             <div className="flex items-center justify-center gap-4 my-2">
//                 <input type="radio" name="sort" id="discount" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
//                 <label htmlFor="discount" className="ml-2 block text-sm font-medium text-gray-700 flex-1">Discount</label>
//             </div>
//         </div>
//         {/* sort - 2 */}
//         <div>
//             <div className="flex items-center justify-center gap-4 shadow-xl border-2 px-2 py-4 my-2">
//                 <input type="radio" name="sort" id="inStock" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
//                 <label htmlFor="discount" className="ml-2 block text-sm font-medium text-gray-700 flex-1">In Stock</label>
//             </div>
//         </div>
//         {/* Filter By Author */}
//         <div className="bg-white shadow-xl rounded-lg p-3 border">
//             <div className="py-2 px-2 border-b-2">
//                 <p className="font-bold">Filter By Author</p>
//             </div>
//             {
//                 author?.map((author, index) => {
//                     return <div key={index}>
//                         <div className="flex items-center justify-center gap-4 my-2">
//                             <input type="checkbox" name="sort" id="best-seller" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
//                             <label htmlFor="best-seller" className="ml-2 block text-sm font-medium text-gray-700 flex-1">{author}</label>
//                         </div>
//                     </div>
//                 })
//             }

//         </div>

//     </div>
//     <div className="col-span-10">
//         <h2 className="text-2xl mb-5">{category} {data?.length}</h2>
//         <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-3">
//             {
//                 data?.map(book => <Book key={book?._id} book={book}></Book>)
//             }
//         </div>
//     </div>
// </div>
// </div>
// );
// }; */}