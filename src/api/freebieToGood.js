import axios from "../utils/baseAxios"
let freebieToGood={

    findAll(searchPage,currentPage,pageSize){
        // return axios.get(`freebieToGood?currentPage=${currentPage}&pageSize=${pageSize}`)
        return axios.post(`freebieToGood/findAll?currentPage=${currentPage}&pageSize=${pageSize}`,searchPage)
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