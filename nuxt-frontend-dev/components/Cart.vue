<template>
    <div class="links-list">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="personal-detail-cart">
                        <div class="inline-flex-links">
                            <a class="arrow-left-link" href="javascript:void(0)" v-if="step >1" @click="previousStep">
                                <div class="link-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="69.715" height="45.37" viewBox="0 0 69.715 45.37">
                                        <g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(68.215 43.249) rotate(180)">
                                            <path id="Path_73" data-name="Path 73" d="M63.942,0H0" transform="translate(2.774 20.104)" fill="none" stroke="#dc0100" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                            <path id="Path_74" data-name="Path 74" d="M20.564,41.128,0,20.564,20.564,0" transform="translate(0 0)" fill="none" stroke="#dc0100" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        </g>
                                    </svg>
                                </div>

                            </a>
                            <div class="right-link-text">
                                <h3 class="Choose-Colour">{{ name }}</h3>
                                <p class="links-p" v-if="title.length">{{ title }}</p>
                            </div>
                        </div>
                        <div class="cart-logos">
                            <a href="javascript:void(0)" class="motor-bike" v-if="bike">
                                <img class="img-fluid" v-if="!variation" :src="bike.variations[0].image" alt="img">
                                <img class="img-fluid" v-if="variation" :src="variation.image" alt="img">
                            </a>
                            <a href="javascript:void(0)" class="total-bike">
                                <div class="img-cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </div>
                                <div class="cart-text">
                                    <p class="price-t">Price</p>
                                    <p class="prive-value">{{ cartPrice | currencyFormat }} </p>
                                </div>
                            </a>
                            <!-- <i data-feather="circle"></i> -->
                        </div>
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
        computed: {
            ...mapGetters({
                name: 'cart/getStepName',
                title: 'cart/getStepTitle',
                cartPrice: 'cart/getCartValue',
                bike: 'cart/getProduct',
                variation: 'cart/getVariation',
                step: 'cart/getActiveStep'
            }),
        },
        methods: {
            toCurrencyString(number) {
                console.log(number);
                if (number != undefined)
                    return number.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    });
            },
            previousStep() {
                this.$store.dispatch('cart/updateStep', {
                    step: this.step - 1
                }).then(res => {
                    switch (this.step) {
                        case 1:
                            this.$router.replace('/checkout/color');
                            break;
                        case 2:
                            this.$router.replace('/checkout/personal-details');
                            break;
                        case 3:
                            this.$router.replace('/checkout/delivery-pick-up');
                            break;
                        case 4:
                            this.$router.replace('/checkout/scooter-protection');
                            break;
                        case 5:
                            this.$router.replace('/checkout/membership');
                            break;
                        case 6:
                            this.$router.replace('/checkout/rust-proofing');
                            break;
                        case 7:
                            this.$router.replace('/checkout/security');
                            break;
                        case 8:
                            this.$router.replace('/checkout/accessories');
                            break;
                        case 9:
                            this.$router.replace('/checkout/insurance');
                            break;
                        case 10:
                            this.$router.replace('/checkout/drivers-license');
                            break;
                        case 11:
                            this.$router.replace('/checkout/confirmation');
                            break;

                        default:
                            break;
                    }
                })
            }

        },

    }

</script>
