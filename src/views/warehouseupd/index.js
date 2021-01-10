import warehouse from "@/api/warehouseupd"
import warehouse1 from "@/api/warehouseadd"

export default {
    name: "index",
    data() {
        return {
            order: {},
            tableData: [],
            labelPosition: 'right',
            orderId: '',
            dialogVisible: false,
            form:{},
            options:[],
        }
    },

    created() {
        this.orderId = this.$route.params.id
        this.findAll(this.orderId);
        this.initOptions();
    },

    methods: {

        async findAll(id) {
            let resp = await warehouse.findAll(id)
            this.tableData = resp.list
            this.order = resp.order
        },

        async initOptions() {
            let resp = await warehouse1.findAll()
            this.options = resp.list
        },

        async deleteOrderPhone(id) {
            await warehouse.deletePhone(id);
            this.findAll(this.orderId)
        },

        async updateGood(){
            let obj = {
                retrunOrderId:this.orderId
            }
            Object.assign(this.form,obj)
            await warehouse.pushPhoneInOrder(this.form)
            this.findAll(this.orderId)
        },

        async updateOrder() {
            let obj = {
                Id:this.orderId
            }
            Object.assign(this.order,obj)
            console.log(this.order)
            await warehouse.updateOutOrder(this.order);
            this.$message.success("保存成功")
        }
    }
}