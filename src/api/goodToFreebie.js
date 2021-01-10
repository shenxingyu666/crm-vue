import axios from "../utils/baseAxios"
let goodToFreebie={

    findAll(searchPage,currentPage,pageSize){
        // return axios.get(`goodToFreebie?currentPage=${currentPage}&pageSize=${pageSize}`)
        return axios.post(`goodToFreebie/findAll?currentPage=${currentPage}&pageSize=${pageSize}`,searchPage)
    },

    findById(id){
        return axios.get(`goodToFreebie/${id}`)
    },

    addEntity(entity){
        return axios.post(`goodToFreebie`,entity)
    },

    updateEntity(entity){
        return axios.put(`goodToFreebie`,entity)
    },

    deleteEntity(ids){
        return axios.delete(`goodToFreebie/${ids}`)
    },

    goodChange(freebieId){
        return axios.get(`goodToFreebie/goodChange/${freebieId}`)
    }

}

export default goodToFreebie;