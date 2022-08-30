<template>
    <div class="driver-main">
        <div class="container">
            <form @submit.prevent="uploadLicense">
                <div class="row">
                    <div class="col-md-12">
                        <div class="warrenty-height">
                            <div class="driver-upload">
                                <div class="upload-box">
                                    <div class="upload-sec ">
                                        <!-- image upload -->
                                        <div class="qust-filed">
                                            <h3 class="upload-heading text-center">
                                                Front Side
                                            </h3>
                                            <label for="choose-file-front" class="btn-tertiary js-labelFile d-flex align-items-center flex-column">
                                                <div class="form-control py-2 d-flex align-items-center justify-content-center" :style="[frontImage.length?{backgroundImage:`url(${frontImage})`}: {backgroundImage:'none'}]">
                                                    <input type="file" id="choose-file-front" :required="frontImage.length == 0" class="input-file d-none" ref="frontImage" @change="frontImagePreview">
                                                    <div class="img-upload">
                                                        <img class="img-fluid" src="/license.svg" alt="img" v-if="frontImage.length == 0">
                                                    </div>
                                                </div>
                                            </label>
                                            <h5 class="mb-0 text-center text text-danger" v-if="frontImageError.length">{{ frontImageError }}</h5>
                                        </div>
                                        <div class="qust-filed">
                                            <h3 class="upload-heading text-center">
                                                Back Side
                                            </h3>
                                            <label for="choose-file-back" class="btn-tertiary js-labelFile d-flex align-items-center flex-column">
                                                <div class="form-control py-2 d-flex align-items-center justify-content-center" :style="[backImage.length?{backgroundImage:`url(${backImage})`}: {backgroundImage:'none'}]">
                                                    <input type="file" id="choose-file-back" :required="backImage.length == 0" class="input-file d-none" ref="backImage" @change="backImagePreview">
                                                    <div class="img-upload">
                                                        <img class="img-fluid" src="/license.svg" alt="img" v-if="backImage.length == 0">
                                                    </div>
                                                </div>
                                            </label>
                                            <h5 class="mb-0 text-center text text-danger" v-if="backImageError.length">{{ backImageError }}</h5>
                                        </div>
                                        <!-- image upload -->
                                    </div>
                                    <div class="check-box-drivers d-flex justify-content-center">
                                        <div class="remember-me">
                                            <label class="custom-check">
                                                <input type="checkbox" checked required>
                                                <span class="checkmark rounded"></span>
                                                <div class="prvc pl-0">I confirm that this is a picture of my driver's license, and my face and personal details are clearly visible </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-center mt-5">
                                    <button class="save-btn-continue" @click="showErrors" type="submit">Save &amp; Continue</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </form>
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
                frontImage: '',
                backImage: '',
                backImageError: '',
                frontImageError: ''
            }
        },
        computed: {
            ...mapGetters({
                licenseFront: 'cart/getLicenseFront',
                licenseBack: 'cart/getLicenseBack'
            }),
            form() {
                let form = new FormData();
                form.delete('front');
                form.delete('back');
                form.delete('step');
                form.append('front', (this.$refs.frontImage.files[0] || null));
                form.append('back', (this.$refs.backImage.files[0] || null));
                form.append('step', 11);
                return form;
            }
        },
        watch: {
            licenseFront() {
                if (this.licenseFront) {
                    this.frontImage = this.licenseFront
                }
            },
            licenseBack() {
                if (this.licenseBack) {
                    this.backImage = this.licenseBack
                }
            }
        },
        mounted() {
            if (this.licenseFront) {
                this.frontImage = this.licenseFront
            }
            if (this.licenseBack) {
                this.backImage = this.licenseBack
            }
        },
        methods: {
            frontImagePreview(e) {
                let file = e.target.files[0];
                this.frontImage = URL.createObjectURL(file);
                this.frontImageError = ''
            },
            backImagePreview(e) {
                let file = e.target.files[0];
                this.backImage = URL.createObjectURL(file);
                this.backImageError = ''
            },
            uploadLicense() {
                this.$store.dispatch('cart/updateLicense', this.form).then(() => {
                    this.$router.replace('/checkout/confirmation');
                });
            },
            showErrors() {
                if (this.frontImage.length == 0) {
                    this.frontImageError = 'Please select license front image'
                } else this.frontImageError = '';
                if (this.backImage.length == 0) {
                    this.backImageError = 'Please select license back image'
                } else this.backImageError = '';
            }
        }
    }

</script>

<style lang="scss" scoped>
    .qust-filed .btn-tertiary .form-control {
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
        background-position: center !important;
    }

</style>
