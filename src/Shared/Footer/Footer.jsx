import { FaDollarSign, FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare, FaWhatsapp, FaYoutubeSquare } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdAssignmentReturn } from "react-icons/md";
import { TbBus } from "react-icons/tb";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-16">
            <div className="md:flex hidden mx-auto w-10/12 justify-center gap-10">
                <div className="flex gap-2">
                    <div className="flex justify-center items-center">
                        <h2><FaDollarSign className="text-3xl text-green-500"></FaDollarSign></h2>
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">Cash on delivery</h1>
                        <p className="text-gray-600">Pay cash at your doorstep service</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center">
                        <h2><TbBus className="text-3xl text-blue-500"></TbBus></h2>
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">Delivery</h1>
                        <p className="text-gray-600">All over Bangladesh</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center">
                        <h2><MdAssignmentReturn className="text-3xl text-red-500 animate-spin"></MdAssignmentReturn></h2>
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">Happy return</h1>
                        <p className="text-gray-600">7 days return facility</p>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="bg-white flex justify-center mt-10 mb-4 px-2">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 gap-y-3 px-4">
                    <div className="mb-5">
                        <div className="flex md:justify-start justify-center">
                            <Link to='/'>
                                <img className="w-[90px] h-[70px] mb-2" src="https://i.postimg.cc/Bn1xYC9C/417533939-1451020992427951-1786153557459718164-n-removebg-preview-1-removebg-preview.png" alt="" />
                            </Link>
                        </div>
                        <div className="flex gap-1">

                            <div>
                                <span><FaWhatsapp className="text-3xl font-semibold"></FaWhatsapp></span>
                            </div>
                            <div>
                                <h2 className="font-semibold text-[13px] mb-2">Customer Care </h2>
                                <p className="text-[12px]">012455425252</p>
                                <h1 className="text-[12px]">Email: codeinfinite801@gmail.com </h1>
                            </div>

                        </div>
                        <div className="mt-8">

                            <div className="flex gap-2">
                                <div className="flex justify-center items-center">
                                    <span><FaHandshakeSimple className="text-3xl font-semibold"></FaHandshakeSimple></span>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-[14px]">To be a seller! Email Us </h1>
                                    <p className="text-[13px]">seller@megaMarket.com</p>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-5">
                                <div className="flex justify-center">
                                    <span><FaHandshakeSimple className="text-3xl font-semibold"></FaHandshakeSimple></span>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-[14px]">Corporate Sales Only</h1>
                                    <p className="text-[13px]"> 01708166238 <span>(Whatsapp)</span></p>
                                    <p className="text-[13px]">sales@rokomari.com</p>
                                    <p className="text-[13px]">(E.g. Pharmaceuticals, Banks, Insurances<br></br> & other Corporate Houses)</p>
                                </div>
                            </div>
                            <div className="flex gap-2 my-5">
                                <div className="flex justify-center">
                                    <span><FaHandshakeSimple className="text-3xl font-semibold"></FaHandshakeSimple></span>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-[14px]">Retailer Only </h1>
                                    <p className="text-[13px]">01708166261<span>(Whatsapp Message)</span></p>
                                    <p className="text-[13px]">wholesale@rokomari.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <div className="leading-6">
                                <header className="footer-title text-[14px]">Home</header>
                                <p><a className="link link-hover text-[13px]">Books</a></p>
                                <p><a className="link link-hover text-[13px]">Electronics</a></p>
                                <p><a className="link link-hover text-[13px]">Accessories</a></p>
                                <p><a className="link link-hover text-[13px]">Gift Cards</a></p>
                                <p><a className="link link-hover text-[13px]">Stationery</a></p>
                            </div>
                            <div className="leading-6 mt-8">
                                <header className="footer-title text-[14px]">Shop by</header>
                                <p><a className="link link-hover text-[13px]">Book Category</a></p>
                                <p><a className="link link-hover text-[13px]">Electronic Category</a></p>
                                <p><a className="link link-hover text-[13px]">Islamic Book</a></p>
                                <p><a className="link link-hover text-[13px]">Pre Order</a></p>
                                <p><a className="link link-hover text-[13px]">Foreign Books</a></p>
                                <p><a className="link link-hover text-[13px]">Best Selling</a></p>
                                <p><a className="link link-hover text-[13px]">Extra Discount</a></p>
                                <p><a className="link link-hover text-[13px]">Stationery</a></p>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <div className="">
                                <header className="footer-title text-[14px]">Products</header>
                                <p><a className="link link-hover text-[13px]">Authors</a></p>
                                <p><a className="link link-hover text-[13px]">Publishers</a></p>
                                <p> <a className="link link-hover text-[13px]">List</a></p>
                                <p> <a className="link link-hover text-[13px]">Reviews</a></p>
                            </div>
                            <div className="leading-6 mt-8">
                                <header className="footer-title text-[14px]">Support</header>
                                <p><a className="link link-hover text-[13px]">Order Track</a></p>
                                <p><a className="link link-hover text-[13px]">Contact Us</a></p>
                                <p><a className="link link-hover text-[13px]">Find My Product</a></p>
                                <p><a className="link link-hover text-[13px]">Customer FAQ</a></p>
                                <p><a className="link link-hover text-[13px]">Help Desk</a></p>
                                <p><a className="link link-hover text-[13px]">Writer/Publisher Request</a></p>
                                <p><a className="link link-hover text-[13px]">Retailer Request</a></p>
                            </div>
                            <div className="mt-8">
                                <header className="footer-title text-[14px]">Stay Connected</header>
                                <div className="flex text-[22px] gap-2">
                                    <a><FaFacebookSquare></FaFacebookSquare></a>
                                    <a><FaTwitterSquare></FaTwitterSquare></a>
                                    <a><FaYoutubeSquare></FaYoutubeSquare></a>
                                    <a><FaLinkedinIn></FaLinkedinIn></a>
                                    <a><FaInstagramSquare></FaInstagramSquare></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <div>
                                <header className="footer-title text-[14px]">Get to Know</header>
                                <p><a className="link link-hover text-[13px]">About us</a></p>
                                <p><a className="link link-hover text-[13px]">Site Map</a></p>
                            </div>
                            <div className="leading-6 mt-8">
                                <header className="footer-title text-[14px]">Policies</header>
                                <p><a className="link link-hover text-[13px]">Terms of Use</a></p>
                                <p><a className="link link-hover text-[13px]">Privacy Policy</a></p>
                                <p><a className="link link-hover text-[13px]">Happy Return Policy</a></p>
                                <p><a className="link link-hover text-[13px]">Refund Policy</a></p>
                            </div>
                            <div className="leading-6 mt-8">
                                <header className="footer-title text-[14px]">Download App</header>
                                <div className="leading-5">
                                    <img className="w-[150px]" src="https://i.postimg.cc/NfHsZr11/Download-on-the-App-Store-Badge-svg-removebg-preview.png" alt="" />
                                    <img className="w-[150px]" src="https://i.postimg.cc/MTKYPQFw/download-4-1-removebg-preview.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Mega Market Online Shop</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
