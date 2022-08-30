<template>
    <div class="card card-order-listing">
        <h4 class="mb-3">My Orders</h4>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Order#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Payment Type</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.id">
                        <th scope="row">{{ order.rand_id }}</th>
                        <td>{{ order.cart.product.title }}</td>
                        <td>{{ order.payment_type }}</td>
                        <td>{{ order.amount | currencyFormat }}</td>
                        <td>{{ order.status }}</td>
                        <td>
                            <NuxtLink :to="`/profile/orders/${order.id}`">
                                <i class="fa fa-eye"></i>
                            </NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'profile',
        data() {
            return {
                orders: []
            }
        },
        mounted() {
            this.getOrders()
        },
        methods: {
            getOrders() {
                this.$repositories.auth.orders().then(res => {
                    this.orders = res.data.data;
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }

</script>
