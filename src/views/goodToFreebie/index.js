import goodToFreebie from "@/api/goodToFreebie"
import good from "@/api/good"
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
            goodForm:[],
            categoryForm:[],
            brandForm:[],
            supplierForm:[],
            searchPage:{}
        }
    },

    created(){
        this.findAll();
        this.findAllGood();
        this.findSupplier();
        this.findAllBrand();
        this.findAllCategory();
    },

    methods:{

        async findAllGood(){

        let response=await good.findAllgood()
            this.goodForm=response.list
        },


        async findAll(){
            let response=await goodToFreebie.findAll(this.searchPage,this.currentPage,this.pageSize)
             this.tableData=response.list
             this.total=response.total
        },

        //修改和删除
        async addOrEdit(){
            await goodToFreebie.goodChange(this.formData.goodId)
            this.findAll()
        },

        pageChange(page){
            this.currentPage=page
            this.findAll()
        },

        async findById(id){
            let response=await goodToFreebie.findById(id)
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
                await  goodToFreebie.deleteEntity(this.ids);
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
        },


    }
}