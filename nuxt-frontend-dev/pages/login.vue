<template>
    <div class="cards-login">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="box-card">

                        <div class="left-img">
                            <img class="img-fluid" src="/login.png" alt="img">
                        </div>
                        <div class="right-login-box">
                            <div class="lost">
                                <p class="lost-p"><span>Create New account</span>
                                    <NuxtLink to="/signup">Click Here</NuxtLink>
                                </p>
                            </div>
                            <h1 class="log-heading">Log In</h1>
                            <p class="login-text">Login to your account to buy your bike now.</p>
                            <div class="inputs-box">
                                <form @submit.prevent="loginUser">
                                    <div class="alert alert-danger" v-if="error.length">{{ error }}</div>
                                    <div class="input-style  mb-2">
                                        <label class="d-block">Email<span class="text-danger">*</span></label>
                                        <input type="email" class="ctm-input" v-model="email" placeholder="Email ID">
                                        <span v-if="emailError" class="text text-danger small">{{emailError}}</span>
                                    </div>
                                    <div class="input-style">
                                        <label class="d-block">Password<span class="text-danger">*</span></label>
                                        <div class="type-pass">
                                            <input :type="passwordType" class="ctm-input" placeholder="Password" v-model="password">
                                            <div class="icon-eye d-flex align-items-center justify-content-center">
                                                <img src="/Icon feather-eye.svg" alt="img" @click="showHidePassword()">
                                            </div>
                                        </div>
                                        <span v-if="passwordError" class="text text-danger small">{{passwordError}}</span>
                                    </div>
                                    <!-- <a class="fotgot-password" href="reset-password.html">Forgot Password?</a> -->
                                    <div class="d-flex align-items-center justify-content-end mt-4">
                                        <input type="submit" value="Log In" class="login-p">
                                    </div>
                                </form>
                            </div>
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

        data() {
            return {
                email: '',
                password: '',
                emailError: '',
                passwordError: '',
                passwordType: 'password',
                error: ''
            }
        },
        computed: {
            ...mapGetters({
                product: 'cart/getSelectedProduct'
            })
        },
        methods: {
            async loginUser() {
                if (!this.checkForm()) {
                    return false;
                }
                this.error = '';
                await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                }).then(async (res) => {
                    console.log(this.product);
                    if (this.product) {
                        // Update cart after login against user
                        await this.$store.dispatch('cart/clear').then(async () => {
                            await this.$store.dispatch('cart/updateStep', {
                                step: 1,
                                name: 'Color',
                                title: 'Select a color for your bike'
                            }).then(async () => {

                                await this.$store.dispatch('cart/addToCart', {
                                    product: this.product,
                                    key: 'product',
                                    price: this.product.price
                                }).then(() => {
                                    this.$router.push('/checkout/color')
                                });
                            }).catch(error => {
                                console.log('error', error);
                            });
                        })
                    } else {
                        this.$router.back();
                    }

                }).catch(res => {
                    this.error = res.message[0]
                });
            },

            checkForm() {
                this.emailError = this.passwordError = '';
                let check = true;
                if (!this.email) {
                    this.emailError = "Email is required";
                    check = false;
                }
                if (this.email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
                    this.emailError = 'Please enter a valid email address';
                    check = false;
                }
                if (!this.password) {
                    this.passwordError = 'Password is required';
                    check = false;
                }
                return check;
            },
            showHidePassword() {
                if (this.passwordType == 'text') {
                    this.passwordType = 'password'
                } else this.passwordType = 'text';
            }
        }
    }

</script>

<style>

</style>
