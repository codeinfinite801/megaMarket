


import axios from "axios";

const postUrl = axios.create({
    baseURL: "https://mega-merket-project-server-site.vercel.app"
});
const UsePostAxios = () => {
    return postUrl;
    
    }
    
    export default UsePostAxios;