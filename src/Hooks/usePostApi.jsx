


import axios from "axios";

const postUrl = axios.create({
    baseURL: "https://maga-market-server-eta.vercel.app"
});
const UsePostAxios = () => {
    return postUrl;
    
    }
    
    export default UsePostAxios;