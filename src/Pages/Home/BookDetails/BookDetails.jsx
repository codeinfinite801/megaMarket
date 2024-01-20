import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router";
import useBooks from "../../../Hooks/useBooks";
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, TabList, Tab, PanelList, Panel } from 'react-tabtab';
import advertiseImg from '../../../assets/advertiseimg.webp';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})

    const { image, name, price, author_name, author_image, author_details, category, discount, rating, quantity, read_book, publisher, country, language, isNew, edition_date, total_pages, summary } = book;
    const discountedPrice = (price - (price * discount) / 100).toFixed(2);
    const { data, refetch } = useBooks({ category })

    useEffect(() => {
        fetch(`https://maga-market-server-eta.vercel.app/allBooks/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    })
    return (
            <div className="grid grid-cols-12 gap-14 mx-14">
                <div className="col-span-9">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="flex justify-between gap-8">
                            <div className="p-5 w-2/6 border shadow-md rounded-lg">
                                <h2 className="mb-2 text-right text-lg font-semibold"> একটু পড়ে দেখুন</h2>
                                <img className="w-full rounded-md" src={image} alt="" />
                            </div>
                            <div className="w-[60%]">
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <p className="text-md mt-1">By <span className="font-semibold text-blue-400">{author_name}</span></p>
                                <p className="text-sm text-gray-600 text-blue-400 mt-1">{category}</p>
                                <div className="flex items-center  text-gray-600 mt-2">
                                    <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                    <span className="ml-2">({rating}) Ratings</span>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <p className="text-gray-500"><span className="line-through">TK{price}</span></p>
                                    <p className="font-bold text-lg text-red-500">TK.{discountedPrice}</p>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <img src="https://www.rokomari.com/static/200/images/svg/in-stock(mini).svg" alt="" />
                                    <span className="text-sm">In Stock </span>
                                    <span className="text-sm">
                                        ( {quantity} Copies Available)
                                    </span>
                                </div>
                                <p className="text-sm mt-2 italic">স্টক আউট হওয়ার আগেই অর্ডার করুন</p>
                                <div className="flex items-center gap-10 mt-4">
                                    <button className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-600 hover:text-white transition duration-300">একটু পড়ে দেখুন </button>
                                    <button className="flex items-center justify-center gap-4 bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition duration-300">
                                        <FaShoppingCart></FaShoppingCart>
                                        <span>Add To Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-span-3">
                    <div>
                        {
                            data?.slice(0, 5).map((book, index) => {
                                return <div key={index}>
                                    <Link to={`/bookDetails/${book?._id}`}>
                                        <div className="flex mb-2">
                                            <div className="w-1/2 ">
                                                <img className="w-[70px] h-[100px]" src={book?.image} alt="" />
                                            </div>
                                            <div className="text-left flex-1">
                                                <h2 className=" text-sm font-semibold mb-2 mt-4">{book?.name}</h2>
                                                <h3 className=" text-gray-600 text-sm">{book?.author_name}</h3>
                                                <p className=" flex items-center text-gray-600">
                                                    <img className="w-24" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                                                    <span>({book?.rating})</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
                
            </div>

        

    )
};

export default BookDetails;