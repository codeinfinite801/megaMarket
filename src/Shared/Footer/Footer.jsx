import { FaDollarSign, FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div className="md:flex hidden mx-auto w-10/12 justify-center gap-10">
                <div className="flex gap-2">
                    <div className="flex justify-center items-center">
                        <h2><FaDollarSign className="text-3xl"></FaDollarSign></h2>
                    </div>
                    <div>
                        <h1>Cash on delivery</h1>
                        <p>Pay cash at your doorstep service</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center">
                        <h2><TbBus className="text-3xl"></TbBus></h2>
                    </div>
                    <div>
                        <h1>Delivery</h1>
                        <p>All over Bangladesh</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <div className="flex justify-center items-center">
                        <h2><AiOutlineLoading3Quarters className="text-3xl"></AiOutlineLoading3Quarters></h2>
                    </div>
                    <div>
                        <h1>Happy return</h1>
                        <p>7 days return facility</p>
                    </div>
                </div>
            </div>
            <footer className="footer p-10 bg-white text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="hidden md:flex">
                    <div>
                        <header className="footer-title">Home</header>
                        <p><a className="link link-hover">Books</a></p>
                        <p><a className="link link-hover">Electronics</a></p>
                        <p><a className="link link-hover">Accessories</a></p>
                        <p><a className="link link-hover">Gift Cards</a></p>
                    </div>
                </nav>
                <nav className="hidden md:flex">
                    <div className="">
                        <header className="footer-title">Products</header>
                        <p><a className="link link-hover">Authors</a></p>
                        <p><a className="link link-hover">Publishers</a></p>
                        <p> <a className="link link-hover">List</a></p>
                        <p> <a className="link link-hover">Reviews</a></p>
                    </div>
                </nav>
                <nav className="hidden md:flex">
                    <div>
                        <header className="footer-title">Get to Know</header>
                        <p><a className="link link-hover">About us</a></p>
                        <p><a className="link link-hover">Site Map</a></p>
                        <p><a className="link link-hover">Jobs</a></p>
                        <p><a className="link link-hover">Press kit</a></p>
                    </div>
                </nav>
                <nav className="hidden md:flex">
                    <div>
                        <header className="footer-title">Social</header>
                        <div className="grid grid-flow-col gap-4 text-3xl">
                            <a><FaFacebookSquare></FaFacebookSquare></a>
                            <a><FaTwitterSquare></FaTwitterSquare></a>
                            <a><FaYoutubeSquare></FaYoutubeSquare></a>
                            <a><FaLinkedinIn></FaLinkedinIn></a>
                            <a><FaInstagramSquare></FaInstagramSquare></a>
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;