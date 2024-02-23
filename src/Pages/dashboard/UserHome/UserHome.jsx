import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="flex flex-col">
              <p className="md:text-xl font-bold p-3 hidden md:inline-block  ">
                Welcome Back
                <sup className="italic">{user && user?.displayName}</sup>
              </p>
              <div tabIndex={0} className=" avatar mb-5 hidden md:inline-block">
                <div className="w-40 rounded-full mx-auto mt-3">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
                <p className="mt-4 text-xl font-semibold">Email: <span className="text-xl text-orange-400">{user?.email}</span></p>
                <p className="mt-4 text-xl font-semibold">User Status: <span className="text-orange-500">{isAdmin?"Admin":"Normal"}</span></p>
              </div>
            </div>
        </div>
    );
};

export default UserHome;