import axios from "../utils/baseAxios"
let warehouse={

    findAll(id){
        return axios.get(`aftersale/getOutOrderDetail/${id}`)
    },

    deletePhone(id) {
        return axios.delete(`aftersale/removePhonefromOrder/${id}`)
    },

    pushPhoneInOrder(entity){
        return axios.post(`aftersale/pushPhoneInOrder`,entity)
    },

    updateOutOrder(entity){
        return axios.put(`aftersale/updateOutOrderDetail`,entity)
    }
}

export default warehouse;