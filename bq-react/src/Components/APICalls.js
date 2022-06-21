import axios from "axios"; 

    const api = "http://localhost:3004";  

    export const getProductsBreakfast = () => 
        axios.get(`${api}/products?type=Desayuno`).then((response) => {
            console.log(response);
            return response.data;
        });

    export const getProductsMeal = () => 
        axios.get(`${api}/products?type=Almuerzo`).then((response) => {
            console.log(response);
            return response.data;
        });