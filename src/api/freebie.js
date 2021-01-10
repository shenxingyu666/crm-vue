import axios from "../utils/baseAxios"
let freebie={

    findAll(searchPage,currentPage,pageSize){
        // return axios.get(`freebie?currentPage=${currentPage}&pageSize=${pageSize}`)
        return axios.post(`freebie/findAll?currentPage=${currentPage}&pageSize=${pageSize}`,searchPage)
    },

    findById(id){
        return axios.get(`freebie/${id}`)
    },

    addEntity(entity){
        return axios.post(`freebie`,entity)
    },

    updateEntity(entity){
        return axios.put(`freebie`,entity)
    },

    deleteEntity(ids){
        return axios.delete(`freebie/${ids}`)
    },

    findAllFreebie(){
        return axios.get(`freebie/findAllFreebie`)
    }

}

export default freebie;