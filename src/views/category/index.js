import category from "@/api/category"

import Treeselect from "@riophae/vue-treeselect";

import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
    name: "index",
    components: { Treeselect },
    data() {
        return {
            tableData: [],
            editDialog:false,
            delDialog:false,
            formData:{},
            ids:[],
            treeData:[]
        }
    },

    created(){
        this.findAll();
    },

    methods:{

        async findAll(){
            let response=await category.getTreeData()
            this.tableData=response
            this.treeData=response
            console.log(this.treeData);
            // this.categoryTreeAddLabel(this.treeData)
        },

        // async findAll(){
        //     let response=await category.findAll(this.currentPage,this.pageSize)
        //      this.tableData=response.list
        //      this.total=response.total
        // },

        //修改和删除
        async addOrEdit(){
            if(this.formData.id){
                await category.updateEntity(this.formData)
            }else {
                await category.addEntity(this.formData)
            }
            this.findAll()
        },

        // pageChange(page){
        //     this.currentPage=page
        //     this.findAll()
        // },

        async findById(id){
            let response=await category.findById(id)
            this.formData = response
        },

        // selectionChangeListenter(selection){
        //     this.ids=[]
        //     selection.forEach(item=>this.ids.push(item.id))
        //     console.log(this.ids);
        // },

        async deleteByIds(){
            if (this.ids.length == 0) {
                this.$notify.error({
                    title: '错误',
                    message: '请选中要删除的内容'
                });
            } else {
                // this.$refs.multipleTable.clearSelection();
                await  category.deleteEntity(this.ids);
                this.findAll();
            }

        },


        // //添加树名称
        // categoryTreeAddLabel(tree) {
        //     for (let i in tree) {
        //         tree[i].id = tree[i].code;
        //         tree[i].label = tree[i].name;
        //         if (tree[i].children != null) {
        //             this.categoryTreeAddLabel(tree[i].children);
        //         }
        //     }
        //     console.log(this.treeData);
        // },


    }
}