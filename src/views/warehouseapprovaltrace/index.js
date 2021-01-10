import warehouse from "@/api/warehousesee"

export default {
    name: "index",
    data() {
        return {
            order: {},
            tableData: [],
            urlFrom: '',
            labelPosition: 'right',
            textarea: '',
            isAble: false,
            orderId: '',
        }
    },

    created() {
        this.orderId = this.$route.params.id,
        this.urlFrom = this.$route.params.url,
        this.findAll(this.orderId);
    },

    methods: {

        async findAll(id) {
            let resp = await warehouse.findAll(id)
            this.tableData = resp.list
            this.order = resp.order
            console.log(resp)
        },

        returnHome() {
            this.$router.push(`/main/${this.urlFrom}`)
        }
    }
}