import supplier from "@/api/supplier"

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
            ids:[]
        }
    },

    created(){
        this.findAll();
    },

    methods:{

        async findAll(){
            let response=await supplier.findAll(this.currentPage,this.pageSize)
             this.tableData=response.list
             this.total=response.total
        },

        //修改和删除
        async addOrEdit(){
            if(this.formData.id){
                await supplier.updateEntity(this.formData)
            }else {
                await supplier.addEntity(this.formData)
            }
            this.findAll()
        },

        pageChange(page){
            this.currentPage=page
            this.findAll()
        },

        async findById(id){
            let response=await supplier.findById(id)
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
                await  supplier.deleteEntity(this.ids);
                this.findAll();
            }

        }


    }
}