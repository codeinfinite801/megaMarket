import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './AxiosSecure/useAxiosSecure';

const useKids = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data, error, isError, isLoading, refetch } = useQuery({
        queryKey: ["books", user?.email, category],
        enabled: !!user?.email,
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/allBooks?category=${category}`);
                return response.data;
            } catch (error) {
                // Log the error or handle it as needed
                console.error("Error fetching books:", error);
                // Re-throw the error for react-query to handle
                throw error;
            }
        },
    });

    // Handling the error or loading state can be done in the component where this hook is used
    return { data, error, isError, isLoading, refetch };
};

export default useKids;