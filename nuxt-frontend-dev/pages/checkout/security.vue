<template>
    <section class="security-main">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="security-flex">
                        <div class="video-main">
                            <a href="javascript:void(0)" class="play-circle" @click="plaVideo" ref="playIcon" style="display:none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="73.302" height="73.354" viewBox="0 0 73.302 73.354">
                                    <path id="play_button-01" data-name="play button-01" d="M73.3,34.532v4.29c-.063.523-.126,1.025-.167,1.549a36.274,36.274,0,0,1-9.208,20.76A36.089,36.089,0,0,1,42.96,72.787c-1.381.251-2.783.377-4.165.565h-4.29c-1.235-.146-2.469-.272-3.683-.46A35.663,35.663,0,0,1,11,62.826,35.731,35.731,0,0,1,.185,32.984,34.916,34.916,0,0,1,9.142,12.5,35.813,35.813,0,0,1,35.092.044,34.828,34.828,0,0,1,55.307,5.15a36.077,36.077,0,0,1,17.411,25.2c.251,1.381.377,2.783.565,4.165Zm-45.83,2.114c0,4.478,0,8.978.021,13.456a2.5,2.5,0,0,0,.5,1.423c.5.628,1.277.544,2.2-.042q10.3-6.623,20.592-13.226c1.549-1,1.549-2.135,0-3.139q-10.265-6.592-20.53-13.205a1.79,1.79,0,0,0-1.988-.293,1.849,1.849,0,0,0-.8,1.863V36.667Z" transform="translate(-0.003 0.002)" fill="#fff" />
                                </svg>
                            </a>
                            <video class="video-label" ref="playCircle" muted autoplay @ended="showIcon" controls>
                                <source src="/SecurityAnimation.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <!-- <video width="400" controls>
                                <source src="img/Security-Animation.mov" type="video/mp4">
                                <source src="mov_bbb.ogg" type="video/ogg">
                                Your browser does not support HTML video.
                              </video> -->

                        </div>

                        <div class="right-security-card">
                            <div class="pick-up-box pick-up-box-member ">
                                <div class="top-choice">Top Choice</div>
                                <h2 class="basic">ROADSIDE</h2>
                                <!-- <p class="member-para">MEMBERSHIP</p> -->
                                <div class="pick-img">
                                    <img class="img-fluid" src="img/member-1.png" alt="img">
                                </div>
                                <h2 class="basic">$100 / year</h2>

                                <h2 class="basic-2">Benefits</h2>
                                <div class="benefit-box">
                                    <p class="benefit-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg></span>service
                                        free
                                    </p>
                                    <p class="benefit-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg></span>2
                                        Basic Engine Services</p>
                                    <p class="benefit-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg></span>Roadside
                                        assistance for 1 year</p>
                                    <p class="benefit-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg></span>1
                                        Comprehensive General Service</p>
                                    <p class="benefit-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg></span>VIP
                                        priority bookings</p>

                                </div>
                                <hr class="hr-line">
                                <p class="deliver-by ">Total value: $185</p>
                                <p class="save-t">Save $86 / year</p>

                                <div class="rust-btns add-to-cart">
                                    <button type="button" class="add-cart-to" @click="selectSecurity()" v-if="!security|| (security && !security.enabled)">Select</button>
                                    <button type="button" class="add-cart-to" @click="skip()" v-if="security && security.enabled">Remove</button>
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
                    <div class=" d-flex align-items-center justify-content-center  ">
                        <button @click="nextStep" class="save-btn-continue" type="button">
                            Save &amp; Continue
                        </button>
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
                security: 'cart/getSecurity'
            })
        },
        methods: {
            selectSecurity() {
                this.$store.dispatch('cart/addToCart', {
                    product: {
                        enabled: true,
                        price: 100
                    },
                    key: 'security',
                    price: 100
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            async skip() {
                await this.$store.dispatch('cart/addToCart', {
                    product: {
                        enabled: false,
                        price: 0
                    },
                    key: 'security',
                    price: 100
                }).then(() => {}).catch(err => {
                    console.log(err);
                });
            },
            async nextStep() {
                if (!this.security) {
                    await this.skip()
                }
                this.$store.dispatch('cart/updateStep', {
                    step: 8
                }).then(() => {
                    this.$router.replace('/checkout/accessories');
                }).catch(err => {
                    console.log(err);
                });
            },
            plaVideo() {
                this.$refs.playIcon.style.display = 'none';
                this.$refs.playCircle.play();

            },
            showIcon() {
                this.$refs.playIcon.style.display = 'flex';
            }
        }
    }

</script>

<style>

</style>
