import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AiFillGoogleCircle } from "react-icons/ai";


const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userSignIn,signInWithGoogle,logOut} = useContext(AuthContext);

    const handelSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset();
        console.log(email, password);
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

        } else if (!/[0-9]/.test(password)) {
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
        userSignIn(email, password)
            .then((result) => {
                console.log(result.data)
                navigate(location?.state ? location.state : "/");

            })

            .catch((error) => {
                console.error(error);
                logOut(error);
                if (error) {
                    return Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'wrong email or password',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    };
    const handelWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                swal("Sign In", "successful", "success")
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
                        <h1 className=" text-xl font-semibold pt-20">Nice to see you again</h1>
                        <p className=" text-6xl font-bold  py-3">Welcome Back</p>
                        <div className="divider w-[30%] mx-auto"></div>
                        <p className="text-xl font-normal">Welcome back, valued member! Your continued presence enriches our community. We appreciate your continued support and look forward to providing you with an exceptional experience on our website. Thank you for being part of our journey!</p>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="  w-[90%] pt-10 ">
                   
                            <div className="w-[110px] h-[100px] rounded-full  mx-auto ">
                                <img src="https://i.ibb.co/BZ0Z03q/avater.png" className="w-[100%] h-[100%]" />
                            </div>
                  
                        <form onSubmit={handelSignIn} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" 
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                name="password" placeholder="password" className="input  input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                        <div className="divider text-black">OR</div>
                            <div className="flex gap-2 items-center justify-center">
                                <button onClick={handelWithGoogle}>
                                <div className="border p-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">
                                    <img className="w-[30px]" src="https://www.pngall.com/wp-content/uploads/13/Google-Logo-PNG-Image.png" alt="" />
                                    <h4 className="text-xl font-medium">Google</h4>
                                </div>
                                </button>
                            </div>
                        <p className="text-center pt-6">
                                New here? please <Link to="/signUp" className=" text-rose-400 font-bold underline">
                                    Sign Up
                                </Link>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;