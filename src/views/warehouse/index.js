import warehouse from "@/api/warehouse"

export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
            editDialog: false,
            delDialog: false,
            addTime1: '',
            addTime2: '',
            approvalTime1: '',
            approvalTime2: '',
            formData: {},
            searchPage: {},
            ids: []
        }
    },

    created() {
        this.findAll();
    },

    methods: {

        async findAll() {
            let obj = {
                currentPage: this.currentPage,
                pageSize: this.pageSize
            }

            if (this.addTime1) {
                var oldtime = this.addTime1.valueOf()
                this.searchPage.addTime1 = new Date(oldtime + 86400000);
            }
            if (this.addTime2) {
                var oldtime1 = this.addTime2.valueOf()
                this.searchPage.addTime2 = new Date(oldtime1 + 86400000);
            }
            if (this.approvalTime1) {
                var oldtime2 = this.approvalTime1.valueOf()
                this.searchPage.approvalTime1 = new Date(oldtime2 + 86400000);
            }
            if (this.approvalTime2) {
                var oldtime3 = this.approvalTime2.valueOf()
                this.searchPage.approvalTime2 = new Date(oldtime3 + 86400000);
            }


            var assign = Object.assign(obj, this.searchPage);
            let resp = await warehouse.findAll(assign);
            this.total = resp.total;
            this.tableData = resp.list;
            this.searchPage.addTime1 = '';
            this.searchPage.addTime2 = '';
            this.searchPage.approvalTime1 = '';
            this.searchPage.approvalTime2 = '';
        },

        selectionChangeListenter(selection) {
            this.ids = []
            selection.forEach(item => this.ids.push(item.id))
            console.log(this.ids);
        },

        pageChange(page) {
            this.currentPage = page
            this.findAll()
        },

        findById(id) {
            this.$router.push(`/main/warehousesee/${id}`)
        },

        toAdd() {
            this.$router.push(`/main/warehouseadd`)
        },

        updateById(row){
            if(row.approvalStatus == '已审核' ){
                this.$notify.error({
                    title: '错误',
                    message: '已审核不可修改'
                });
            }else {
                this.$router.push(`/main/warehouseupd/${row.id}`)
            }
        }

    }
}