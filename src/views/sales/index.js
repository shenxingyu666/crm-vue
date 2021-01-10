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
            dialogTableVisibles: false,
            gridDatas: [],
            gridData: []
        }
    },
    created() {
        this.findAll();
        this.conditionQuery();
    },
    methods: {
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

        async conditionQuery() {
            let response = await  order.conditionQuery();
            this.form.formData = response;
            this.tableData = response;
        },

        async search() {
            let response= await order.search(this.form);
            console.log(response);
            this.tableData = response;
        }

    }
}