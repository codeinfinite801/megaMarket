import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";

const SignUp = () => {
    const { createUser,signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handelSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            return toast.error(
                " password should have  6 character or longer",
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        } else if (!/[A-Z]/.test(password)) {
            return toast.error(
                " password should have an uppercase later",
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        }
        else if (!/[0-9]/.test(password)) {
            return toast.error(
                " password should have an  number like 123",
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        }
        else if (!/(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])/.test(password)) {
            return toast.error(
                " password should have an  special like *#%",
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        }


        createUser(email, password)
            .then((result) => {
                if (result) {
                    return Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'you SignUp successfully',
                        showConfirmButton: false,
                        timer: 1500,

                    })

                }

                console.log(result.user);

            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handelWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
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
                             Mega Market! 🌟 Explore, connect, and enjoy a seamless experience. Your journey with us begins now. For assistance, contact our support team. Thrilled to have you on board!!</p>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="  w-[90%] pt-10 ">

                        <div className="w-[110px] h-[100px] rounded-full  mx-auto ">
                            <img src="https://i.ibb.co/BZ0Z03q/avater.png" className="w-[100%] h-[100%]" />
                        </div>

                        <form onSubmit={handelSignUp} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input  input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <div className="divider text-black">OR</div>
                            <div className="flex gap-2 items-center justify-center">
                                <button onClick={handelWithGoogle}>
                                    {" "}
                                    <AiFillGoogleCircle className="text-3xl text-red-400">
                                        google
                                    </AiFillGoogleCircle>
                                </button>
                            </div>
                        <p className="text-center pt-6">
                        Already have account?please {""} {""}
                            <Link to="/signIn" className=" text-rose-400 font-bold">
                                SignIn
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;