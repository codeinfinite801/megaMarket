import { useContext } from "react";
import useAxiosSecure from "./AxiosSecure/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useWishList = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    
    const {refetch, data: wishList=[]} = useQuery({
        queryKey: ['wishList', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/wishList?email=${user.email}`)
            return res.data
        }

    })
    return [wishList, refetch]
  
};

export default useWishList;