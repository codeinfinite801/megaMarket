import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handelSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    if (password.length < 6) {
      return toast.error(" password should have  6 character or longer", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(" password should have an uppercase later", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/[0-9]/.test(password)) {
      return toast.error(" password should have an  number like 123", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      !/(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])/.test(
        password
      )
    ) {
      return toast.error(" password should have an  special like *#%", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    createUser(email, password)
      .then(() => {
        updateUser(name, photo).then(() => {
          const userInfo = {
            name,
            email,
            photo
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res?.data?.insertedId) {
              e.target.reset();
              return Swal.fire({
                position: "center",
                icon: "success",
                title: "you SignUp successfully",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                navigate("/");
              });
            }
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-[100%] mt-20 mb-10 ">
      <div className="w-[80%]  flex flex-col gap-10 lg:flex-row mx-auto">
        <div className=" flex-1 w-full ">
          <div className="text-center ">
            <h1 className=" text-6xl font-bold  pt-36">Welcome to</h1>
            <div className="divider w-[30%] mx-auto"></div>
            <p className="text-xl font-normal">
              Mega Market! 🌟 Explore, connect, and enjoy a seamless experience.
              Your journey with us begins now. For assistance, contact our
              support team. Thrilled to have you on board!!
            </p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="  w-[90%] pt-10 ">
            <div className="w-[110px] h-[100px] rounded-full  mx-auto ">
              <img
                src="https://i.ibb.co/BZ0Z03q/avater.png"
                className="w-[100%] h-[100%]"
              />
            </div>

            <form onSubmit={handelSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo url"
                  name="photo"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center pt-6">
              Already have account? please{" "}
              <Link to="/signIn" className=" text-rose-400 font-bold underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
