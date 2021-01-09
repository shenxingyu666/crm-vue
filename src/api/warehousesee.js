import axios from "../utils/baseAxios"
let warehouse={

    findAll(id){
        return axios.get(`aftersale/getOutOrderDetail/${id}`)
    },

}

export default warehouse;