<template>
    <div>
        <div class="bg-danger text-white text-center h4 p-2">
            Order Admin
        </div>
        <div class="form-group text-center">
            <input v-model="showShipped" type="checkbox" class="form-check-input" />
            <label class="form-check-label">Show Shipped Orders</label>
        </div>
        <table class="table table-sm table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City, Zip</th>
                    <th class="text-right">Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="displayOrders.length == 0">
                    <td colspan="5">There are no orders</td>
                </tr>
                <tr v-for="o in displayOrders" :key="o.id">
                    <td>{{ o.id }}</td>
                    <td>{{ o.name }}</td>
                    <td>{{ `${o.city}, ${o.zip}` }}</td>
                    <td class="text-right">{{ getTotal(o) | currency }}</td>
                    <td class="text-center">
                        <button class="btn btn-sm btn-danger">
                            {{ o.shipped ? 'Not Shipped' : 'Shipped' }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    export default {
        data() {
            return {
                showShipped: false
            }
        },
        computed: {
            ...mapState({ orders: state => state.orders.orders }),
            displayOrders() {
                return this.showShipped ? this.orders : this.orders.filter( o => o.shipped != true);
            }
        },
        methods: {
            ...mapMutations(['changeOrderShipped']),
            ...mapActions(["getOrders", "updateOrder"]),
            getTotal(order) {
                if(order.cartLines != null && order.cartLines.length > 0) {
                    return order.cartLines.reduce((total, line) => total + (line.quantity * line.product.price), 0) 
                } else {
                    console.log(order)
                    return 0;
                }
            },
            shipOrder(order) {
                this.updateOrder(order)
            }
        },
        created() {
            this.getOrders();
        }
    }
</script>

<style lang="scss" scoped>

</style>