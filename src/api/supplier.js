import axios from "../utils/baseAxios"
let supplier={

    findAll(currentPage,pageSize){
        return axios.get(`supplier?currentPage=${currentPage}&pageSize=${pageSize}`)

    },

    findById(id){
      return axios.get(`supplier/${id}`)
    },

    addEntity(entity){
        return axios.post(`supplier`,entity)
    },

    updateEntity(entity){
        return axios.put(`supplier`,entity)
    },

    deleteEntity(ids){
        return axios.delete(`supplier/${ids}`)
    }

}

export default supplier;