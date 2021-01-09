import axios from "../utils/baseAxios"
let warehouse={

    findAll(){
        return axios.get(`good/all`)
    },

    addOrder(entity){
        return axios.post(`aftersale/addOutOrderDetail`,entity)
    }

}

export default warehouse;