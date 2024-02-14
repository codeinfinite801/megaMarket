import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./AxiosSecure/useAxiosSecure";

const useReviews = () => {
    const axiosSecure = useAxiosSecure();
    const { data, error, isError, isLoading, refetch } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/review`);
                return response.data;
            } catch (error) {
                console.error("Error fetching books:", error);
                throw error;
            }
        },
    });

    return { data, error, isError, isLoading, refetch };
};

export default useReviews;
