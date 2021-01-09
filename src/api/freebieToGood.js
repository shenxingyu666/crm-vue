import axios from "../utils/baseAxios"
let freebieToGood={

    findAll(currentPage,pageSize){
        return axios.get(`freebieToGood?currentPage=${currentPage}&pageSize=${pageSize}`)

    },

    findById(id){
        return axios.get(`freebieToGood/${id}`)
    },

    addEntity(entity){
        return axios.post(`freebieToGood`,entity)
    },

    updateEntity(entity){
        return axios.put(`freebieToGood`,entity)
    },

    deleteEntity(ids){
        return axios.delete(`freebieToGood/${ids}`)
    },

    freebieChange(freebieId){
        return axios.get(`freebieToGood/freebieChange/${freebieId}`)
    }

}

export default freebieToGood;