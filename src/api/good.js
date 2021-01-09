import axios from "../utils/baseAxios"
let good={

    findAll(currentPage,pageSize){
        return axios.get(`good?currentPage=${currentPage}&pageSize=${pageSize}`)

    },

    findById(id){
        return axios.get(`good/${id}`)
    },

    addEntity(entity){
        return axios.post(`good`,entity)
    },

    updateEntity(entity){
        return axios.put(`good`,entity)
    },

    deleteEntity(ids){
        return axios.delete(`good/${ids}`)
    },

    findAllgood(){
        return axios.get(`good/findAllgood`)
    }

}

export default good;