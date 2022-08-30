<template>
    <div v-if="order" id="customer-order-details">
        <h4 class="mb-3 heading">Order Details: {{ order.rand_id }}</h4>
        <div class="card shipping-information card-order-listing pb-0">
            <h4 class="mb-3 heading">Shipping Information</h4>
            <div class="row">
                <div class="col-md-6">
                    <div class="information-box address">
                        <div class="icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <h5 class="heading">Address:</h5>
                        <p class="subtext">{{ personalDetails.address }}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="information-box date">
                        <div class="icon">
                            <i class="fas fa-calendar-check"></i>
                        </div>
                        <h5 class="heading">Order Date:</h5>
                        <p class="subtext">{{ order.created_at | date('MMM DD, YYYY') }}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="information-box payment">
                        <div class="icon">
                            <i class="fas fa-wallet"></i>
                        </div>
                        <h5 class="heading">Payment Information</h5>
                        <p class="subtext">{{ order.payment_type }}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="information-box status">
                        <div class="icon">
                            <i class="fas fa-clipboard-list"></i>
                        </div>
                        <h5 class="heading">Order Status: <span class="subtext d-inline-block">{{ order.status }}</span></h5>
                        <h5 class="heading">Document Status: <span class="subtext d-inline-block">{{ order.status }}</span></h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="card order-summary card-order-listing">
            <h4 class="heading">Order Summary</h4>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Package</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Sub-total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ product.title }}</td>
                            <td>{{ variation.name }}</td>
                            <td>{{ product.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ product.price | currencyFormat }}</td>
                        </tr>
                        <tr v-for="ac in accessories" :key="ac.id">
                            <td>{{ ac.title }}</td>
                            <td>{{ ac.variations[0].name }}</td>
                            <td>{{ ac.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ ac.price | currencyFormat }}</td>
                        </tr>
                        <tr>
                            <td>Delivery/Pickup</td>
                            <td>{{ delivery.name }}</td>
                            <td>{{ delivery.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ delivery.price | currencyFormat }}</td>
                        </tr>
                        <tr>
                            <td>Scooter Mart Protection</td>
                            <td>{{ warranty.name }}</td>
                            <td>{{ warranty.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ warranty.price | currencyFormat }}</td>
                        </tr>
                        <tr>
                            <td>Membership</td>
                            <td>{{ membership.name }}</td>
                            <td>{{ membership.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ membership.price | currencyFormat }}</td>
                        </tr>
                        <tr v-if="rustProofing.enabled">
                            <td>Rust Proofing</td>
                            <td> -- </td>
                            <td>{{ rustProofing.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ rustProofing.price | currencyFormat }}</td>
                        </tr>
                        <tr v-if="security.enabled">
                            <td>Security</td>
                            <td> -- </td>
                            <td>{{ security.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ security.price | currencyFormat }}</td>
                        </tr>
                        <tr v-if="insurance.enabled">
                            <td>Insurance</td>
                            <td>{{ insurance.name }}</td>
                            <td>{{ security.price | currencyFormat }}</td>
                            <td>{{ 0 | currencyFormat }}</td>
                            <td>{{ security.price | currencyFormat }}</td>
                        </tr>
                        <tr class="last-row">
                            <td></td>
                            <td>
                                <h4 class="heading">Items Subtotal</h4>
                                <span>{{ cartItemCount }} Items > {{ cartValue | currencyFormat }}</span>
                            </td>
                            <td>
                                <h4 class="heading">Estimated Tax</h4>
                                <span>{{ cartTax | currencyFormat }}</span>
                            </td>
                            <td>
                                <h4 class="heading">Discount</h4>
                                <span>{{ 0 | currencyFormat }}</span>
                            </td>
                            <td>
                                <h4 class="heading">Order Total</h4>
                                <span>{{ order.amount | currencyFormat }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <div class="card document-section card-order-listing">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="decument-haeding">Documents</h3>
                </div>
                <div class="col-md-12">
                    <h4 class="para-added-after">
                        Click the link below to sign your Insurance and Registration Documents
                    </h4>
                    <div class="d-flex align-items-center  ">
                        <p class="preview-text">E-Sign Link:</p>
                        <a class="preview-link" href="javascript:void(0)">https://app.docusign.com/documents?label=action-required</a>
                    </div>
                </div>
                <div class=" col-md-12">
                    <h4 class="sign-status sign-status-deatil">
                        E-sign Status
                    </h4>
                    <div class="input-slider-custom input-slider-custom-customer-order">
                        <div class="input-slider">
                            <form action="/p/quote.php" method="GET">

                                <div id="debt-amount-slider">
                                    <input type="checkbox" name="debt-amount" id="1" value="1" required>
                                    <label for="1" data-debt-amount="1">
                                        <p class="sett-input-slider">Document Received</p>
                                    </label>
                                    <input type="checkbox" name="debt-amount" id="2" value="2" required>
                                    <label class="label-img-1" for="2" data-debt-amount="2">
                                        <p class="sett-input-slider">In Review</p>
                                    </label>
                                    <input type="checkbox" name="debt-amount" id="3" value="3" required>
                                    <label class="label-img-2" for="3" data-debt-amount="3">
                                        <p class="sett-input-slider">Completed</p>
                                    </label>

                                    <div id="debt-amount-pos"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="d-flex align-items-center justify-content-end my-2 mr-3">
                        <a class="send-btn-plane" href="javascript:void(0)">
                            <i class="fas fa-paper-plane"></i> Send
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'profile',
        data() {
            return {
                order: null,
            }
        },
        computed: {
            cart() {
                return this.order.cart || null;
            },
            product() {
                return this.cart.product || null;
            },
            variation() {
                return this.cart.variation || null;
            },
            insurance() {
                return this.cart.insurance || null;
            },
            rustProofing() {
                return this.cart.rust_proofing || null;
            },
            delivery() {
                return this.cart.delivery || null;
            },
            warranty() {
                return this.cart.warranty || null;
            },
            membership() {
                return this.cart.membership || null;
            },
            security() {
                return this.cart.security || null;
            },
            accessories() {
                return this.cart.accessories || [];
            },
            personalDetails() {
                return this.cart.personal_details || null;
            },
            cartItemCount() {
                let count = 4;
                if (this.rustProofing.enabled) {
                    count++
                }
                if (this.security.enabled) {
                    count++;
                }
                if (this.insurance.enabled) {
                    count++
                }
                count += this.accessories.length
                return count;
            },
            cartTax() {
                return (parseInt(this.cartValue) / 100) * 3.75;
            },
            cartValue() {
                let value = 0;
                for (var e of Object.keys(this.cart)) {
                    if (this.cart[e] && this.cart[e].price)
                        value += parseFloat(this.cart[e].price);
                    if (Array.isArray(this.cart[e])) {
                        this.cart[e].forEach(element => {
                            value += parseFloat(element.price)
                        });
                    }
                }
                return value;
            }
        },
        mounted() {
            this.order = null;
            this.getOrderDetails(this.$route.params.id);
        },
        methods: {
            getOrderDetails(id) {
                this.$repositories.auth.ordersDetails({
                    id: id
                }).then(res => {
                    this.order = res.data;
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
    @mixin large-1199 {
        @media (max-width: 1199px) {
            @content;
        }
    }

    @mixin medium-991 {
        @media (max-width: 991px) {
            @content;
        }
    }

    @mixin m-575 {
        @media (max-width: 575px) {
            @content;
        }
    }

    @mixin m-425 {
        @media (max-width: 425px) {
            @content;
        }
    }

    @mixin m-325 {
        @media (max-width: 325px) {
            @content;
        }
    }

    $primary-p: #0B4AA6;
    $primary-p2: #003075;
    $table-heading: #484848;
    $heading: #0D0D0D;
    $secondary-text: #434343;
    $text-8: #E8E8E8;
    $text-9: #E0E0E0;
    $text-p: #656565;
    $text-70: #707070;
    $footer-bg: #00000029;
    $body-color: #F6F6F6;
    $border-color: #D8D8D8;
    $placeholder: #989898;
    $number-of-options: 5;
    $white: #fff;
    $black: #000;
    $gradient: linear-gradient(90deg, rgba(233, 201, 103, 1) 0%, rgba(209, 177, 81, 1) 100%);

    .heading {
        font-size: 2.6rem;
        color: black;
        margin-bottom: 3rem;
    }

    .shipping-information {
        padding-top: 2.5rem !important;
        border-radius: 10px;
        margin-bottom: 3rem;

        .heading {
            font-size: 2.2rem;
        }

        .information-box {
            padding: 1.5rem;
            border-radius: 1rem;
            margin-bottom: 2rem;

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 5.5rem;
                width: 5.5rem;
                min-width: 5.5rem;
                border-radius: 1rem;
                margin-bottom: 1.5rem;
                font-size: 2rem;
                color: white;
            }

            .heading {
                font-size: 1.8rem;
                font-weight: bold;
                color: black;
                margin-bottom: 2px
            }

            .subtext {
                font-size: 1.6rem;
                font-weight: normal;
            }

            &.address {
                background-color: #E4EBF8;

                .icon {
                    background: #556FF6;
                }
            }

            &.date {
                background-color: #ECE5FF;

                .icon {
                    background: #9E9BFE;
                }
            }

            &.payment {
                background-color: #E9FCF8;

                .icon {
                    background: #1FD6AA;
                }
            }

            &.status {
                background-color: #FFEEEF;

                .icon {
                    background: #F47D55;
                }
            }
        }
    }

    .order-summary {
        padding-top: 15px !important;
        border-radius: 10px;

        .heading {
            font-size: 2rem;
        }

        .table {
            td {
                padding: 25px 10px;
            }

            .last-row {
                td {
                    padding: 20px 10px;

                    .heading {
                        font-size: 2.2rem;
                        margin-bottom: 10px;
                    }

                    span {
                        font-size: 18px;
                    }

                    &:hover {
                        .heading {
                            color: white;
                        }

                        span {
                            color: white;
                        }
                    }
                }
            }
        }
    }

    .document-section {
        background: $white;
        border-radius: 1rem;
        border: 1px solid $border-color;
        padding: 2.5rem 1.5rem 2.5rem;
        margin-top: 3rem;

        .decument-haeding {
            font-size: 2rem;
            color: $table-heading;
            font-weight: 500;
            margin-bottom: 2rem;
        }

        .pdf-link {
            border-radius: 5px;
            border: 1px solid $border-color;
            padding: 1.6rem;
            display: flex;
            align-items: center;
            width: 100%;
        }

        .pdf-link-img {
            width: 3.5rem;
            min-width: 3.5rem;
            height: 4.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 2rem;
        }

        .pdf-link-hover {
            font-size: 1.6rem;
            color: $black;
            font-weight: 400;
            margin-bottom: 0rem;
            text-decoration: underline;
            display: inline-block;

            &:hover {
                color: $primary-p;
            }
        }

        .send-btn-plane {
            width: 16.3rem;
            height: 4.8rem;
            border-radius: 5px;
            background: $primary-p;
            color: $white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            font-weight: 400;
            border: 1px solid $primary-p;
            margin: 2rem 0;

            .fa-paper-plane {
                font-size: 1.6rem;
                padding-right: 1rem;
            }

            &:hover {
                color: $primary-p;
                background: $white;
            }
        }

        .preview-link {
            font-size: 1.8rem;
            color: #3993FB;
            font-weight: 400;
            margin-bottom: 0;
            display: inline-block;
            text-decoration: underline;
            margin-left: 1.6rem;

            &:hover {
                color: $black;
            }
        }

        .preview-text {
            font-size: 1.8rem;
            color: $table-heading;
            font-weight: 400;
            margin-bottom: 0;
            white-space: nowrap;
        }
    }

    .input-slider {
        width: 109rem;
        text-align: center;
        margin: 0 auto .5rem;

        @include large-1199 {
            width: 100%;
        }

        form {
            width: 100%;
            max-width: 100%;

            #form-title {
                margin-top: 0;
                font-weight: 400;
                text-align: center;
            }

            #debt-amount-slider {
                display: flex;
                flex-direction: row;
                align-content: stretch;
                position: relative;
                width: 100%;
                height: 95px;
                user-select: none;

                &::before {
                    content: " ";
                    position: absolute;
                    height: 1px;
                    width: 100%;
                    // width: calc(100% * (#{$number-of-options - 1} / #{$number-of-options}));
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: $text-70;
                }

                input,
                label {
                    box-sizing: border-box;
                    flex: 1;
                    user-select: none;
                    cursor: pointer;
                }

                label {
                    display: inline-block;
                    position: relative;
                    width: 20%;
                    height: 100%;
                    user-select: none;
                    font-size: 14px;
                    font-weight: 400;
                    color: $black;

                    @include medium-991 {
                        font-size: 12px;
                    }

                    &::before {
                        content: attr(data-debt-amount);
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        padding-top: 0px;
                        transform: translate(-50%, -50%);
                        font-size: 14px;
                        letter-spacing: 0.4px;
                        font-weight: 400;
                        white-space: nowrap;
                        opacity: 1;
                        transition: all 0.15s ease-in-out;
                        z-index: 9;
                    }

                    &::after {
                        content: " ";
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 35px;
                        height: 35px;
                        border: 2px solid $primary-p;
                        background: #fff;
                        border-radius: 50%;
                        pointer-events: none;
                        user-select: none;
                        z-index: 1;
                        cursor: pointer;
                        transition: all 0.15s ease-in-out;
                    }

                    &:hover::after {
                        transform: translate(-50%, -50%) scale(1.25);
                    }
                }

                input {
                    display: none;

                    &:checked {
                        +label::before {
                            // font-weight: 800;
                            opacity: 1;
                            color: #fff;
                        }

                        +label::after {
                            // border-width: 4px;
                            // transform: translate(-50%, -50%) scale(0.75);
                            background: $primary-p;
                        }

                        ~#debt-amount-pos {
                            opacity: 1;
                        }

                        @for $i from 1 through $number-of-options {
                            &:nth-child(#{$i * 2 - 1})~#debt-amount-pos {
                                left: #{($i * 20%) - 10%};
                            }
                        }
                    }
                }

                #debt-amount-pos {
                    display: none;
                    // display: block;
                    position: absolute;
                    top: 50%;
                    width: 12px;
                    height: 12px;
                    background: #000;
                    border-radius: 50%;
                    transition: all 0.15s ease-in-out;
                    transform: translate(-50%, -50%);
                    border: 2px solid #fff;
                    opacity: 0;
                    z-index: 2;
                }
            }


        }
    }

    .sign-status {
        margin-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: 500;
        color: $table-heading;
        margin-top: 3rem;
    }

    .input-slider-custom {
        .input-slider form #debt-amount-slider label {
            @include large-1199 {
                font-size: 12px;
            }

            @include medium-991 {
                font-size: 11px;
            }

            @include m-325 {
                font-size: 9px;
            }
        }

        .input-slider {
            width: 96%;
            margin-bottom: 0;
            margin-top: 0px;
            margin: 0;
            margin-left: 4.5rem;
        }

        .input-slider form #debt-amount-slider {
            height: 80px;
            // margin-left: 30px;
        }

        p.sett-input-slider {
            position: absolute;
            // left: 50%;
            transform: translateX(-50%);
            // width: 100%;
            bottom: 0;
            margin-bottom: 0;
            left: 18px;

            @include m-425 {
                white-space: nowrap;
            }
        }

        .input-slider form #debt-amount-slider::before {
            top: 30px;
            width: calc(100% * (2 / 3));
            left: 16px;
            transform: translate(0%, -50%);

            @include large-1199() {
                width: calc(100% * (3 / 4));
            }
        }

        .input-slider form #debt-amount-slider label::before {
            top: 30px;
            left: 16px;
            transform: translate(-50%, -50%);
            content: '\f1d8';
            font-family: "FontAwesome";
            color: $white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            width: 38px;
            height: 38px;
            // background: url('/Sent-01.svg') #0B4AA6;
            // background-repeat: no-repeat;
            // background-position: center;
            background: #D8D8D8;
            border-radius: 50%;
        }

        .input-slider form #debt-amount-slider label::after {
            top: 30px;
            left: 16px;
            transform: translate(-50%, -50%);
            width: 45px;
            height: 45px;
        }

        .input-slider form #debt-amount-slider input:checked+label::before {
            background: $primary-p;
        }

        .input-slider form #debt-amount-slider input:checked+label::after {
            background: $white;
        }

        .input-slider form #debt-amount-slider label.label-img-2::before {
            content: '\f00c';
            font-weight: 100;
            font-size: 2rem
        }

        .input-slider form #debt-amount-slider label.label-img-1::before {
            top: 30px;
            left: 16px;
            transform: translate(-50%, -50%);
            content: '';
            // font-family: "FontAwesome";
            // color: $white;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            // font-size: 2rem;
            width: 38px;
            height: 38px;
            background: url('/profress-01.svg') $border-color;
            background-repeat: no-repeat;
            background-position: center;
            // background: #D8D8D8;
            border-radius: 50%;
        }

        .input-slider form #debt-amount-slider input:checked+label.label-img-1::before {
            background: url('/profress-01.svg') #FFC107;
            background-repeat: no-repeat;
            background-position: center;
        }

        .input-slider form #debt-amount-slider label.label-img-1::after {
            border: 2px solid $border-color;
        }

        .input-slider form #debt-amount-slider input:checked+label.label-img-1::after {
            background: $white;
            border: 2px solid #FFC107;
        }
    }

    .input-slider-custom.input-slider-custom-customer-order .input-slider form #debt-amount-slider input:checked+label.label-img-2::before {
        background: #198754;
    }

    .input-slider-custom.input-slider-custom-customer-order .input-slider {
        @include large-1199 {
            width: 100%;
            margin-left: 4rem;
        }

        @include medium-991 {
            width: 88%;
            margin: 0 auto;
        }

        @include m-575 {
            width: 90%;
            margin: 0 0 0 3rem;
        }
    }

    .input-slider-custom.input-slider-custom-customer-order form #debt-amount-slider label {
        @include large-1199 {
            width: 38%;
            min-width: 38%;
        }

        @include medium-991 {
            width: 20%;
            min-width: 20%;
        }
    }

    .input-slider-custom.input-slider-custom-customer-order .input-slider form #debt-amount-slider::before {
        left: 30px;
        background: $primary-p;
        height: 2px;

        @include medium-991() {
            left: 0;
        }
    }

    .sign-status.sign-status-deatil {
        @include large-1199 {
            margin-top: 30px;
        }
    }

</style>
