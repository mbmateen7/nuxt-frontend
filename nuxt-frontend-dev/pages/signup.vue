<template>
    <div class="cards-login">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="box-card">

                        <div class="left-img">
                            <img class="img-fluid" src="login.png" alt="img">
                        </div>
                        <div class="right-login-box right-login-box-2">
                            <div class="lost">
                                <p class="lost-p"><span>Already have an account?</span>
                                    <NuxtLink to="/login">Click Here</NuxtLink>
                                </p>
                            </div>
                            <h1 class="log-heading">Sign Up</h1>
                            <p class="login-text login-text-2">Sign Up for a Scooter Mart account</p>
                            <div class="inputs-box">
                                <div class="alert alert-danger" v-if="responseError.length">{{ responseError }}</div>
                                <form @submit.prevent="registerUser">
                                    <div class="input-style  mb-2">
                                        <label class="d-block">Name<span class="text-danger">*</span></label>
                                        <input type="text" class="ctm-input" placeholder="Enter your name" v-model="register.name">
                                        <span v-if="errors.name" class="text text-danger small">{{errors.name}}</span>
                                    </div>
                                    <div class="input-style  mb-2">
                                        <label class="d-block">Email<span class="text-danger">*</span></label>
                                        <input type="email" class="ctm-input" placeholder="Enter your email address" v-model="register.email">
                                        <span v-if="errors.email" class="text text-danger small">{{errors.email}}</span>
                                    </div>
                                    <div class="input-style mb-2">
                                        <label class="d-block">Password<span class="text-danger">*</span></label>
                                        <div class="type-pass">
                                            <input type="password" class="ctm-input" placeholder="Enter your password" v-model="register.password">
                                            <div class="icon-eye d-flex align-items-center justify-content-center">
                                                <img src="Icon feather-eye.svg" alt="img">
                                            </div>
                                        </div>
                                        <span v-if="errors.password" class="text text-danger small">{{errors.password}}</span>
                                    </div>
                                    <div class="input-style mb-2">
                                        <label class="d-block">Re-enter password<span class="text-danger">*</span></label>
                                        <div class="type-pass">
                                            <input type="password" class="ctm-input" placeholder="Re-enter your password" v-model="register.password_confirmation">
                                            <div class="icon-eye d-flex align-items-center justify-content-center">
                                                <img src="Icon feather-eye.svg" alt="img">
                                            </div>
                                        </div>
                                        <span v-if="errors.password_confirmation" class="text text-danger small">{{errors.password_confirmation}}</span>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-end">
                                        <input type="submit" value="Sign Up" class="login-p">
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
    } from 'vuex';

    export default {
        data() {
            return {
                register: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                responseError: ''
            };
        },
        computed: {
            ...mapGetters({
                product: 'cart/getSelectedProduct'
            })
        },
        methods: {
            registerUser() {
                if (!this.checkForm()) {
                    return false;
                }
                this.responseError = ''
                this.$repositories.auth.register(this.register).then(() => {
                    this.$auth.loginWith('local', {
                        data: {
                            email: this.register.email,
                            password: this.register.password
                        }
                    }).then(async (res) => {
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
                            this.$router.push('/');
                        }
                    }).catch(error => {
                        console.log('Login Error => ', error.message);
                    });
                }).catch(error => {
                    this.responseError = error.message[0];
                    console.log('Registers Error => ', error.message);
                });
            },

            checkForm() {
                let valid = true;
                this.errors = {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
                if (!this.register.name) {
                    this.errors.name = 'Name is required';
                    valid = false;
                }
                if (this.register.name) {
                    if (this.register.name.length < 3) {
                        this.errors.name = 'Name must be of atleast 3 characters';
                        valid = false;
                    }
                }
                if (!this.register.email) {
                    this.errors.email = 'Email address is required';
                    valid = false;
                }
                if (this.register.email) {
                    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.register.email)) {
                        this.errors.email = 'Please enter a valid email address'
                        valid = false;
                    }
                }
                if (!this.register.password) {
                    this.errors.password = 'Password is required';
                    valid = false;
                }

                if (!this.register.password_confirmation) {
                    this.errors.password_confirmation = 'Confirm Password is required';
                    valid = false;
                }
                if (this.register.password && this.register.password_confirmation && this.register.password !== this.register.password_confirmation) {
                    this.errors.password_confirmation = "Password doesn't match"
                    valid = false;
                }
                return valid;
            }
        }
    }

</script>
