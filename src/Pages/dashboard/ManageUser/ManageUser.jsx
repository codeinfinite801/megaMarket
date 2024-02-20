import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosPublic = useAxiosPublic();

  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res?.data;
    },
  });
  const deteledUser = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be Update this User!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.patch(`/users/update?id=${id}`).then((result) => {
            if (result.data?.modifiedCount > 0) {
             
              refetch();
              Swal.fire({
                title: "Updated!",
                text: "Your user has been Admin.",
                icon: "success",
              });
            }
          });
        }
      });
  }
  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
      {users.length > 0 ? (
        <table className="table">
          {/* head */}
          <thead className="">
            <tr className="md:text-md font-bold">
              <th>SL.No</th>
              <th>User</th>
              <th>Name/Email</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {user?.photo ? (
                          <img
                            src={user?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        ) : (
                          <FaUser className="w-full h-full" />
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user?.email}
                  </span>
                </td>
                <td>
                  <button
                    className={
                      user?.role === "admin" ? "font-bold capitalize" : "1"
                    }
                    onClick={()=>deteledUser(user?._id)}
                  >
                    {user?.role ? user?.role : "Normal"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-3xl text-red-500">User not found</p>
      )}
    </div>
  );
};

export default ManageUser;
