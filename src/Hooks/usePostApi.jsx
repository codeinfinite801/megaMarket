


import axios from "axios";

const postUrl = axios.create({
    baseURL: "http://localhost:5000"
});
const UsePostAxios = () => {
    return postUrl;
    
    }
    
    export default UsePostAxios;