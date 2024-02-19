import { useEffect, useState } from "react";

const BestSeller = () => {
    const [bestSell, setBestSell] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setBestSell(data))
    }, [])


    return (
        <div className="py-20">
            <h1>total user:{bestSell.length}</h1>
            {
                bestSell.map(sells => <li>{sells.name}</li>)
            }
        </div>
    );
};

export default BestSeller;