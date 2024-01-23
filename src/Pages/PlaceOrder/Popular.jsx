import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Popular = () => {
  
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://maga-market-server-eta.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    // gjkghkjj
    console.log(categories);


    return (
        <div className="flex gap-3 mt-5">
            {
                categories.slice(5, 10).map((category) => <Link to={`/bookDetails/${category._id}`}>
                    <div key={category.id} className="card shadow-xl">
                        <figure><img className="bg-white" src={category.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category.category}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default Popular;