<template>
    <div class="main-heading-box">
        <div class="main-heading-box-sec mb-5">
            <h1 class="main-heading-sec">
                Get In Touch
            </h1>
            <p class="afford-text-sec">Feel free to contact or visit us</p>
        </div>
        <div class="form-bootm ">
            <div class="container">
                <form @submit.prevent="sendContactQuery" ref="sendContactForm">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input-style">
                                        <input type="text" class="ctm-input" placeholder="First Name" v-model="query.first_name">
                                        <span class="text text-danger" v-if="error.first_name">{{ error.first_name }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-style">
                                        <input type="text" class="ctm-input" placeholder="Last Name" v-model="query.last_name">
                                        <span class="text text-danger" v-if="error.last_name">{{ error.last_name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input-style">
                                        <input type="text" class="ctm-input" placeholder="Email Address" v-model="query.email">
                                        <span class="text text-danger" v-if="error.email">{{ error.email }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-style">
                                        <input type="text" class="ctm-input" placeholder="Phone Number" v-model="query.phone_number" v-maska="'+1 (441) ###-####'">
                                        <span class="text text-danger" v-if="error.phone_number">{{ error.phone_number }}</span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-style">
                                        <input type="text" class="ctm-input" placeholder="Message" v-model="query.message">
                                        <span class="text text-danger" v-if="error.message">{{ error.message }}</span>
                                        <!-- <textarea class="ctm-textarea" placeholder="Message"></textarea> -->
                                        <h5 class="text text-success mt-2" v-if="success">Your query is sent. A representative will contact you soon</h5>
                                    </div>
                                    <div class="btn-send-get">
                                        <button class="get-btn" type="submit">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <GoogleMap />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
<script>
    import {
        maska
    } from "maska";
    export default {
        directives: {
            maska
        },
        data() {
            return {
                query: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    message: ''
                },
                success: false,
                error: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    message: ''
                }
            }
        },
        methods: {
            sendContactQuery(e) {
                console.log(this.query.phone_number.length);
                if (!this.validateForm()) {
                    return false;
                }
                this.$repositories.contact.getInTouch(this.query).then(res => {
                    this.query = {
                        first_name: '',
                        last_name: '',
                        email: '',
                        phone_number: '',
                        message: ''
                    };
                    this.success = true
                    setTimeout(() => {
                        this.success = false
                    }, 5000);
                }).catch(e => {
                    console.log('Contact Error', e);
                });
            },
            validateForm() {
                let check = true;
                if (!this.query.first_name.length) {
                    this.error.first_name = 'Please enter first name';
                    check = false;
                } else this.error.first_name = '';
                if (!this.query.last_name.length) {
                    this.error.last_name = 'Please enter last name';
                    check = false;
                } else this.error.last_name = '';
                if (!this.query.email.length) {
                    this.error.email = 'Please enter email address';
                    check = false;
                } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.query.email)) {
                    this.error.email = 'Please enter a valid email address';
                    check = false;
                } else this.error.email = '';
                if (!this.query.phone_number.length) {
                    this.error.phone_number = 'Please enter a phone number';
                    check = false;
                } else if (this.query.phone_number.length < 17) {
                    this.error.phone_number = 'Please enter a valid phone number';
                    check = false;
                } else this.error.phone_number = '';
                if (!this.query.message.length) {
                    this.error.message = 'Please enter a message';
                    check = false;
                } else this.error.message = '';
                return check;
            }
        }
    }

</script>
