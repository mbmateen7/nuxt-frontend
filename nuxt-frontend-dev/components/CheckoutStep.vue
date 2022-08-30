<template>
    <div class="progress-lint">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="bar-bottm-main">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="bar-bottom-flex">
                                        <li class="items-bar-border" :class="{'active' : activeStep==1,'done':variation && activeStep!=1}" @click="goToStep(1)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 1</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Color
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>1/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==2,'done':personalDetails && activeStep!=2}" @click="goToStep(2)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 2</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Personal Details
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>2/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==3,'done':deliveryPickup && activeStep!=3}" @click="goToStep(3)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 3</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Delivery/Pick up
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>3/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==4,'done':protection && activeStep!=4}" @click="goToStep(4)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 4</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Scooter Mart <br>
                                                    Protection
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>4/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==5,'done':membership && activeStep!=5}" @click="goToStep(5)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 5</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Scooter Mart <br>
                                                    Membership
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>5/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==6,'done':rustProofing && activeStep!=6}" @click="goToStep(6)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 6</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Rust Proofing
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>6/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==7,'done':security && activeStep!=7}" @click="goToStep(7)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 7</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Security
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>7/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==8,'done':(activeStep!=8 && insurance)}" @click="goToStep(8)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 8</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Accessories
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>8/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==9,'done':insurance  && activeStep!=9}" @click="goToStep(9)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 9</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Insurance
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>9/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==10,'done':license && activeStep!=10}" @click="goToStep(10)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 10</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Driver's License
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>10/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==11,'done':activeStep>11 && activeStep!=11}" @click="goToStep(11)">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 11</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Confirmation
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>11/12</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="items-bar-border" :class="{'active' : activeStep==12}">
                                            <a href="#" class="bar-box">
                                                <div class="check-bar-icon">
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                                <p class="step-p">Step 12</p>
                                                <p class="done-p">Done</p>
                                                <p class="title-heading">
                                                    Payment
                                                </p>
                                                <p class="title-in-progress">
                                                    In Progress
                                                </p>
                                                <p class="text-links-mobile">
                                                    Step: <span>12/12</span>
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
        computed: {
            ...mapGetters({
                stepName: 'cart/getStepName',
                activeStep: 'cart/getActiveStep',
                variation: 'cart/getVariation',
                personalDetails: 'cart/getPersonalDetails',
                deliveryPickup: 'cart/getDeliveryPickup',
                rustProofing: 'cart/getRustProofing',
                membership: 'cart/getMembership',
                protection: 'cart/getProtection',
                security: 'cart/getSecurity',
                accessories: 'cart/getAccessories',
                insurance: 'cart/getInsurance',
                license: 'cart/getLicenseFront',
                confirmation: 'cart/getConfirmation',
            }),
        },
        methods: {
            goToStep(step) {
                this.$store.dispatch('cart/updateStep', {
                    step: step
                }).then(res => {
                    switch (step) {
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
        }
    }

</script>


<style scoped>
    .fa.fa-check-circle {
        font-size: 18px;
        color: white;
    }

    .progress-link:not(.done) {
        pointer-events: none;
    }

    .progress-link.done {
        cursor: pointer;
    }

</style>
