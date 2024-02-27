import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const usePaymentData = () => {
  const { user } = useAuth();
  const { data: paymentData = [],refetch } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/payments?email=${user.email}`
      );
      return res.data;
    },
  });

  return [paymentData,refetch];
};

export default usePaymentData;
