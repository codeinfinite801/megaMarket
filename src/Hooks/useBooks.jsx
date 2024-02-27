import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./AxiosSecure/useAxiosSecure";

const useBooks = ({ category }) => {
  const axiosSecure = useAxiosSecure();

  console.log(category)

  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["books", category],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(
          `/allBooks?category=${category}`
        );
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

export default useBooks;
