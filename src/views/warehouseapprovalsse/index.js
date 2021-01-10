import warehouse from "@/api/warehousesee"
import warehouse1 from "@/api/warehouseupd"

export default {
    name: "index",
    data() {
        return {
            order: {},
            tableData: [],
            labelPosition: 'right',
            textarea: '',
            isAble: false,
            orderId: '',
        }
    },

    created() {
        this.orderId = this.$route.params.id
        this.findAll(this.orderId);
    },

    methods: {

        async findAll(id) {
            let resp = await warehouse.findAll(id)
            this.tableData = resp.list
            this.order = resp.order
        },

        async checkSuccess() {
            this.setDate(1)
            this.isAble = true;
            await warehouse1.updateOutOrder(this.order)
            this.$message.success("保存成功")
        },

        async checkError() {
            this.setDate(0)
            this.isAble = true;
            await warehouse1.updateOutOrder(this.order)
            this.$message.success("保存成功")
        },

        setDate(id) {
            if(id == 1){
                this.order.approvalStatus = '已审核'
            }else {
                this.order.approvalStatus = '审核不通过'
            }
            this.order.Id = this.orderId
            this.order.approvalStatement = this.textarea,
            this.order.approvalName = 'admin'
        }
    }
}