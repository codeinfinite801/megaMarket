import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BookCategory = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories);
    useEffect(() => {
        fetch('https://maga-market-server-eta.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="my-16">
            <h2 className="text-2xl font-bold mb-5">Shop By Book Category {categories.length}</h2>
            <div className="grid grid-cols-5 gap-5">
                {
                    categories.map(category => <Link key={category._id} to={`/allBooks/${category?.category}`}><div className="border hover:text-red-400 cursor-pointer" >
                    <img className="w-full" src={category?.image} alt="" />
                    <h2 className="text-center px-2 py-4">{category?.category}</h2>
                </div></Link>)
                }
            </div>
        </div>
    );
};

export default BookCategory;