import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import History from "./History";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const {data , refetch } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () =>{
            const res = await axios.get(`https://maga-market-server-eta.vercel.app/payments?email=${user.email}`)
            return res.data
        }

    })
    return (
        <div className="my-8 mx-4">
            <h2 className="md:text-3xl text-xl font-bold mb-8 text-center">Payment History</h2>
            {
                data?.map(history => <History key={history?._id} history={history}></History>)
            }
        </div>
    );
};

export default PaymentHistory;