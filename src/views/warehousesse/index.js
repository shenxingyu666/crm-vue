import warehouse from "@/api/warehousesee"

export default {
    name: "index",
    data() {
        return {
            order: {},
            tableData: [],
            labelPosition: 'right',
        }
    },

    created() {
        this.findAll(this.$route.params.id);
    },

    methods: {

        async findAll(id) {
            let resp = await warehouse.findAll(id)
            this.tableData = resp.list
            this.order = resp.order
        },
    }
}