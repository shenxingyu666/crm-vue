import axios from "../utils/baseAxios"
let brand={

    findAll(currentPage,pageSize){
        return axios.get(`brand?currentPage=${currentPage}&pageSize=${pageSize}`)

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
    },
    findAllBrand(){
        return axios.get(`brand/findAllBrand`)
    }

}

export default brand;