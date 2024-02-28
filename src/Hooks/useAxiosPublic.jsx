import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://mega-merket-project-server-site.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
