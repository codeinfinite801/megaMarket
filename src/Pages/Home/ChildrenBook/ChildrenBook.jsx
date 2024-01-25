
import { Link} from 'react-router-dom';


const ChildrenBook = () => {
    return (
        <div className="w-[100%] relative overflow-hidden my-5 z-10 bg-white p-6 mb-5">
            <h2>Children Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">

                <Link to={`/childrenAllBooks/${'When 0-4: Primary Learning'}`}> <button
                    className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"

                >
                    ০-৪ বছর
                </button></Link>
                <Link to={`/childrenAllBooks/${'বয়স যখন ৪-৮'}`}>
                    <button
                        className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                        ৪-৮ বছর
                    </button>
                </Link>
                <Link to={`/childrenAllBooks/${'বয়স যখন ৮-১২'}`}>
                    <button
                       className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                        ৮-১২ বছর
                    </button>
                </Link>
                <Link to={`/childrenAllBooks/${'বয়স যখন ১২-১৭'}`}>
                    <button className=" relative px-4 py-3 rounded-lg  w-full border-2 border-[#b6dde9] bg-transparent transition-colors  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0  before:bg-[#4da2f1] before:transition-transform   before:duration-500  before:contents-[''] hover:text-white  before:hover:scale-x-100"
                    >
                        ১২-১৭ বছর
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ChildrenBook;
