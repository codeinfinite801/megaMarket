import React from "react";


const History = ({ history }) => {
    const { name, email, transactionId, cartIds, productIds, price, date, phone, alternative_Phone, country, address, location, paymentMethod, status } = history;
    console.log(history);
    console.log(paymentMethod);
    return (

        <div>
            <div className="border-2 rounded-lg border-sky-300 p-4 grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-4">
                <h2>Date : <br /> {date}</h2>
                <h2>Transaction Id : <span className="md:text-[15px] text-[13px]">{transactionId}</span></h2>
                <h2>Status : <span className="px-3 py-1 bg-sky-300 rounded-full font-medium">{status}</span></h2>
                <h2>Amount : {price}tk</h2>
                <h2>phone : {phone}</h2>
                <h2>Alternative phone : {alternative_Phone}</h2>
                <h2>Address : {address}</h2>
                <h2>Location : {location}</h2>
                <h2>Payment Method : {paymentMethod}</h2>
                <h2>Buy products : {cartIds?.length}</h2>
                <button className="btn btn-sm btn-info md:w-2/4">View all Product</button>
            </div>
        </div>

    );
};

export default History;