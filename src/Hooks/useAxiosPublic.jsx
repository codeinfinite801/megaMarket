import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://maga-market-server-eta.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
