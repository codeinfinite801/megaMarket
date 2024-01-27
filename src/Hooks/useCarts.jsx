import { useContext } from "react";
import useAxiosSecure from "./AxiosSecure/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCarts = () => {
    // tenStack Query
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {refetch, data: cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/addProducts?email=${user.email}`)
            return res.data
        }

    })
    return [cart, refetch]
};


export default useCarts;



  
  
