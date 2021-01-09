import freebieToGood from "@/api/freebieToGood"
import freebie from "@/api/freebie"
export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage:1,
            pageSize:5,
            total:0,
            editDialog:false,
            delDialog:false,
            formData:{},
            ids:[],
            freebieForm:[],
        }
    },

    created(){
        this.findAll();
        this.findAllFreebie()
    },

    methods:{

        async findAllFreebie(){

        let response=await freebie.findAllFreebie()
            this.freebieForm=response.list
        },


        async findAll(){
            let response=await freebieToGood.findAll(this.currentPage,this.pageSize)
             this.tableData=response.list
             this.total=response.total
        },

        //修改和删除
        async addOrEdit(){
            await freebieToGood.freebieChange(this.formData.freebieId)
            this.findAll()
        },

        pageChange(page){
            this.currentPage=page
            this.findAll()
        },

        async findById(id){
            let response=await freebieToGood.findById(id)
            this.formData = response
        },

        selectionChangeListenter(selection){
            this.ids=[]
            selection.forEach(item=>this.ids.push(item.id))
            console.log(this.ids);
        },

        async deleteByIds(){
            if (this.ids.length == 0) {
                this.$notify.error({
                    title: '错误',
                    message: '请选中要删除的内容'
                });
            } else {
                // this.$refs.multipleTable.clearSelection();
                await  freebieToGood.deleteEntity(this.ids);
                this.findAll();
            }

        }


    }
}