import { FaDollarSign, FaFacebookSquare, FaHome, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare, FaWhatsapp, FaYoutubeSquare } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdAssignmentReturn, MdEmail } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="mt-10">
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
            <div className="bg-white flex mt-10 gap-8">
                {/* nav */}
                <div>
                    <div className="flex md:justify-start justify-center">
                        <img className="w-[150px] h-[70px] mb-5" src="https://i.postimg.cc/Bn1xYC9C/417533939-1451020992427951-1786153557459718164-n-removebg-preview-1-removebg-preview.png" alt="" />
                    </div>
                    <div className="flex gap-2 mb-5">
                        <div className="flex gap-2">
                            <span><FaWhatsapp className="text-3xl font-semibold"></FaWhatsapp></span>
                        </div>
                        <div>
                            <h2 className="font-semibold">Customer Care </h2>
                            <p>012455425252</p>
                            <h1>Email: codeinfinite801@gmail.com </h1>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex justify-center items-center">
                            <span><FaHandshakeSimple className="text-3xl font-semibold"></FaHandshakeSimple></span>
                        </div>
                        <div>
                            <h1 className="font-semibold">To be a seller! Email Us </h1>
                            <p>seller@megaMarket.com</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <div className="flex justify-center">
                            <span><FaHandshakeSimple className="text-3xl font-semibold"></FaHandshakeSimple></span>
                        </div>
                        <div>
                            <h1 className="font-semibold">Corporate Sales Only</h1>
                            <p> 01708166238 <span>(Whatsapp Message)</span></p>
                            <p>sales@rokomari.com</p>
                            <p>(E.g. Pharmaceuticals, Banks, Insurances<br></br> & other Corporate Houses)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <div className="flex justify-center">
                            <span><FaHandshakeSimple className="text-3xl font-semibold"></FaHandshakeSimple></span>
                        </div>
                        <div>
                            <h1 className="font-semibold">Retailer Only </h1>
                            <p>01708166261<span>(Whatsapp Message)</span></p>
                            <p>wholesale@rokomari.com</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <div className="flex justify-center items-center">
                            <span><FaHome className="text-3xl font-semibold"></FaHome></span>
                        </div>
                        <div>
                            <h1>2/1/E, Eden Center, Arambag, Motijheel</h1>
                            <p>Dhaka-1000</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <div className="flex justify-center items-center">
                            <span><MdEmail className="text-3xl font-semibold"></MdEmail></span>
                        </div>
                        <div>
                            <h1 className="font-semibold">Email Us:</h1>
                            <p>codeinfinite801@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="grid grid-cols-4 gap-x-10 gap-y-3">
                    <div className="hidden md:flex">
                        <div>
                            <header className="footer-title">Home</header>
                            <p><a className="link link-hover">Books</a></p>
                            <p><a className="link link-hover">Electronics</a></p>
                            <p><a className="link link-hover">Accessories</a></p>
                            <p><a className="link link-hover">Gift Cards</a></p>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div className="">
                            <header className="footer-title">Products</header>
                            <p><a className="link link-hover">Authors</a></p>
                            <p><a className="link link-hover">Publishers</a></p>
                            <p> <a className="link link-hover">List</a></p>
                            <p> <a className="link link-hover">Reviews</a></p>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <header className="footer-title">Get to Know</header>
                            <p><a className="link link-hover">About us</a></p>
                            <p><a className="link link-hover">Site Map</a></p>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <header className="footer-title">Stay Connected</header>
                            <div className="grid grid-flow-col gap-4 text-3xl">
                                <a><FaFacebookSquare></FaFacebookSquare></a>
                                <a><FaTwitterSquare></FaTwitterSquare></a>
                                <a><FaYoutubeSquare></FaYoutubeSquare></a>
                                <a><FaLinkedinIn></FaLinkedinIn></a>
                                <a><FaInstagramSquare></FaInstagramSquare></a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <header className="footer-title">Shop by</header>
                            <p><a className="link link-hover">Book Category</a></p>
                            <p><a className="link link-hover">Electronic Category</a></p>
                            <p><a className="link link-hover">Islamic Book</a></p>
                            <p><a className="link link-hover">Pre Order</a></p>
                            <p><a className="link link-hover">Foreign Books</a></p>
                            <p><a className="link link-hover">Best Selling</a></p>
                            <p><a className="link link-hover">Extra Discount</a></p>
                            <p><a className="link link-hover">Stationery</a></p>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <header className="footer-title">Support</header>
                            <p><a className="link link-hover">Order Track</a></p>
                            <p><a className="link link-hover">Contact Us</a></p>
                            <p><a className="link link-hover">Find My Product</a></p>
                            <p><a className="link link-hover">Customer FAQ</a></p>
                            <p><a className="link link-hover">Help Desk</a></p>
                            <p><a className="link link-hover">Writer/Publisher Request</a></p>
                            <p><a className="link link-hover">Retailer Request</a></p>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <header className="footer-title">Policies</header>
                            <p><a className="link link-hover">Terms of Use</a></p>
                            <p><a className="link link-hover">Privacy Policy</a></p>
                            <p><a className="link link-hover">Happy Return Policy</a></p>
                            <p><a className="link link-hover">Refund Policy</a></p>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <header className="footer-title">Download App</header>
                            <div className="">
                                <img src="https://i.postimg.cc/NfHsZr11/Download-on-the-App-Store-Badge-svg-removebg-preview.png" alt="" />
                                <img src="https://i.postimg.cc/MTKYPQFw/download-4-1-removebg-preview.png" alt="" />
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
