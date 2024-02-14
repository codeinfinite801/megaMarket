import Swal from "sweetalert2";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const ManageOrder = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: paymentData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["paymentData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allPaymentData");
      return res?.data;
    },
  });
  if (isLoading) {
    return (
      <div className="w-1/2 mx-auto text-red-500">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

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
        axiosPublic
          .patch(
            `/update-status?id=${id}`
          )
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
  // delete form payment collection
  const handleDeleteItem =(id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(
            `/paymentData/delete?id=${id}`
          )
          .then((result) => {
            console.log(result);

            if (result.data?.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been Deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  }
  return (
    <div className="overflow-x-auto md:w-11/12 mx-auto w-auto">
      {paymentData.length > 0 ? (
        <table className="table ">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
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
                        ? "text-green-500 font-bold btn md:text-lg"
                        : "btn md:text-lg"
                    }
                    onClick={() => handleStatus(item?._id)}
                  >
                    {item?.status}
                  </button>
                </td>
                <td onClick={()=>handleDeleteItem(item?._id)} className="text-red-500 btn btn-ghost flex items-center mt-3 text-xl">X</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <p className="text-red-500 text-3xl">You do not have any data</p>
        </div>
      )}
    </div>
  );
};

export default ManageOrder;
