import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-[100%] mt-10 p-4">
            <img src="https://i.ibb.co/HhjDZ7N/error-2.png" alt="A Boy Reading book" className="w-[50%] h-[440px] justify-center mx-auto bg-white " />
            <h3 className="text-xl text-center mt-5"><span className="text-red-600 text-3xl">This page is not available.</span> <br/> Maybe it’s busy reading books.<br/> You can try refreshing the page or checking your internet connection.</h3>

            <p className="text-xl text-center mt-4">or try our <Link className="underline text-red-500" to="/">Home Page</Link></p>
        </div>
    );
};

export default ErrorPage;