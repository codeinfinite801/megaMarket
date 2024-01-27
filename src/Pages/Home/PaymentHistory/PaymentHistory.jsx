import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import History from "./History";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const { data, refetch } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://maga-market-server-eta.vercel.app/payments?email=${user.email}`)
            return res.data
        }

    })
    return (
        <div>
            {
                data?.length ? <div className="my-8 mx-4">
                    <h2 className="md:text-3xl text-xl font-bold mb-8 text-center">Payment History</h2>
                    {
                        data?.slice(0, 1)?.map(item => <div key={item?._id}>
                            <h2 className="text-xl font-medium text-sky-500">{item?.name}</h2>
                            <h2>{item?.email}</h2>
                            <h2 className="text-xl font-bold">{item?.country}</h2>
                        </div>)
                    }
                    {
                        data?.map(history => <History key={history?._id} history={history}></History>)
                    }
                </div> : <div className="flex flex-col justify-center items-center">
                    <h2 className="md:text-3xl text-xl font-bold mb-8">No Payment History</h2>
                    <Link to="/placeOrder"><button className="underline text-sky-600 md:text-xl">pay first</button></Link>
                </div>
            }
        </div>
    );
};

export default PaymentHistory;