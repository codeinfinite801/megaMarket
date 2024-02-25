import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {data:isAdmin,isLoading} = useQuery({
        enabled:!!user?.email,
        queryKey:['isAdmin',user?.email],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/users/admin?email=${user?.email}`)
            return res?.data?.admin;
        }
    })

    return [isAdmin,isLoading]
};

export default useAdmin;