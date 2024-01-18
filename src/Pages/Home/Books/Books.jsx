import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {
    const {category} = useParams();
    const [books , setBooks] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allBooks?category=${category}`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[category])
    return (
        <div>
            <h2>{category} {books.length}</h2>
            <div className="grid grid-cols-5 gap-5">
                {
                    books?.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;