import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAllBooks from "../../../Hooks/useAllBooks";

const AllAuthorCategory = () => {
    const {data:authorData} = useAllBooks()
    console.log(authorData);
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://mega-merket-project-server-site.vercel.app/allbooks')
            .then(res => res.json())
            .then(data => {
                const uniqueAuthors = data.reduce((acc, curr) => {
                    const existingAuthor = acc.find(item => item.author_name === curr.author_name);
                    if (!existingAuthor) {
                        acc.push(curr);
                    }
                    return acc;
                }, []);

                setData(uniqueAuthors);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    if (!data) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
    return (
        <div className="bg-white my-5 px-5">
            <div className="flex items-center justify-between my-5 pl-2 text-xl border-l-4 border-l-red-800">
                <h1 className="font-bold">All Author</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-center">
                {
                    data?.map(book => {
                        return (
                            <div key={book?._id} className="relative bg-gray-100 h-52 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <Link to={`/authorbooks/${book?.author_name}`} className="block w-full px-3 py-4">
                                    <img src={book?.author_image} alt={book?.author_name} className="w-1/2 rounded-full mb-4 h-34 mx-auto" />
                                    <h1 className="text-sm font-semibold text-black text-center">{book?.author_name}</h1>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>



    );
};

export default AllAuthorCategory;