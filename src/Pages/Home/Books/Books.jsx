import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {
    const {category} = useParams();
    const [books , setBooks] = useState([])
    useEffect(()=>{
        fetch(`https://maga-market-server-eta.vercel.app/allBooks?category=${category}`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[category])
    return (
        <div className="px-5 my-16">
            <h2 className="text-2xl mb-5">{category} {books.length}</h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-3">
                {
                    books?.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;