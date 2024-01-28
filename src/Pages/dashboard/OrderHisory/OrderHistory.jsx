import { FaTrash } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";

const OrderHistory = () => {
  const [cart] = useCarts();
  return (
    <div className="flex justify-center items-center">
      {cart.length > 0 ? (
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr className="" key={item?._id}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.category}</td>
                  <td>{item.count}</td>
                  <td>{item?.priceWithDiscount}</td>
                  <td>{item?.publisher}</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn btn-ghost">
                      <FaTrash className="text-red-500 text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-4/5">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <p>Your Data is Loading...... <br /> <span>Please wait</span></p>
        </div>
        
      )}
    </div>
  );
};

export default OrderHistory;
