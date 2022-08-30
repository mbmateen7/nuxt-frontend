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
                                <NuxtLink to="/accessories">accessories</NuxtLink>
                            </li>

                            <li class="breadcrumb-item active text-capitalize">{{ product.title }}</li>
                        </ol>
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
                            <div class="product-info product-info-mobile">
                                <h2 class="pro-info-heading ">
                                    Price: {{ product.price | currencyFormat }}
                                </h2>
                            </div>
                        </div>
                        <div class="btn-new-design">
                            <a href="#section-helmet" class="get-started ">Learn More</a>
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
                            <div class="row my-2" v-if="currentVariation.sizes.length">
                                <div class="col-md-12">
                                    <p class="sizes">
                                        <strong>Sizes</strong>
                                        <span class="variation-size" v-for="size in currentVariation.sizes" :key="size.id">{{ size.name }}</span>
                                    </p>
                                </div>
                            </div>
                            <!-- <p class="bike-online-text text-center">Please select a bike and add accessories while checking out. Review best bikes <NuxtLink to="/buy-new">here</NuxtLink></p> -->
                            <p class="bike-online-text text-center">Please contact us or visit our showrooms located at <br> <a href="https://www.google.com/maps/place/Scooter+Mart/@32.2860849,-64.7763646,16.53z/data=!4m5!3m4!1s0x8a2d14689b62f3cf:0xdfa668714d4ac263!8m2!3d32.2857373!4d-64.7734767" target="_blank">2 Lover's Lane, Paget</a> or <a href="https://www.google.com/maps/place/Scooter+Mart+-+Hamilton/@32.2938994,-64.7888243,17z/data=!3m1!4b1!4m5!3m4!1s0x8a2d150deb7cf7bd:0x5b40a088d1302c48!8m2!3d32.2938949!4d-64.7866356" target="_blank">10 Church Street, City of Hamilton</a> to confirm availability</p>

                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section class="detail-info-main mt-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="section-helmet" v-if="product.description" class="detail-section-main">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1 class="helmets-main">Description</h1>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="description-text">{{ product.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="section-helmet" class="detail-section-main">
                            <div class="container">
                                <div class="row" v-if="product.attributes.length">
                                    <div class="col-md-12">
                                        <h1 class="helmets-main" v-if="!product.description">Technical Specifications</h1>
                                        <h1 class="helmets-main" v-if="product.description">Specifications</h1>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <div class="col-md-6 col-lg-4" v-for="(attr,index) in product.attributes" :key="index">
                                        <a class="vehicle-card" href="javascript:void(0)">
                                            <div class="card-flex-vehicle">
                                                <div class="flex-vehicle-left">
                                                    <h4 class="vehilce-heading" v-if="attr.name !='Other'">{{ attr.pivot.value }}</h4>
                                                    <p class="para-vheicle">{{ attr.pivot.value }}</p>
                                                </div>
                                                <div class="engine-right" v-if="attr.name !='Other'">
                                                    <img :src="attr.image" alt="IMAGE">
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
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
                    this.$store.dispatch('cart/updateStep', 1).then(() => {
                        this.$store.dispatch('cart/selectProduct', {
                            product: {
                                object: this.product,
                                price: this.product.price,
                                quantity: 1,
                            },
                            key: 'product'
                        }).then(() => {
                            this.$router.push('/checkout/color')
                        });
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
    .description-text {
        font-size: 2rem;
        color: #5E5E5E;
        font-weight: 400;
        margin: 0;
    }

    .sizes {
        font-size: 1.7rem;
        margin: 0px;
    }

    .variation-size {
        margin: 0px 5px;
        background: #0B4AA6;
        color: white;
        padding: 3px 5px;
        border-radius: 5px;
    }

</style>
