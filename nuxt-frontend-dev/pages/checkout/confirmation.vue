<template>
    <section class="updated-chechout veritical-scroll-checkout">
        <div class="container">
            <div class="row" v-if="product">
                <div class="col-lg-8 col-md-12">
                    <div class="mobile-scrool">
                        <div class="order-list-table">
                            <div class="order-header">
                                <!-- <h3 class=" table-order-heading">Qty</h3> -->
                                <h3 class=" table-order-heading">Product name</h3>
                                <h3 class=" table-order-heading">Packages/Variations</h3>
                                <h3 class=" width-1-ctm table-order-heading">Price</h3>
                                <h3 class=" width-1-ctm table-order-heading">Discount</h3>
                                <h3 class=" width-1-ctm table-order-heading">Sub-total</h3>
                            </div>
                            <div class="order-list-body">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">{{ product.title }} </p>
                                <p class=" order-normal-fonts">{{ variation.name }} </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ product.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ product.price | currencyFormat }}</p>
                            </div>
                            <div class="order-list-body" v-for="ac in accessories" :key="ac.id">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">{{ ac.title }} </p>
                                <p class=" order-normal-fonts">{{ ac.variations[0].name }} </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ ac.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ ac.price | currencyFormat }}</p>
                            </div>
                            <div class="order-list-body">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">Delivery/Pickup</p>
                                <p class=" order-normal-fonts">{{ deliveryPickup.name }} </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ deliveryPickup.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ deliveryPickup.price | currencyFormat }}</p>
                            </div>
                            <div class="order-list-body">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">Scooter Mart Protection</p>
                                <p class=" order-normal-fonts">{{ protection.name }} </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ protection.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ protection.price | currencyFormat }}</p>
                            </div>
                            <div class="order-list-body">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">Membership</p>
                                <p class=" order-normal-fonts">{{ membership.name }} </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ membership.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ membership.price | currencyFormat }}</p>
                            </div>
                            <div class="order-list-body" v-if="rustProofing.enabled">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">Rust Proofing</p>
                                <p class=" order-normal-fonts"> -- </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ rustProofing.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ rustProofing.price | currencyFormat }}</p>
                            </div>
                            <div class="order-list-body" v-if="security.enabled">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">Security</p>
                                <p class=" order-normal-fonts"> -- </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ security.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ security.price | currencyFormat }}</p>
                            </div>
                            <div class="order-list-body" v-if="insurance.enabled">
                                <!-- <div class="Qty-flex">
                                    <p class="order-normal-fonts">1</p>
                                </div> -->
                                <p class=" order-normal-fonts">Insurance</p>
                                <p class=" order-normal-fonts"> {{ insurance.name }} </p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ insurance.price | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ 0 | currencyFormat }}</p>
                                <p class=" order-normal-fonts bold-ctm width-1-ctm">{{ insurance.price | currencyFormat }}</p>
                            </div>
                            <!-- <div class="otder-inner-total">
                                <div class="flex-detail-price">
                                    <div class="flex-item-cuatom">
                                        <h4 class="detail-price-heading">
                                            Items Subtotal
                                        </h4>
                                        <ul class="list-deatil-rice">
                                            <li class="items-price">{{ cartItemCount }} Items</li>
                                            <li class="items-price-value">{{ cartValue | currencyFormat }}</li>
                                        </ul>
                                    </div>

                                    <div class="flex-item-cuatom">
                                        <h4 class="detail-price-heading">
                                            Discount
                                        </h4>
                                        <ul class="list-deatil-rice">

                                            <li class="items-price-value items-price-after">$0</li>
                                        </ul>
                                    </div>
                                    <div class="flex-item-cuatom">
                                        <h4 class="detail-price-heading">
                                            Order Total
                                        </h4>
                                        <ul class="list-deatil-rice">

                                            <li class="total-price-detail">{{ cartValue | currencyFormat }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="printer-box">
                                <button class="printer-btn" type="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.414" height="18.401" viewBox="0 0 18.414 18.401">
                                        <path id="Path_1721" data-name="Path 1721" d="M18.417,5.939v7.121s-.019.019-.019.025a1.257,1.257,0,0,1-1.37,1.015H14.106v2.993a1.253,1.253,0,0,1-1.325,1.319H5.641a1.251,1.251,0,0,1-1.319-1.319V14.1H1.253A1.23,1.23,0,0,1,.01,12.869V6.129a1.2,1.2,0,0,1,1.015-1.2A8.709,8.709,0,0,1,2.1,4.9h.209V1.31A1.239,1.239,0,0,1,3.295.042.149.149,0,0,0,3.358.01H15.082c.006.006.019.019.025.019A1.255,1.255,0,0,1,16.122,1.38V4.892h1.053a1.243,1.243,0,0,1,1.2.926.847.847,0,0,0,.044.114Zm-4.318,7a.448.448,0,0,1,.076.013h2.91c.171,0,.178-.089.178-.216V6.262c0-.165-.044-.222-.216-.222H1.354c-.159,0-.209.051-.209.209v6.487c0,.171.057.216.222.216H4.151a1.449,1.449,0,0,0,.159-.013v-1.5A1.251,1.251,0,0,1,5.66,10.079h7.083a1.252,1.252,0,0,1,1.344,1.344v1.515ZM9.223,1.151H3.688c-.228,0-.228,0-.228.235V4.658c0,.228,0,.235.228.235H14.746c.178,0,.222-.057.222-.228V1.411a.23.23,0,0,0-.26-.26H9.223Zm0,10.069H5.7c-.228,0-.228,0-.228.235v5.574c0,.228,0,.235.228.235h7.013c.235,0,.241,0,.241-.241V11.468c0-.241,0-.241-.241-.241H9.223Z" transform="translate(-0.01 -0.01)" fill="#fff" />
                                    </svg>
                                    Print Invoice
                                </button>
                            </div> -->
                        </div>
                        <!-- <div class="d-flex align-items-center justify-content-center mb-5">
                            <button class="save-btn-continue" type="button" @click="nextStep()">Save & Continue</button>
                        </div> -->
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
                            <div class="pick-up-check-detail" v-if="deliveryPickup.id == 3">
                                <h3 class="pick-summary-heading">Pickup Details</h3>
                                <p class="store-add">Store Address:</p>
                                <p class="store-add-d">{{ deliveryPickup.delivery_address }}</p>
                                <p class="store-add">Pickup Date:</p>
                                <p class="store-add-d mb-0">{{ deliveryPickup.delivery_time | date('DD/MM/yyyy') }}</p>
                            </div>
                            <div class="pick-up-check-detail" v-if="deliveryPickup.id != 3">
                                <h3 class="pick-summary-heading">Delivery Details</h3>
                                <p class="store-add">Address:</p>
                                <p class="store-add-d">{{ personalDetails.address }}</p>
                                <p class="store-add">Pickup Date:</p>
                                <p class="store-add-d mb-0" v-if="deliveryPickup.id==1">{{ deliveryPickup.delivery_time | date('DD/MM/yyyy hh:mm a') }}</p>
                                <p class="store-add-d mb-0" v-if="deliveryPickup.id==2">{{ deliveryPickup.delivery_time | date('hh:mm a') }}</p>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6">
                            <div class="pick-up-check-detail">
                                <h3 class="pick-summary-heading">Order Summary</h3>
                                <ul class="summar-check-d">
                                    <li class="list-summary summary-bg">No. of Items</li>
                                    <li class="list-summary-2">{{ cartItemCount }}</li>
                                </ul>
                                <ul class="summar-check-d">
                                    <li class="list-summary">Sub-total</li>
                                    <li class="list-summary-2">{{ cartValue | currencyFormat }}</li>
                                </ul>
                                <ul class="summar-check-d">
                                    <li class="list-summary">Discount</li>
                                    <li class="list-summary-2">{{ 0 | currencyFormat }}</li>
                                </ul>
                                <hr class="summary-line-d">
                                <ul class="summar-check-d ">
                                    <li class="list-summary">Total</li>
                                    <li class="list-summary-2">{{ cartValue | currencyFormat }}</li>
                                </ul>
                                <div class="d-flex align-items-center justify-content-center ">
                                    <button class="save-btn-continue" type="button" @click="nextStep()">Save & Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        layout: 'checkout',
        computed: {
            ...mapGetters({
                cartValue: 'cart/getCartValue',
                product: 'cart/getProduct',
                variation: 'cart/getVariation',
                personalDetails: 'cart/getPersonalDetails',
                deliveryPickup: 'cart/getDeliveryPickup',
                rustProofing: 'cart/getRustProofing',
                membership: 'cart/getMembership',
                protection: 'cart/getProtection',
                security: 'cart/getSecurity',
                accessories: 'cart/getAccessories',
                insurance: 'cart/getInsurance',
                license: 'cart/getLicenseFront',
            }),
            cartItemCount() {
                let count = 4;
                if (this.rustProofing.enabled) {
                    count++
                }
                if (this.security.enabled) {
                    count++;
                }
                if (this.insurance.enabled) {
                    count++
                }
                count += this.accessories.length
                return count;
            }
        },
        mounted() {

        },
        methods: {
            nextStep() {
                this.$store.dispatch('cart/updateStep', {
                    step: 12,
                    name: 'Review Cart and Select Payment Method',
                    title: "Select payment method and pay now."
                }).then(() => {
                    this.$router.replace('/checkout/payment');
                });
            }
        }
    }

</script>

<style>

</style>
