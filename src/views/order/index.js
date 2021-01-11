import order from "@/api/order";

export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
            form: {
                id: "",
                orderTypeId: "",
                orderPayId: "",
                search: "",
                formData: [],
            },
            dialogTableVisible: false,
            dialog: false,
            dialogTableVisibles: false,
            dialogVisible: false,
            gridDatas: [],
            gridData: [],
            grid: [],
            ids: []
        }
    },
    created() {
        this.findAll();
        this.conditionQuery();
    },
    methods: {

        pages(page) {
            this.currentPage = page;
            this.findAll();
        },

        async findAll() {
            let response = await order.findAll(this.currentPage, this.pageSize);
            this.tableData = response.list;
            this.total = response.total;
        },
        async findQuery(id) {
            let response = await order.findQuery(id);
            this.gridDatas = response;
        },
        async query(id) {
            let response = await  order.query(id);
            this.gridData = response;
        },

        async Sales(){
           let response= await order.Sales(this.ids);
            this.grid=response;
        },

        async conditionQuery() {
            let response = await  order.conditionQuery();
            this.form.formData = response;
            this.tableData = response;
        },

        async search() {
            let response = await order.search(this.form);
            this.tableData = response;
        },
        selectionList(selection) {
            this.ids = [];
            selection.forEach(item => this.ids.push(item.id));
            console.log(this.ids);
        },
        async deleteById() {

            if (this.ids.length == 0) {
                this.$notify.error({
                    title: '错误',
                    message: '请选中要删除的内容',
                })
            } else {
                await order.delete(this.ids);
                this.findAll();
            }

        },


    }
}