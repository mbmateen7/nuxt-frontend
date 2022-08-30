<template>
    <div class="main-body" v-if="product">
        <div class="breadcrumb-ctm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ol class="breadcrumb ">

                            <li class="breadcrumb-item text-capitalize">
                                <NuxtLink to="/">home</NuxtLink>
                            </li>
                            <li class="breadcrumb-item text-capitalize">
                                <NuxtLink to="/buy-new">Buy</NuxtLink>
                            </li>

                            <li class="breadcrumb-item active text-capitalize">{{ product.title }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>


        <div class="product-detail-main-page">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-heading-box-sec">
                            <h1 class="main-heading-sec">
                                Ride Bermuda in Style
                            </h1>
                            <p class="afford-text-sec"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="pro-info-main">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="product-detail-flex">
                            <div class="product-info">
                                <h2 class="pro-info-heading">
                                    {{ product.title }}
                                </h2>
                                <p class="pro-info-text">{{ getPRoductTag() }}</p>
                            </div>
                            <!-- <a href="#section-helmet" class="get-started get-started-mobile">Learn More</a> -->
                            <div class="product-info product-info-mobile">
                                <h2 class="pro-info-heading">
                                    Price: {{ product.price | currencyFormat }}
                                </h2>
                            </div>
                        </div>
                        <div class="btn-new-design">
                            <a href="javascript:void(0)" class="get-started" @click="addtoCart()">Get Started</a>
                            <!-- <NuxtLink to="/contact-us" class="get-started">Get Started</NuxtLink> -->
                        </div>
                        <!-- <div class="row">
                            <div class="col-md-4 d-flex justify-content-start">
                                <div class="product-info">
                                    <h2 class="pro-info-heading">
                                        {{ product.title }}
                                    </h2>
                                    <p class="pro-info-text">{{ getPRoductTag() }}</p>
                                </div>

                            </div>
                            <div class="col-md-4 d-flex justify-content-center">
                                <a href="#section-helmet" class="get-started">Learn More</a>
                                <a href="javascript:void(0)" class="get-started" @click="addtoCart()">Get Started</a>
                            </div>
                            <div class="col-md-4  d-flex justify-content-end">

                                <div class="product-info">
                                    <h2 class="pro-info-heading">
                                        Price: {{ product.price | currencyFormat }}
                                    </h2>
                                </div>
                            </div>
                        </div> -->
                        <div class="detail-img-main">
                            <img class="img-fluid" alt="img" :src="currentVariation.image" @load="imageLoaded=true" ref="variationImage" :hidden="!imageLoaded">
                            <div class="spinner-border text-muted" :hidden="imageLoaded"></div>
                        </div>
                        <div class="bike-online-main">
                            <div class="row my-3">
                                <div class="col-md-12 d-flex justify-content-center">
                                    <div class="outer-line mx-2" v-for="v in product.variations" :key="v.id" :style="[v.id == currentVariation.id?{ borderColor : v.code }:{borderColor:'transparent'}]">
                                        <div class="color-name">{{ v.name }}</div>
                                        <div class="inner-background" @click="changeVariationImage(v)" :style="{ backgroundColor : v.code }"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="bike-online-text text-center">Please contact us or visit our showrooms located at <br> <a href="https://www.google.com/maps/place/Scooter+Mart/@32.2860849,-64.7763646,16.53z/data=!4m5!3m4!1s0x8a2d14689b62f3cf:0xdfa668714d4ac263!8m2!3d32.2857373!4d-64.7734767" target="_blank">2 Lover's Lane, Paget</a> or <a href="https://www.google.com/maps/place/Scooter+Mart+-+Hamilton/@32.2938994,-64.7888243,17z/data=!3m1!4b1!4m5!3m4!1s0x8a2d150deb7cf7bd:0x5b40a088d1302c48!8m2!3d32.2938949!4d-64.7866356" target="_blank">10 Church Street, City of Hamilton</a> to confirm availability</p>
                            <!-- <p class="bike-online-text text-center" v-if="currentVariation.stock > 0">Available now! Reserve your bike for $500 at one of the Scooter Mart showrooms located at <br> <a href="https://www.google.com/maps/place/Scooter+Mart/@32.2860849,-64.7763646,16.53z/data=!4m5!3m4!1s0x8a2d14689b62f3cf:0xdfa668714d4ac263!8m2!3d32.2857373!4d-64.7734767" target="_blank">2 Lover's Lane, Paget</a> or <a href="https://www.google.com/maps/place/Scooter+Mart+-+Hamilton/@32.2938994,-64.7888243,17z/data=!3m1!4b1!4m5!3m4!1s0x8a2d150deb7cf7bd:0x5b40a088d1302c48!8m2!3d32.2938949!4d-64.7866356" target="_blank">10 Church Street, City of Hamilton</a> </p>
                            <p class="bike-online-text" v-if="currentVariation.stock==0">The bike will be in stock by <strong>{{ currentVariation.back_in_stock_date | date('MM/DD/YYYY') }}</strong>. Pre Order your bike now by reserving it for $500.</p> -->
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section class="detail-info-main mt-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <nav id="#navbar" class="navbar p-0 justify-content-center">
                            <ul class="navbar-nav accessories-btns">
                                <li class="nav-item">
                                    <a class=" nav-link access-btn-1 active" href="#section-helmet">Technical Specifications</a>
                                </li>
                                <li class="nav-item">
                                    <a class=" nav-link access-btn-1" href="#section-box">Price Details</a>
                                </li>
                            </ul>
                        </nav>
                        <div id="section-helmet" class="detail-section-main">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1 class="helmets-main">Technical Specifications</h1>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-4" v-for="(attr,index) in product.attributes" :key="index">
                                        <a class="vehicle-card" href="javascript:void(0)">
                                            <div class="card-flex-vehicle">
                                                <div class="flex-vehicle-left">
                                                    <h4 class="vehilce-heading">{{ attr.name }}</h4>
                                                    <p class="para-vheicle">{{ attr.pivot.value }}</p>
                                                </div>
                                                <div class="engine-right">
                                                    <img :src="attr.image" alt="IMAGE">
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="section-box" class="detail-section-main-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1 class="helmets-main">Price Details</h1>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-11 col-md-12 mx-auto">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="pro-price-detail-main">
                                                    <div class="heading-price-detail">
                                                        <h3 class="detail-price-heading">Pay by Bank Transfer</h3>
                                                    </div>
                                                    <div class="card-body-product-price-detail">
                                                        <div class="price-mian-total">
                                                            <p class="text-price-total">{{ cashPrice(product.price) }}</p>
                                                        </div>
                                                        <ul class="price-detail-list">
                                                            <li class="items-price-list">Bike Price</li>
                                                            <li class="items-price-list">{{ product.price | currencyFormat  }}</li>
                                                        </ul>
                                                        <ul class="price-detail-list disable-color">
                                                            <li class="items-price-list ">Credit card fee </li>
                                                            <li class="items-price-list">{{ creditCardFees(product.price) | currencyFormat  }}</li>
                                                        </ul>
                                                        <ul class="price-detail-list">
                                                            <li class="items-price-list">TCD Registration fees (estimate)</li>
                                                            <li class="items-price-list">{{ 185 | currencyFormat }} </li>
                                                        </ul>
                                                        <ul class="price-detail-list">
                                                            <li class="items-price-list">Third Party Insurance (estimate)</li>
                                                            <li class="items-price-list">{{ 150 | currencyFormat }} </li>
                                                        </ul>
                                                        <div class="bottom-border-card">
                                                            <ul class="price-detail-list">
                                                                <li class="items-price-list">Total</li>
                                                                <li class="items-price-list">{{ cashPrice(product.price) }}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div class="pro-price-detail-main">
                                                    <div class="heading-price-detail">
                                                        <h3 class="detail-price-heading">Pay by Card</h3>
                                                    </div>
                                                    <div class="card-body-product-price-detail">
                                                        <div class="price-mian-total">
                                                            <p class="text-price-total">{{ cardPrice(product.price) }}</p>
                                                        </div>
                                                        <ul class="price-detail-list">
                                                            <li class="items-price-list">Bike Price</li>
                                                            <li class="items-price-list">{{ product.price | currencyFormat }}</li>
                                                        </ul>
                                                        <ul class="price-detail-list">
                                                            <li class="items-price-list ">Credit card fee (3.75%)</li>
                                                            <li class="items-price-list">{{ creditCardFees(product.price) | currencyFormat }}</li>
                                                        </ul>
                                                        <ul class="price-detail-list">
                                                            <li class="items-price-list">TCD Registration fees (estimate)</li>
                                                            <li class="items-price-list">{{ 185 | currencyFormat }}</li>
                                                        </ul>
                                                        <ul class="price-detail-list">
                                                            <li class="items-price-list">Third Party Insurance (estimate)</li>
                                                            <li class="items-price-list">{{ 150 | currencyFormat }}</li>
                                                        </ul>
                                                        <div class="bottom-border-card">
                                                            <ul class="price-detail-list">
                                                                <li class="items-price-list">Total</li>
                                                                <li class="items-price-list">{{ cardPrice(product.price) }}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn-new-design">
                            <!-- <a href="javascript:void(0)" class="get-started" @click="addtoCart()">Get Started</a> -->
                            <NuxtLink to="/contact-us" class="get-started">Contact Us</NuxtLink>
                        </div>
                        <!-- <GetInTouch /> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: null,
                currentVariation: {},
                imageLoaded: false
            }
        },
        mounted() {
            this.getProductDetails(this.$route.params.id);
        },
        computed: {
            licenseRequired: function () {
                return this.product.attributes.find(element =>
                    element.id == 16 && element.pivot.value != 'N/a'
                );
            },
        },
        methods: {
            changeVariationImage(variation) {
                if (this.currentVariation == variation) {
                    return false;
                }
                this.currentVariation = variation;
                this.imageLoaded = false;
            },
            getProductDetails(id) {
                this.$repositories.product.details({
                    id: id
                }).then(res => {
                    this.product = res.data;
                    this.currentVariation = this.product.variations[0];
                }).catch(err => {
                    console.log(err.response.data.message);
                });
            },
            getPRoductTag() {
                let tag = '';
                let attribute;
                if (attribute = this.findAttribute('Model')) {
                    tag += attribute + ' / '
                }
                if (attribute = this.findAttribute('Power')) {
                    tag += attribute + ' / '
                }
                if (attribute = this.findAttribute('Engine type')) {
                    tag += attribute + ' / '
                }
                if (attribute = this.findAttribute('Cooling system')) {
                    tag += attribute + ' / '
                }
                tag = tag.trim();
                if (tag[tag.length - 1] == '/') {
                    tag = tag.substr(0, tag.length - 1);
                }
                return tag;
            },
            findAttribute(attribute) {
                let attr = this.product.attributes.find(x => x.name == attribute && x.pivot.value != 'N/a');
                if (attr) {
                    return attr.pivot.value;
                } else return false;
            },
            addtoCart() {
                this.$store.dispatch('cart/clear').then(() => {
                    this.$store.dispatch('cart/updateStep', {
                        step: 1,
                        name: 'Color',
                        title: 'Select a color for your bike'
                    }).then(() => {
                        if (this.$auth.loggedIn) {
                            this.$store.dispatch('cart/addToCart', {
                                product: this.product,
                                key: 'product',
                                price: this.product.price
                            }).then(() => {
                                console.log('ID');
                                this.$router.push('/checkout/color')
                            });
                        } else {
                            this.$store.dispatch('cart/selectProduct', {
                                product: this.product,
                                key: 'product',
                                price: this.product.price
                            }).then(() => {
                                console.log('ID');
                                this.$router.push('/checkout/color')
                            });
                        }
                    });
                })
            },
            cashPrice(price) {
                return this.$options.filters.currencyFormat(parseInt(price) + 185 + 150);
            },
            cardPrice(price) {
                return this.$options.filters.currencyFormat(parseInt(price) + this.creditCardFees(price) + 185 + 150);
            },
            creditCardFees(price) {
                return (parseInt(price) / 100) * 3.75;
            }
        },
    }

</script>

<style>

</style>
