import warehouse from "@/api/warehouseadd"

export default {
    name: "index",
    data() {
        return {
            order: {},
            tableData: [],
            goodUid: [],
            labelPosition: 'right',
            dialogVisible: false,
            form:{},
            options:[],
        }
    },

    created() {
        this.initOptions();
    },

    methods: {

        async initOptions() {
            let resp = await warehouse.findAll()
            this.options = resp.list
        },

        addGood() {
            this.options.forEach( i=>{
                if(i.id == this.form.goodId){
                    this.goodUid.push(this.form.name)
                    this.tableData.push(i)
                }
            })
        },

        deleteGood(index) {
            /**
             * 删除对象数组中索引为index的对象
             */
            this.tableData.splice(index,1)
            this.goodUid.splice(index,1)
        },

        async commit() {
            let list = new Array();
            let flag = 0;
            this.tableData.forEach(i=>{
                let obj = {
                    goodUniqueId:this.goodUid[flag],
                    goodId: i.id,
                }
                flag = flag + 1;
                list.push(obj)
            });
            let list1 = {
                list,
            }
            Object.assign(this.order,list1)
            await warehouse.addOrder(this.order)
        },

         open() {
            this.$confirm('确认保存?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '提交成功!',
                });
                this.commit();
                setTimeout(()=>{this.$router.push(`/main/warehouse`)},600)

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        }
    }
}