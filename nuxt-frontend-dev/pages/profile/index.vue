<template>
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="updateProfile" class="inputs-box">
                <div class="row mb-4">
                    <div class="col-md-6 col-lg-6 order-custom-2">
                        <div class="input-style">
                            <label for="">Name</label>
                            <input type="text" class="ctm-input" placeholder="Name" v-model="name">
                            <span class="text text-danger small" :class="{'invisible':!errors.name.length}">{{ errors.name }}</span>
                        </div>

                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="qust-filed profile-customer-img">
                            <h3 class="upload-heading text-center">
                                Profile Picture
                            </h3>
                            <label for="choose-file-front" class="btn-tertiary js-labelFile d-flex align-items-center flex-column">
                                <div class="form-control py-2 d-flex align-items-center justify-content-center" :style="{backgroundImage:`url(${image})`}">
                                    <input type="file" id="choose-file-front" class="input-file d-none" ref="image" @change="imagePreview">
                                    <div class="img-upload">
                                        <img class="img-fluid" src="/license.svg" alt="img" v-if="!image.length">
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12 order-custom-3">
                        <div class="change-password-customer">
                            <p class="profile-customer-password">Change Password</p>
                        </div>
                        <div class="input-style">
                            <label for="">Current Password <span style="font-size:80%">(Leave blank to skip)</span></label>
                            <input type="password" class="ctm-input" placeholder="Current Password" v-model="old_password">
                            <span class="text text-danger small" :class="{'invisible':!errors.old_password.length}">{{ errors.old_password }}</span>
                        </div>
                        <div class="input-style">
                            <label for="">New Password</label>
                            <input type="password" class="ctm-input" placeholder="New Password" v-model="new_password">
                            <span class="text text-danger small" :class="{'invisible':!errors.new_password.length}">{{ errors.new_password }}</span>
                        </div>
                        <div class="input-style">
                            <label for="">Confirm Password</label>
                            <input type="password" class="ctm-input" placeholder="Confirm Password" v-model="confirm_password">
                            <span class="text text-danger small" :class="{'invisible':!errors.confirm_password.length}">{{ errors.confirm_password }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="btn-new-design">
                            <button type="submit" class="get-started">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'profile',
        data() {
            return {
                name: this.$auth.user.name,
                old_password: '',
                new_password: '',
                confirm_password: '',
                image: this.$auth.user.image,
                errors: {
                    name: '',
                    old_password: '',
                    new_password: '',
                    confirm_password: '',
                    image: ''
                }
            }
        },
        computed: {
            form() {
                let form = new FormData();
                form.append('name', this.name);
                form.append('old_password', this.old_password);
                form.append('new_password', this.new_password);
                form.append('confirm_password', this.confirm_password);
                form.append('image', (this.$refs.image.files[0] || null));
                return form;
            }
        },
        watch: {
            image() {
                this.form.set('image', this.$refs.image.files[0]);
            }
        },
        methods: {
            imagePreview(e) {
                let file = e.target.files[0];
                this.image = URL.createObjectURL(file);
            },

            updateProfile() {
                if (!this.validateForm()) {
                    return;
                }
                this.$repositories.auth.updateProfile(this.form).then(res => {
                    this.$auth.setUser(res.data);
                    this.old_password = '';
                    this.new_password = '';
                    this.confirm_password = '';
                }).catch(error => {
                    this.errors.old_password = error.message[0];
                })
            },

            validateForm() {
                let check = true;
                if (!this.name.length) {
                    this.errors.name = 'Name is required';
                    check = false;
                } else this.errors.name = '';
                if (this.old_password.length || this.new_password.length || this.confirm_password.length) {

                    if (!this.old_password.length) {
                        this.errors.old_password = 'Old password is required';
                        check = false;
                    } else this.errors.old_password = '';

                    if (!this.new_password.length) {
                        this.errors.new_password = 'Password is required';
                        check = false;
                    } else this.errors.new_password = '';

                    if (!this.confirm_password.length) {
                        this.errors.confirm_password = 'Confirm Password is required';
                        check = false;
                    } else this.errors.confirm_password = '';

                    if (this.new_password.length && this.confirm_password.length && this.new_password != this.confirm_password) {
                        this.errors.confirm_password = 'Password does not match';
                        check = false;
                    };
                } else {
                    this.errors.old_password = ''
                    this.errors.new_password = ''
                    this.errors.confirm_password = ''
                }

                return check;
            }
        }
    }

</script>
