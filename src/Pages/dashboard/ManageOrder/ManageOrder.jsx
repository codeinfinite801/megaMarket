import Swal from "sweetalert2";
import usePaymentData from "../../../Hooks/usePaymentData";
import axios from "axios";

const ManageOrder = () => {
  const [paymentData, refetch] = usePaymentData();
  //   status update here
  const handleStatus = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't update this status!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://maga-market-server-eta.vercel.app/update-status?id=${id}`)
          .then((result) => {
            console.log(result);
            if (result.data?.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Updated!",
                text: "Your file has been Updated.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto md:w-11/12 mx-auto w-auto">
      <table className="table table-zebra">
        <thead className="bg-base-200 md:text-lg">
          <tr>
            <th>S.No</th>
            <th>
              <span className="hidden md:inline-block">Customer</span> Name
            </th>
            <th className="hidden md:inline-block">
              <span>Customer</span> Email
            </th>
            <th>
              Products <span className="hidden md:inline-block">Name</span>{" "}
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {paymentData?.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item?.name}</td>
              <td className="hidden md:flex items-center mt-3">
                {item?.email}
              </td>
              <td>
                {item?.names?.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </td>
              <td>
                <button
                  className={
                    item?.status === "Confirm"
                      ? "text-green-500 font-bold btn text-lg"
                      : "btn text-lg"
                  }
                  onClick={() => handleStatus(item?._id)}
                >
                  {item?.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
