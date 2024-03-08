
import History from "./History";
import { Link } from "react-router-dom";
import usePaymentData from "../../../Hooks/usePaymentData";

const PaymentHistory = () => {
    const [paymentData] = usePaymentData();
    return (
        <div>
            {
                paymentData?.length ? <div className="my-8 mx-4">
                    <h2 className="md:text-3xl text-xl font-bold mb-8 text-center">Payment History</h2>
                    {
                        paymentData?.slice(0, 1)?.map(item => <div key={item?._id}>
                            <h2 className="text-xl font-medium text-sky-500">{item?.name}</h2>
                            <h2>{item?.email}</h2>
                            <h2 className="text-xl font-bold">{item?.country}</h2>
                        </div>)
                    }
                    {
                        paymentData?.map(history => <History key={history?._id} history={history}></History>)
                    }
                </div> : <div className="flex flex-col justify-center items-center">
                    <h2 className="md:text-3xl text-xl font-bold mb-8 text-red-500">No Payment History</h2>
                    <Link to="/placeOrder"><button className=" text-sky-600 md:text-xl normal-case"> Pay first</button></Link>
                </div>
            }
        </div>
    );
};

export default PaymentHistory;