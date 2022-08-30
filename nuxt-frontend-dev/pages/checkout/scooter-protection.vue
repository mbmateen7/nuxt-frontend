<template>
    <div class="pick-up-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-12 mx-auto">
                    <div class="warrenty-height-2 d-flex align-items-center justify-content-center">
                        <div class="delivery-cards-inline-2">
                            <div class="pick-up-box  pick-up-box-warrenty" :class="{'selected':warranty && warranty.id == w.id}" v-for="w in warranties" :key="w.id">
                                <h2 class="basic basic-warrenty">{{ w.name }}</h2>
                                <div class="pick-img pick-img-w">
                                    <img class="img-fluid" :src="w.image" alt="img">
                                </div>
                                <h2 class="basic basic-warrenty">{{ w.price | currencyFormat }} </h2>
                                <p class="deliver-by deliver-by-w">Covered for</p>
                                <h2 class="basic-2 basic-2-w">{{ w.duration }} {{ w.duration_type }} / {{ w.range }}</h2>

                                <hr class="hr-line">
                                <div class="terms-text">
                                    <p class="term-t">
                                        {{ w.description }}
                                    </p>
                                </div>
                                <div class="add-to-cart">
                                    <button type="button" class="add-cart-to add-cart-to-w" @click="selectWarranty(w)" v-if="!warranty || (warranty && warranty.id != w.id)">Select</button>
                                    <button type="button" class="add-cart-to add-cart-to-w" v-if="warranty && warranty.id == w.id">Selected</button>
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
                    <div class=" d-flex align-items-center justify-content-center mt-3">
                        <button @click="nextStep" class="save-btn-continue" type="button" :disabled="!warranty">
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
                warranty: 'cart/getProtection'
            })
        },
        data() {
            return {
                warranties: []
            }
        },
        mounted() {
            this.$repositories.cart.getWarranties().then(res => {
                this.warranties = res.data;
            }).catch(err => {
                console.log(err);
            });
        },
        methods: {
            selectWarranty(warranty) {
                this.$store.dispatch('cart/addToCart', {
                    product: warranty,
                    key: 'warranty',
                    price: warranty.price
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            nextStep() {
                this.$store.dispatch('cart/updateStep', {
                    step: 5,
                }).then(() => {
                    this.$router.replace('/checkout/membership');
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

</script>
