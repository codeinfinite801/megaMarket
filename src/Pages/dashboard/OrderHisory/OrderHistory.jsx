import { useEffect, useState } from "react";
import usePaymentData from "../../../Hooks/usePaymentData";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const OrderHistory = () => {
  const [paymentData, refetch] = usePaymentData();
  const [noData, setNoData] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (paymentData.length == 0) {
        setNoData(true);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [paymentData]);
  // user update his order with DELiVERY Status
  const handleDelivery = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Received Your Product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Received it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/delivery-status?id=${id}`).then((result) => {
          if (result.data?.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Delivered!",
              text: "Your status has been Update.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="md:p-3">
        <h2 className="text-2xl font-bold">Your order history</h2>
        <p className="text-sm p-2">
          **Here you can see your all purchase history with Status**
        </p>
      </div>
      {paymentData.length > 0 ? (
        <div className="overflow-x-auto w-auto">
          <table className="text-center text-sm ">
            {/* head */}
            <thead className="">
              <tr className="bg-base-200 md:text-lg ">
                <th className="md:p-2 mr-2">Tnx.No</th>
                <th className="md:p-2 mr-2">Name</th>
                <th className="md:p-2 mr-2">Category</th>
                <th className="md:p-2 mr-2">Order Qty</th>
                <th className="md:p-2 mr-2">Total Amount</th>
                <th className="md:p-2 mr-2">Contact Num</th>
                <th className="md:p-2 mr-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {paymentData.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {item?.names?.map((item) => (
                      <li key={item} className="text-left list-none">
                        {item}
                      </li>
                    ))}
                  </td>
                  <td>
                    {item?.categories?.map((item) => (
                      <li key={item} className="list-none">
                        {item}
                      </li>
                    ))}
                  </td>
                  <td>
                    {item?.count?.map((item) => (
                      <li key={item} className="list-none">
                        {item} pcs
                      </li>
                    ))}
                  </td>
                  <td>{item?.price}</td>
                  <td>{item?.phone}</td>
                  <td
                    className={
                      item?.status === "Confirm"
                        ? "md:text-xl p-2 text-green-500 font-bold"
                        : item?.status === "Delivered"
                        ? "md:text-xl p-2 text-orange-400 font-bold"
                        : "md:text-xl p-2 text-red-500 font-bold"
                    }
                  >
                    {item?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5">
            {paymentData?.map((data) => (
              <>
                <p className=" my-3  flex flex-col">
                  <span className="text-md font-semibold">
                    Invoice No: {data?.transactionId}
                  </span>
                  <h2 className="text-3xl text-orange-400 font-semibold my-2">
                    Order Details
                  </h2>
                </p>
                <ul className="steps steps-vertical lg:steps-horizontal opacity-80">
                  <li className="step step-primary">Pending</li>
                  <li
                    className={
                      data?.status === "Confirm"
                        ? "step step-primary"
                        : data?.status === "Delivered"
                        ? "step step-primary"
                        : "step"
                    }
                  >
                    Confirmed
                  </li>
                  <li
                    className={
                      data?.status === "Delivered"
                        ? "step step-primary w-24"
                        : "step w-24"
                    }
                  >
                    Ready to Dispatch
                  </li>
                  <li
                    className={
                      data?.status === "Delivered"
                        ? "step step-primary w-24"
                        : "step w-fit"
                    }
                  >
                    Dispatched
                  </li>
                  <li
                    onClick={() => handleDelivery(data?._id)}
                    className={
                      data?.status === "Delivered"
                        ? "step step-primary w-24"
                        : "step w-24"
                    }
                  >
                    Delivered
                  </li>
                </ul>
              </>
            ))}
          </div>
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
