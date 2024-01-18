import { useEffect, useState } from "react";
import { useParams } from "react-router";


const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})
    const { image, name, price ,author_name,author_image,author_details,category,discount,rating,quantity,read_book,publisher,country,language,isNew,edition_date,total_pages,summary} = book;
    useEffect(() => {
        fetch(`https://maga-market-server-eta.vercel.app/allBooks/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    })
    return (
        <div className="max-w-[1000px] mx-auto">
            <div className="flex justify-between gap-8">
                <div className="w-[40%] p-10 border">
                    <h2 className="mb-2"> একটু পড়ে দেখুন</h2>
                    <img className="w-full h-[400px]" src={image} alt="" />
                </div>
                <div className="w-[60%]">
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;