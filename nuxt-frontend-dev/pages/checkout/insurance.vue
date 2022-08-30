<template>
    <div class="insureance-main">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="insureance-tabs">
                        <!-- Nav pills -->
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item" v-for="(i,index) in insurances" :key="i.id">
                                <a class="nav-link" :class="{'active': (index==0 && !insurance) || (insurance && insurance.insurance_id == i.id)}" data-toggle="pill" :href="'#tab'+i.id">
                                    <img class="img-fluid" :src="i.icon" alt="img">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :class="{'active': insurance && !insurance.enabled}" data-toggle="pill" href="#none" @click="selectNone()">None</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div :id="'tab'+i.id" class="container tab-pane" v-for="(i,index) in insurances" :key="i.id" :class="{'active': (index==0 && !insurance) || (insurance && insurance.insurance_id == i.id)}">
                                <div class="heaght-upper">

                                </div>
                                <div class="warrenty-height d-flex align-items-start justify-content-center">
                                    <div class="d-flex insurance-card-main">
                                        <div class="insureance-card" v-for="p in i.insurance_packages" :key="p.id" :class="{'selected':insurance && insurance.id == p.id}">
                                            <h1 class="insurance-heading">{{ p.name }}</h1>
                                            <div class="img-insureance">
                                                <img class="img-fluid" :src="p.icon" alt="img">
                                            </div>
                                            <div class="card-body-insurance">
                                                <p class="card-body-insurane">Benefits</p>
                                                <div class="border-bottm-box-ctm">
                                                    <div class="insureance-text-box">
                                                        <div class="insuarence-heght-para">
                                                            <p class="insureance-text mb-0">{{ p.description }}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <p class="save-t">{{ p.price | currencyFormat }} / year</p>
                                                <div class="add-to-cart">
                                                    <a class="add-cart-to mx-auto" href="javascript:void(0)" @click="selectInsurance(p)" v-if="!insurance || (insurance && !insurance.enabled) || (insurance && insurance.id != p.id)">Select</a>
                                                    <a class="add-cart-to mx-auto" href="javascript:void(0)" v-if="insurance && ((insurance.enabled && insurance.id == p.id))">Selected</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="none" class="container tab-pane fade custom-show">
                                <div class="heaght-upper" style="height: 25rem;">
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
                    <div class=" d-flex align-items-center justify-content-center mt-3 mb-sett-insuarnace ">
                        <button @click="nextStep" class="save-btn-continue" type="button" :disabled="!insurance">
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
        data() {
            return {
                insurances: []
            }
        },
        computed: {
            ...mapGetters({
                insurance: 'cart/getInsurance'
            })
        },
        mounted() {
            this.$repositories.cart.getInsurances().then(res => {
                this.insurances = res.data;
            }).catch(err => {
                console.log(err);
            });
        },
        methods: {
            selectInsurance(insurance) {
                this.$store.dispatch('cart/addToCart', {
                    product: {
                        ...insurance,
                        enabled: true
                    },
                    key: 'insurance',
                    price: insurance.price,
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            selectNone() {
                this.$store.dispatch('cart/addToCart', {
                    product: {
                        enabled: false
                    },
                    key: 'insurance',
                }).then(() => {

                }).catch(err => {
                    console.log(err);
                });
            },
            nextStep() {
                this.$store.dispatch('cart/updateStep', {
                    step: 10,
                }).then(() => {
                    this.$router.replace('/checkout/drivers-license');
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

</script>
<style lang="scss" scoped>
    .select-btn-insureance {
        & {}
    }

</style>
