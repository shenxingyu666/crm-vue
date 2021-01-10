import axios from "../utils/baseAxios"
let warehouse={

    findAll(entity){
        return axios.post(`aftersale/getOutOrder`,entity)
    },

    deleteEntity(ids){
        return axios.delete(`aftersale/deleteOrder/${ids}`)
    },

    exportExcel(cPage,Psize){
        return axios.get(`/aftersale/export?currentPage=${cPage}&pageSize=${Psize}`)
    }
}

export default warehouse;