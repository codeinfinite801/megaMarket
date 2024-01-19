import React, { useState } from 'react';
import ChildrenAllBook from './ChildrenAllBook';
import { Link, useNavigate } from 'react-router-dom';

const ChildrenBook = () => {
    const navigate = useNavigate();
    const [selectedAgeRange, setSelectedAgeRange] = useState(null);
    console.log(selectedAgeRange);

    // const handleButtonClick = (ageRange) => {
    //     setSelectedAgeRange(ageRange);
    //     navigate("/childrenAllBooks");
    // };

    return (
        <div className="w-[100%] my-5 bg-white p-6 mb-5">
            <h2>Children Book</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
             
                   <Link to={`/childrenAllBooks/${'When 0-4: Primary Learning'}`}> <button
                        className={`btn btn-outline w-full ${selectedAgeRange === 'When 0-4: Primary Learning' ? 'btn-active' : ''}`}
                        
                    >
                        ০-৪ বছর
                    </button></Link>
                <button
                    className={`btn btn-outline btn-primary ${selectedAgeRange === '4-8' ? 'btn-active' : ''}`}
                    onClick={() => handleButtonClick('4-8')}
                >
                    ৪-৮ বছর
                </button>
                <button
                    className={`btn btn-outline btn-secondary ${selectedAgeRange === '8-12' ? 'btn-active' : ''}`}
                    onClick={() => handleButtonClick('8-12')}
                >
                    ৮-১২ বছর
                </button>
                <button
                    className={`btn btn-outline btn-accent ${selectedAgeRange === '12-17' ? 'btn-active' : ''}`}
                    onClick={() => handleButtonClick('12-17')}
                >
                    ১২-১৭ বছর
                </button>
            </div>
        </div>
    );
};

export default ChildrenBook;
