import axios from "axios";

const baseURL = "https://bloodlink-alyn.onrender.com/";

export default axios.create({ baseURL: baseURL });
