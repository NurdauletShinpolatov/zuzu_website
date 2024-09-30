import axios from "axios";
const BASE_URL = 'https://64787df0362560649a2de3aa.mockapi.io/branches'


const instance = axios.create({
    baseURL: BASE_URL
})

export const branchesServices = {
    getAllBranches: () => {
        return instance.get()
    },
    getSingleBranches: (id) => {
        return instance.get("/"+id)
    }
}