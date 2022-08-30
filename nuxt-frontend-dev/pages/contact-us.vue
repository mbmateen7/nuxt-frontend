<template>
    <div class="cards-login contact-us-page">

        <div class="container container-ctm-width">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-heading-box-sec mb-5">
                        <h1 class="main-heading-sec">
                            Contact Us
                        </h1>
                        <p class="afford-text-sec"></p>
                    </div>
                    <div class="box-card box-card-contact-us">

                        <div class="left-img">
                            <img class="img-fluid" src="/contact-img.jpg" alt="img">
                        </div>
                        <div class="right-login-box">
                            <h1 class="send-us">Send us a message <br> for any query</h1>

                            <form @submit.prevent="sendContactQuery()">
                                <div class="inputs-box">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-style">
                                                    <input type="text" class="ctm-input" placeholder="First Name" v-model="query.first_name" required>

                                                    <span class="text text-danger" v-if="error.first_name.length">{{ error.first_name }}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-style">
                                                    <input type="text" class="ctm-input" placeholder="Last Name" v-model="query.last_name" required>
                                                    <span class="text text-danger" v-if="error.last_name.length">{{ error.last_name }}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-style">
                                                    <input type="text" class="ctm-input" placeholder="Email ID" v-model="query.email" required>
                                                    <span class="text text-danger" v-if="error.email.length">{{ error.email }}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-style">
                                                    <input type="text" class="ctm-input" placeholder="Phone Number" v-model="query.phone_number" v-maska="'+1 (441) ###-####'" required>
                                                    <span class="text text-danger" v-if="error.phone_number.length">{{ error.phone_number }}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="input-style">
                                                    <input type="text" class="ctm-input" placeholder="Message" v-model="query.message">
                                                    <span class="text text-danger" v-if="error.message.length">{{ error.message }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="d-flex align-items-center justify-content-center">
                                                <button type="submit" class="contact-btn">Send</button>
                                                <button type="button" ref="modalTrigger" data-toggle="modal" data-target="#confirmModal" class="d-none">Modal</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="address-bar">
                        <div class="address-card-main">
                            <h3 class="drop-us">Drop Us A line</h3>
                            <a href="tel:+(441) 232-2453">
                                <div class="d-flex address-anchor">
                                    <div class="phone-box">

                                        <svg id="phone_icon_2" data-name="phone icon 2" xmlns="http://www.w3.org/2000/svg" width="22.996" height="23" viewBox="0 0 22.996 23">
                                            <g id="OBJECTS">
                                                <path id="Path_260" data-name="Path 260" d="M22.414,16.971l-2.841-2.865a2.034,2.034,0,0,0-2.859,0l-1.293,1.317a1.542,1.542,0,0,1-2.165,0L7.623,9.783a1.53,1.53,0,0,1,0-2.165L8.9,6.307a2.028,2.028,0,0,0,0-2.865L6.034.6A2.028,2.028,0,0,0,3.175.6c-.587.593-.8.765-1.038,1.032a7.3,7.3,0,0,0,0,10.308l8.926,8.932a7.277,7.277,0,0,0,10.308,0l1.044-1.038a2.034,2.034,0,0,0,0-2.859ZM18.6,15.061,21.46,17.92a.682.682,0,0,1,0,.955l-.48.474L17.2,15.541l.474-.48A.682.682,0,0,1,18.6,15.061ZM5.079,1.551,7.937,4.4a.67.67,0,0,1,0,.955l-.474.474L3.655,2.019l.5-.474A.67.67,0,0,1,5.079,1.551Zm6.933,18.385L3.086,10.981a5.931,5.931,0,0,1-.368-8.012L6.526,6.788a2.882,2.882,0,0,0,.125,3.938l5.634,5.634h0a2.871,2.871,0,0,0,3.938.125l3.8,3.8a5.931,5.931,0,0,1-8.012-.374Z" transform="translate(-0.005 -0.007)" fill="#fff" />
                                            </g>
                                        </svg>


                                    </div>
                                    <p class="phone-ext">(441) 232-2453</p>
                                </div>
                            </a>
                        </div>
                        <div class="address-card-main">
                            <h3 class="drop-us">Send An Email</h3>
                            <a href="mailto:info@scootermart.bm">
                                <div class="d-flex address-anchor">
                                    <div class="phone-box">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.407" height="16.389" viewBox="0 0 14.407 16.389">
                                            <g id="email" transform="translate(0 0)">
                                                <path id="Path_263" data-name="Path 263" d="M10.48,10.639a3.432,3.432,0,0,0,3.342.184.481.481,0,1,0-.4-.858A2.5,2.5,0,0,1,11,9.82a2.4,2.4,0,1,1,3.694-2.025.481.481,0,0,1-.961,0h0A1.442,1.442,0,1,0,12.29,9.236a1.424,1.424,0,0,0,.948-.356,1.42,1.42,0,0,0,.961.369,1.442,1.442,0,0,0,1.437-1.442,3.364,3.364,0,1,0-5.149,2.832ZM12.29,8.288a.481.481,0,1,1,.476-.536.468.468,0,0,0,0,.133.476.476,0,0,1-.476.4Z" transform="translate(-5.087 -2.526)" fill="#fff" />
                                                <path id="Path_264" data-name="Path 264" d="M14.407,6.307a.485.485,0,0,0-.142-.339L12.485,4.187V.481A.481.481,0,0,0,12.013,0H2.4a.481.481,0,0,0-.481.481V4.187L.142,5.968h0A.485.485,0,0,0,0,6.307H0v8.645a1.442,1.442,0,0,0,1.442,1.437H12.966a1.442,1.442,0,0,0,1.442-1.437V6.307Zm-1.158,0-.764.759V5.543ZM11.533.961V4.393h0V8.036L8.924,10.627H5.492l-2.609-2.6V4.385h0V.952ZM1.922,7.066l-.764-.759.764-.764ZM.961,14.75V7.457L4.6,11.1Zm.678.7L5.5,11.584H8.933l3.861,3.861Zm11.807-.682L9.8,11.121l3.643-3.643Z" fill="#fff" />
                                            </g>
                                        </svg>


                                    </div>
                                    <p class="phone-ext">info@scootermart.bm</p>
                                </div>
                            </a>
                        </div>
                        <div class="address-card-main">
                            <h3 class="drop-us">Pop by in Paget</h3>
                            <a href="https://www.google.com/maps/place/Scooter+Mart/@32.2860849,-64.7763646,16.53z/data=!4m5!3m4!1s0x8a2d14689b62f3cf:0xdfa668714d4ac263!8m2!3d32.2857373!4d-64.7734767" target="_blank">
                                <div class="d-flex address-anchor">
                                    <div class="phone-box">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17.083" viewBox="0 0 12 17.083">
                                            <g id="location" transform="translate(-0.01)">
                                                <path id="Path_261" data-name="Path 261" d="M6.015,0A6.01,6.01,0,0,0,.9,9.163l4.768,7.684a.493.493,0,0,0,.425.236h0a.5.5,0,0,0,.429-.256l4.647-7.756A6.01,6.01,0,0,0,6.015,0ZM10.31,8.57,6.088,15.625,1.753,8.638A5.008,5.008,0,1,1,10.31,8.57Z" fill="#fff" />
                                                <path id="Path_262" data-name="Path 262" d="M10.166,7.5C8.69,7.5,7.491,8.991,7.49,10.835s1.195,3.34,2.671,3.341,2.674-1.494,2.674-3.338S11.641,7.5,10.166,7.5Zm0,5.564a2.041,2.041,0,0,1-1.782-2.225,2.041,2.041,0,0,1,1.782-2.225,2.041,2.041,0,0,1,1.782,2.225A2.041,2.041,0,0,1,10.166,13.064Z" transform="translate(-4.151 -4.676)" fill="#fff" />
                                            </g>
                                        </svg>

                                    </div>
                                    <p class="phone-ext">2 Lover's Lane, Paget</p>
                                </div>
                            </a>
                        </div>
                        <div class="address-card-main">
                            <h3 class="drop-us">Pop by in Hamilton</h3>
                            <a href="https://www.google.com/maps/place/Scooter+Mart+-+Hamilton/@32.2938994,-64.7888243,17z/data=!3m1!4b1!4m5!3m4!1s0x8a2d150deb7cf7bd:0x5b40a088d1302c48!8m2!3d32.2938949!4d-64.7866356" target="_blank">
                                <div class="d-flex address-anchor">
                                    <div class="phone-box">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17.083" viewBox="0 0 12 17.083">
                                            <g id="location" transform="translate(-0.01)">
                                                <path id="Path_261" data-name="Path 261" d="M6.015,0A6.01,6.01,0,0,0,.9,9.163l4.768,7.684a.493.493,0,0,0,.425.236h0a.5.5,0,0,0,.429-.256l4.647-7.756A6.01,6.01,0,0,0,6.015,0ZM10.31,8.57,6.088,15.625,1.753,8.638A5.008,5.008,0,1,1,10.31,8.57Z" fill="#fff" />
                                                <path id="Path_262" data-name="Path 262" d="M10.166,7.5C8.69,7.5,7.491,8.991,7.49,10.835s1.195,3.34,2.671,3.341,2.674-1.494,2.674-3.338S11.641,7.5,10.166,7.5Zm0,5.564a2.041,2.041,0,0,1-1.782-2.225,2.041,2.041,0,0,1,1.782-2.225,2.041,2.041,0,0,1,1.782,2.225A2.041,2.041,0,0,1,10.166,13.064Z" transform="translate(-4.151 -4.676)" fill="#fff" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p class="phone-ext">10 Church Street, City of Hamilton</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="maps-box">
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body text-center p-5">
                        <h4>Your query is sent. A representative will contact you soon</h4>
                    </div>
                </div>
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
                error: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    message: ''
                },
                success: false
            }
        },
        methods: {
            sendContactQuery() {
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
                    this.$refs.modalTrigger.click();
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
                    this.error.phone_number = 'Please enter phone number';
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

<style>
    #confirmModal .modal-content {
        border-radius: 2rem;
    }

</style>
