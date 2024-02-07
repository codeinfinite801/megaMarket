import usePaymentData from "../../../Hooks/usePaymentData";

const ManageOrder = () => {
  const [paymentData] = usePaymentData();
  console.log(paymentData);
  return (
    <div className="overflow-x-auto md:w-11/12 mx-auto w-auto">
      <table className="table table-zebra">
        {/* head */}
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
              <td className="hidden md:flex items-center mt-3">{item?.email}</td>
              <td>
                {item?.names?.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </td>
              <td>
                <button className="btn text-lg">{item?.status}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
