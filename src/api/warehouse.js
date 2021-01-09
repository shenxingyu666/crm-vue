import axios from "../utils/baseAxios"
let warehouse={

    findAll(entity){
        return axios.post(`aftersale/getOutOrder`,entity)
    },

    findById(id){
        return axios.get(`brand/${id}`)
    },

    addEntity(entity){
        return axios.post(`brand`,entity)
    },

    updateEntity(entity){
        return axios.put(`brand`,entity)
    },

    deleteEntity(ids){
        return axios.delete(`brand/${ids}`)
    }

}

export default warehouse;