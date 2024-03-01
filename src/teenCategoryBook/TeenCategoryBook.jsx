import { Link } from "react-router-dom";


const TeenCategoryBook = () => {
    return (
        <div className="w-[100%] relative overflow-hidden my-5 z-10 bg-white p-6 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-6">

                <Link to={`/allBooks/${'ক্যারিয়ার সাকসেস'}`}> <button
                    className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"

                >
                   ক্যারিয়ার সাকসেস
                </button></Link>
                <Link to={`/allBooks/${'সায়েন্স ফিকশন'}`}>
                    <button
                        className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9]  bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                      সায়েন্স ফিকশন
                    </button>
                </Link>
                <Link to={`/allBooks/${'গণিত, বিজ্ঞান ও প্রযুক্তি'}`}>
                    <button
                       className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                        গণিত, বিজ্ঞান ও প্রযুক্তি
                    </button>
                </Link>
                <Link to={`/allBooks/${'জীবনী ও সাক্ষাৎকার '}`}>
                    <button className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                       জীবনী ও সাক্ষাৎকার 
                    </button>
                </Link>
                <Link to={`/allBooks/${'ইতিহাস ও ঐতিহ্য'}`}> <button
                    className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                >
                   ইতিহাস ও ঐতিহ্য
                </button></Link>
                <Link to={`/allBooks/${'রাজনীতি'}`}>
                    <button
                        className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                      রাজনীতি
                    </button>
                </Link>
                <Link to={`/allBooks/${'মুক্তিযুদ্ধ'}`}>
                    <button
                       className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                      মুক্তিযুদ্ধ
                    </button>
                </Link>
                <Link to={`/allBooks/${'পরিবার ও প্যারেন্টিং'}`}>
                    <button className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform    before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                       পরিবার ও প্যারেন্টিং
                    </button>
                </Link>
                <Link to={`/allBooks/${'পুরস্কারপ্রাপ্ত বই '}`}>
                    <button
                       className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform    before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                      পুরস্কারপ্রাপ্ত বই 
                    </button>
                </Link>
                <Link to={`/allBooks/${'ছড়া, কবিতা ও আবৃত্তি '}`}>
                    <button className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                       ছড়া, কবিতা ও আবৃত্তি 
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TeenCategoryBook;