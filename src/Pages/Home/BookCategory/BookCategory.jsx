import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const BookCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
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