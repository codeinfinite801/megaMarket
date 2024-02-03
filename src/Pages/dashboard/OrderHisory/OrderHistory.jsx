import { useEffect, useState } from "react";
import usePaymentData from "../../../Hooks/usePaymentData";

const OrderHistory = () => {
  const [paymentData] = usePaymentData();
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (paymentData.length == 0) {
        setNoData(true);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [paymentData]);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="p-3">
        <h2 className="text-2xl font-bold">Your order history</h2>
        <p className="text-sm p-2">
          **Here you can see your all purchase history with Status**
        </p>
      </div>
      {paymentData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr className="bg-base-200 text-lg">
                <th>Tnx.No</th>
                <th>Name</th>
                <th>Category</th>
                <th>Order Qty</th>
                <th>Total Amount</th>
                <th>Contact Num</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {paymentData.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {item?.names?.map((item) => (
                      <li key={item} className="text-left">
                        {item}
                      </li>
                    ))}
                  </td>
                  <td>
                    {item?.categories?.map((item) => (
                      <li key={item} className="text-left">
                        {item}
                      </li>
                    ))}
                  </td>
                  <td>
                    {item?.count?.map((item) => (
                      <li key={item} className="text-left list-none">
                        {item} pcs
                      </li>
                    ))}
                  </td>
                  <td>{item?.price}</td>
                  <td>{item?.phone}</td>
                  <td className="text-xl">{item?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : noData ? (
        <div className="text-red-400">
          <p className="text-2xl font-bold">Opps sorry you have no order yet</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-4/5">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <p>
            Your Data is Loading...... <br /> <span>Please wait</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
