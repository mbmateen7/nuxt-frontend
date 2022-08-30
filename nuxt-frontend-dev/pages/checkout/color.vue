<template>
    <div class="card-motor">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-12 mx-auto ">
                    <div class="warrenty-height-2 d-flex align-items-center justify-content-center">
                        <div class="d-flex flex-cards" v-if="bike">
                            <a class="anchor-choose" href="javascript:void(0)" v-for="v in bike.variations" :key="v.id">
                                <div class="card-m">
                                    <div class="card-upper">
                                        <div class="img-m">
                                            <img class="img-fluid" :src="v.image" alt="img">
                                        </div>
                                        <div class="label-box">
                                            <p class="total">Price</p>
                                            <h3 class="label-heading">{{ bike.price | currencyFormat }}</h3>
                                        </div>
                                    </div>
                                    <div class="card-bodr-choose">
                                        <div class="choose-card-text">
                                            <div class="choose-left">
                                                <p class="avail">Availability: In Stock <span> <img src="/instock-icon.png" alt=""> </span></p>
                                                <p class="honda">{{ bike.name }}</p>
                                                <p class="avail">4 steps / SOHC / eSP / Liquid Cooling</p>
                                            </div>
                                            <button type="button" class="btn-chooose-sleact" :class="{'selected':variation && variation.id == v.id}" @click="selectVariation(v)" v-if="variation && variation.id == v.id">Selected</button>
                                            <button type="button" class="btn-chooose-sleact" @click="selectVariation(v)" v-if="!variation || (variation && variation.id != v.id)">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class=" d-flex align-items-center justify-content-center mt-3 ">
                        <button @click="nextStep" class="save-btn-continue" type="button" :disabled="!variation">
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
                bike: 'cart/getProduct',
                variation: 'cart/getVariation'
            }),
        },
        methods: {
            selectVariation(variation) {
                this.$store.dispatch('cart/addToCart', {
                    product: variation,
                    key: 'variation'
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            nextStep() {
                this.$store.dispatch('cart/updateStep', {
                    step: 2,
                }).then(() => {
                    this.$router.replace('/checkout/personal-details');
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

</script>

<style>

</style>
