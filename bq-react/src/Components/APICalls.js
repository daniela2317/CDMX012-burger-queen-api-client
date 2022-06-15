import axios from "axios"; 

    const api = "http://localhost:3004";  

    export const getProducts = () => 
        axios.get(`${api}/products`).then((response) => {
            console.log(response);
            return response.data;
        });