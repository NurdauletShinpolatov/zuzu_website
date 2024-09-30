import axios from "axios";
const BASE_URL = 'https://64787df0362560649a2de3aa.mockapi.io/products'


const instance = axios.create({
    baseURL: BASE_URL
})

export const productsServices = {
    getAllProducts: () => {
        return instance.get().then(res => {
            return res.data})
    },
    getSingleProduct: (id) => {
        return instance.get("/"+id).then(res => res.data)
    },
    getAllCategories:  () => {
        return instance.get("/categories").then(res => res.data)
    }
}