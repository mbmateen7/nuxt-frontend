<template>
    <div class="pick-up-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-12 mx-auto">
                    <div class="warrenty-height-2 d-flex justify-content-center">
                        <div class="delivery-cards-inline-2">
                            <div class="pick-up-box pick-up-box-member " :class="{'selected': membership && membership.id == m.id,'active':index==1}" v-for="(m,index) in memberships" :key="m.id">
                                <div class="top-choice">Top Choice</div>
                                <h2 class="basic">{{ m.name }}</h2>
                                <p class="member-para">MEMBERSHIP</p>
                                <div class="pick-img">
                                    <img class="img-fluid" :src="m.icon" alt="img">
                                </div>
                                <h2 class="basic">{{ m.price | currencyFormat }} / {{ m.duration }}</h2>

                                <h2 class="basic-2">Benefits</h2>
                                <div class="benefit-box">
                                    <p class="benefit-text" v-for="service in m.description" :key="service.id">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>{{ service }}
                                    </p>
                                </div>
                                <hr class="hr-line">
                                <p class="deliver-by ">Total value: {{ m.total_value | currencyFormat }}</p>
                                <p class="save-t">Save {{ m.price }} / year</p>

                                <div class="add-to-cart">
                                    <button type="button" class="add-cart-to" @click="selectMembership(m)" v-if="!membership || (membership && membership.id != m.id)">Select</button>
                                    <button type="button" class="add-cart-to" v-if="membership && membership.id == m.id">Selected</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class=" d-flex align-items-center justify-content-center  mt-3">
                        <button @click="nextStep" class="save-btn-continue" type="button" :disabled="!membership">
                            Save &amp; Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        layout: 'checkout',
        computed: {
            ...mapGetters({
                membership: 'cart/getMembership'
            })
        },
        data() {
            return {
                memberships: []
            }
        },
        mounted() {
            this.$repositories.cart.getMemberships().then(res => {
                this.memberships = res.data;
            }).catch(err => {
                console.log(err);
            });
        },
        methods: {
            selectMembership(membership) {
                this.$store.dispatch('cart/addToCart', {
                    product: membership,
                    key: 'membership',
                    price: membership.price,
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            nextStep() {
                this.$store.dispatch('cart/updateStep', {
                    step: 6
                }).then(() => {
                    this.$router.replace('/checkout/rust-proofing');
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

</script>
