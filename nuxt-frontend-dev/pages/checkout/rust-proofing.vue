<template>
    <div class="rust-proofing">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-10 mx-auto">
                    <div class="rust-moblie-heigt">
                        <div class="rust-box active w-100">
                            <div class="top-Recommended">Recommended</div>
                            <div class="rust-content">
                                <p class="rust-p">ADD RUST PROOFING</p>
                                <div class="img-rust">
                                    <img class="img-fluid" src="/rust-logo.jpg" alt="img">
                                </div>
                                <div class="rust-para">
                                    <p class="para-rust-t">
                                        Noxudol is a superior line of rust-proofing products engineered to provide excellent protection to all motor vehicles.we will apply the Noxudol to the interior metal components of your motorcycle while we are preparing it for your delivery
                                    </p>
                                </div>
                                <p class="rust-reword">Reward:</p>
                                <div class="rust-para">
                                    <p class="para-rust-t">
                                        Bermuda has high levels of salt and moisture in our atmosphere, leading to fast rusting / corrosion. Noxudol seals the metal, protects the interior metal components from the elements and significantly slows down rusting process. we highly recommend this
                                        for metal bodied motorcycle like Vespas models and Honda Active models.
                                    </p>
                                </div>
                                <hr class="hr-line">
                                <div class="total-rust">
                                    <p class="rust-total">Total value: <span>$455</span> </p>
                                    <p class="rust-save">Save $125 <span>Pay $375</span></p>
                                </div>
                                <div class="rust-btns">
                                    <a class="rust-btn-add" href="javascript:void(0)" @click="selectRustProofing()" v-if="!rust|| (rust && !rust.enabled)">Select</a>
                                    <a class="rust-btn-add" href="javascript:void(0)" @click="skip" v-if="rust && rust.enabled">Remove</a>
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
                    <div class=" d-flex align-items-center justify-content-center mt-5 ">
                        <button @click="nextStep" class="save-btn-continue" type="button">
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
                rust: 'cart/getRustProofing'
            })
        },
        methods: {
            selectRustProofing() {
                this.$store.dispatch('cart/addToCart', {
                    product: {
                        price: 375,
                        enabled: true
                    },
                    key: 'rust_proofing',
                    price: 375
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            async skip() {
                await this.$store.dispatch('cart/addToCart', {
                    product: {
                        price: 0,
                        enabled: false
                    },
                    key: 'rust_proofing'
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            async nextStep() {
                if (!this.rust) {
                    await this.skip();
                }
                await this.$store.dispatch('cart/updateStep', {
                    step: 7,
                }).then(() => {
                    this.$router.replace('/checkout/security');
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

</script>
