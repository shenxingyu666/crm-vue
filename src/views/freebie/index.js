import freebie from "@/api/freebie"
import category from "@/api/category"
import brand from "@/api/brand"
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
            ids:[],
            categoryForm:[],
            brandForm:[],
            supplierForm:[],
            searchPage:{}
        }
    },

    created(){
        this.findAll();
        this.findAllBrand();
        this.findSupplier();
        this.findAllCategory()
    },

    methods:{

        async findAll(){
            let response=await freebie.findAll(this.searchPage,this.currentPage,this.pageSize)
             this.tableData=response.list
             this.total=response.total
        },

        //修改和删除
        async addOrEdit(){
            if(this.formData.id){
                await freebie.updateEntity(this.formData)
            }else {
                await freebie.addEntity(this.formData)
            }
            this.findAll()
        },

        pageChange(page){
            this.currentPage=page
            this.findAll()
        },

        async findById(id){
            let response=await freebie.findById(id)
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
                await  freebie.deleteEntity(this.ids);
                this.findAll();
            }

        },
        async findAllCategory(){
            let response=await category.findAllCategory()
            this.categoryForm = response.list
        },

        async findAllBrand(){
            let response=await brand.findAllBrand()
            this.brandForm = response.list
        },

        async findSupplier(){
            let response=await supplier.findAllsupplier()
            this.supplierForm = response.list
        }


    }
}