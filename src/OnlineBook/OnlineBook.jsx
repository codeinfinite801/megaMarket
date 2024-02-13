import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf";

const OnlineBook = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    console.log(data);
    useEffect(() => {
        fetch(`https://maga-market-server-eta.vercel.app/onlineBooks/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, [id]);

    return (
        <div>
            <div className="mx-auto flex flex-col items-center">
                <h1 className="mt-4 text-lg pb-3">{data?.name}</h1>
                <img src={data?.image} alt="" />
            </div>
        </div>
    );
};

export default OnlineBook;
