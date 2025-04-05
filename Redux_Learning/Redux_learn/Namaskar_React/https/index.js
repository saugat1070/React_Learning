import axios from "axios";

const API = axios.create({
    baseURL:'https://react30.onrender.com/api/user/',
    headers:{
        'Content-Type':'application/json',
        'Accept': 'applicaton/json'
    }
}
)

export default API;