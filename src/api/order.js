import axios from "../utils/baseAxios";

let order={

    findAll(currentPage,pageSize){
      return  axios.get(`order?currentPage=${currentPage}&pageSize=${pageSize}`)
    },

    findQuery(id){
        return axios.get(`consignee/${id}`);
    },
    query(id){
        return axios.get(`order/${id}`);
    },
    conditionQuery(){
        return axios.post(`order/conditionQuery`);
    },
    search(form){
        return axios.post(`order/search`,form);
    },
    delete(ids){
        return axios.delete(`order/${ids}`);
    },
    Sales(ids){
        return axios.post(`order/${ids}`);
    }
};

export default order;