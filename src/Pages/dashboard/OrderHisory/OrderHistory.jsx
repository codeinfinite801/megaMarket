import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import usePaymentData from "../../../Hooks/usePaymentData";

const OrderHistory = () => {
  const [paymentData] = usePaymentData();
  console.log(paymentData);
  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
      }
    });
  };
  return (
    <div className="flex justify-center items-center">
      {paymentData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr className="bg-base-200 text-lg">
                <th>S.No</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Publisher</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
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
