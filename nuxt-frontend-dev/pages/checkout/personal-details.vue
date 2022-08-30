<template>

    <div class="cards-login personal-detail-card">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="height-for-mobile">
                        <div class="margin-custom-personal">
                            <form @submit.prevent="savePersonalDetails()">
                                <div class="box-card box-card-personal">


                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <h1 class="personal-h">Personal Details</h1>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">First Name<span class="text-danger">*</span></label>
                                                    <input type="text" class="ctm-input" placeholder="Enter Your First Name" v-model="personalDetails.first_name">
                                                    <span class="text text-danger" v-if="error.first_name.length">{{ error.first_name }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">Middle Name<span class="text-danger"></span></label>
                                                    <input type="text" class="ctm-input" placeholder="Enter Your Middle Name" v-model="personalDetails.middle_name">
                                                    <span class="text text-danger" v-if="error.middle_name.length">{{ error.middle_name }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">Last Name<span class="text-danger">*</span></label>
                                                    <input type="text" class="ctm-input" placeholder="Enter Your Last Name" v-model="personalDetails.last_name">
                                                    <span class="text text-danger" v-if="error.last_name.length">{{ error.last_name }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">Phone Number<span class="text-danger">*</span></label>
                                                    <input type="text" v-maska="'+1 (441) ###-####'" minlength="17" class="ctm-input" placeholder="Enter Your Phone Number" v-model="personalDetails.phone_number">
                                                    <span class="text text-danger" v-if="error.phone_number.length">{{ error.phone_number }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">Mobile Number<span class="text-danger">*</span></label>
                                                    <input type="text" v-maska="'+1 (441) ###-####'" class="ctm-input" minlength="17" placeholder="Enter Your Mobile Number" v-model="personalDetails.mobile_number">
                                                    <span class="text text-danger" v-if="error.mobile_number.length">{{ error.mobile_number }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">Email<span class="text-danger">*</span></label>
                                                    <input type="email" class="ctm-input" placeholder="Email ID" v-model="personalDetails.email" readonly>
                                                    <span class="text text-danger" v-if="error.email.length">{{ error.email }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">Full Address<span class="text-danger">*</span></label>
                                                    <input type="text" class="ctm-input" placeholder="Enter Your Full Address" v-model="personalDetails.address">
                                                    <span class="text text-danger" v-if="error.address.length">{{ error.address }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="search-bar-ctm">
                                                    <div class="input-style mb-2">
                                                        <label class="d-block">Perish<span class="text-danger">*</span></label>
                                                        <div class="type-pass">
                                                            <input @click="toggleDropdown()" type="text" class="ctm-input dropbtn" placeholder="Parish" readonly v-model="personalDetails.parish">
                                                            <span class="text text-danger" v-if="error.parish.length">{{ error.parish }}</span>

                                                            <ul id="myDropdown" class="dropdown-content">
                                                                <li class="list-ctm-drop" @click="selectParsish(`Devonshire`)">
                                                                    <a href="javascript:void(0)">Devonshire</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`Hamilton`)">
                                                                    <a href="javascript:void(0)">Hamilton</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`Paget`)">
                                                                    <a href="javascript:void(0)">Paget</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`Pembroke`)">
                                                                    <a href="javascript:void(0)">Pembroke</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`Sandys`)">
                                                                    <a href="javascript:void(0)">Sandys</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`Smith's`)">
                                                                    <a href="javascript:void(0)">Smith's</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`Southampton`)">
                                                                    <a href="javascript:void(0)">Southampton</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`St. George'`)">
                                                                    <a href="javascript:void(0)">St. George's</a>
                                                                </li>
                                                                <li class="list-ctm-drop" @click="selectParsish(`Warwick`)">
                                                                    <a href="javascript:void(0)">Warwick</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="input-style  mb-2">
                                                    <label class="d-block">Post Code<span class="text-danger">*</span></label>
                                                    <input type="text" class="ctm-input" v-maska="'## ##'" placeholder="E.g. 40 25" minlength="5" v-model="personalDetails.postal_code">
                                                    <span class="text text-danger" v-if="error.postal_code.length">{{ error.postal_code }}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="d-flex my-5 save-btn justify-content-center align-items-center">
                                    <button class="save-btn-continue" type="submit">Save & Continue</button>
                                </div>
                            </form>
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
    import {
        maska
    } from "maska";
    export default {
        directives: {
            maska
        },
        layout: 'checkout',
        computed: {
            ...mapGetters({
                details: 'cart/getPersonalDetails'
            })
        },
        data() {
            return {
                personalDetails: {
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    phone_number: '',
                    mobile_number: '',
                    email: this.$auth.user.email,
                    address: '',
                    parish: '',
                    postal_code: ''
                },
                error: {
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    phone_number: '',
                    mobile_number: '',
                    email: '',
                    address: '',
                    parish: '',
                    postal_code: ''
                }
            }
        },
        mounted() {
            if (this.details)
                this.personalDetails = {
                    ...this.details
                };
        },
        methods: {
            selectParsish(parish) {
                this.personalDetails.parish = parish;
                document.getElementById("myDropdown").classList.toggle("show");
            },
            savePersonalDetails() {
                if (!this.validateForm()) {
                    return;
                }
                this.$store.dispatch('cart/addToCart', {
                    product: this.personalDetails,
                    key: 'personal_details',
                }).then(() => {
                    this.$store.dispatch('cart/updateStep', {
                        step: 3,
                    }).then(() => {
                        this.$router.replace('/checkout/delivery-pick-up');
                    }).catch(err => {
                        console.log(err);
                    });
                });
            },
            toggleDropdown() {
                document.getElementById("myDropdown").classList.toggle("show");
            },
            validateForm() {
                let check = true;
                if (!this.personalDetails.first_name.length) {
                    this.error.first_name = 'Please enter first name';
                    check = false;
                } else this.error.first_name = '';

                if (!this.personalDetails.last_name.length) {
                    this.error.last_name = 'Please enter last name';
                    check = false;
                } else this.error.last_name = '';

                if (!this.personalDetails.email.length) {
                    this.error.email = 'Please enter email address';
                    check = false;
                } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.personalDetails.email)) {
                    this.error.email = 'Please enter a valid email address';
                    check = false;
                } else this.error.email = '';

                if (!this.personalDetails.phone_number.length) {
                    this.error.phone_number = 'Please enter phone number';
                    check = false;
                } else if (this.personalDetails.phone_number.length < 17) {
                    this.error.phone_number = 'Please enter a valid phone number';
                    check = false;
                } else this.error.phone_number = '';

                if (!this.personalDetails.mobile_number.length) {
                    this.error.mobile_number = 'Please enter mobile number';
                    check = false;
                } else if (this.personalDetails.mobile_number.length < 17) {
                    this.error.mobile_number = 'Please enter a valid mobile number';
                    check = false;
                } else this.error.mobile_number = '';

                if (!this.personalDetails.address.length) {
                    this.error.address = 'Please enter your address';
                    check = false;
                } else this.error.address = '';

                if (!this.personalDetails.parish.length) {
                    this.error.parish = 'Please select parish';
                    check = false;
                } else this.error.parish = '';

                if (!this.personalDetails.postal_code.length) {
                    this.error.postal_code = 'Please enter a message';
                    check = false;
                } else if (this.personalDetails.postal_code.length < 5) {
                    this.error.postal_code = 'Please enter a valid postal code';
                    check = false
                } else this.error.postal_code = '';

                return check;
            }
        }
    }

</script>

<style lang="scss" scoped>
    .ctm-select {
        position: relative;

        &::after {
            color: black;
            content: '/f0d7';
            font-family: 'Font Awesome 5 Free';
            position: absolute;
            right: 10px;
            top: 50%;
        }
    }

</style>
