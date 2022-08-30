<template>
    <div class="accessories-main">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <nav id="#navbar" class="navbar p-0 justify-content-center margin-mobile-resposive" v-if="products.length">
                        <ul class="navbar-nav accessories-btns nav nav-pills">
                            <li class="nav-item" v-for="(cat,index) in categories" :key="cat.id">
                                <a data-toggle="pill" :href="'#cat'+cat.id" :class="{'active' : index == 0}" class="nav-link access-btn-1">{{ cat.name }}</a>
                            </li>
                        </ul>
                    </nav>
                    <div id="" class="tab-content helmet-section">
                        <div :id="'cat'+cat.id" class="tab-pane fade in" :class="{'active show' : index == 0}" v-for="(cat,index) in categories" :key="cat.id">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1 class="helmets-main">{{ cat.name }}</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="container-fluid">
                                <div class="row flex-center">
                                    <div class="col-md-12">
                                        <div class=" warrenty-height-3 d-flex align-items-start justify-content-center ">
                                            <div class="card-main-helmet card-main-helmet-check-out">
                                                <div class="card-helmet" v-for="product in catProducts(cat.id)" :key="product.id">
                                                    <div class="helmet-top">
                                                        <div class="helmet-img">
                                                            <img class="img-fluid d-none" :src="featuredVariationImage(product)" alt="img" :ref="'variationImage'+product.id" @load="imageLoaded(product.id)" />
                                                            <div class="spinner-border text-muted m-auto" :ref="'variationLoader'+product.id"></div>
                                                        </div>
                                                        <div class="radio-color-box">
                                                            <div class="outer-line mx-2" :class="{'selected-variation': v.featured == true}" v-for="(v, index) in product.variations" :key="v.id" @click="selectVariation(index, product);">
                                                                <div class="inner-background" :style="{ backgroundColor: v.code }"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="helmet-card-body">
                                                        <div class="access-flex">
                                                            <div class="tile-left">
                                                                <h3 class="access-title">{{ product.title }}</h3>
                                                                <p class="access-pr">
                                                                    {{ product.price | currencyFormat }}
                                                                </p>
                                                            </div>
                                                            <div class="buynow-cart">
                                                                <a class="buy-now-btn-cart" href="javascript:void(0)" @click="selectAccessory(product)" v-if="!checkAccessoryCart(product)">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                                                                        <circle cx="9" cy="21" r="1"></circle>
                                                                        <circle cx="20" cy="21" r="1"></circle>
                                                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                                                    </svg>
                                                                </a>
                                                                <a class="buy-now-btn-cart" href="javascript:void(0)" @click="removeAccessory(product)" v-if="checkAccessoryCart(product)">
                                                                    <i class="fa fa-trash"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class=" d-flex align-items-center justify-content-center mt-3 ">
                                        <button @click="nextStep()" class="save-btn-continue" type="button">
                                            Save &amp; Continue
                                        </button>
                                    </div>
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
        layout: "checkout",
        data() {
            return {
                products: [],
                categories: []
            }
        },
        computed: {
            ...mapGetters({
                accessories: "cart/getAccessories",
            }),
        },
        mounted() {
            this.$repositories.product.getAccessoriesCategories().then(cats => {
                this.categories = cats.data;
                this.$repositories.product.getAccessoriesList().then(res => {
                    this.products = res.data;
                }).catch(err => {
                    console.log('Accessories Error =>', err);
                });
            }).catch(err => {
                console.log('Accessories Error =>', err);
            });
        },
        methods: {
            featuredVariationImage(product) {
                return product.variations.find((x) => x.featured == true).image;
            },
            imageLoaded(id) {
                console.log(this.$refs['variationLoader' + id][0].classList);
                this.$refs['variationLoader' + id][0].classList.add('d-none');
                this.$refs['variationImage' + id][0].classList.remove('d-none');
            },
            catProducts(catId) {
                return this.products.filter(element => {
                    if (element.categories.length) {
                        return element.categories[0].id == catId
                    } else return false
                });
            },
            selectAccessory(accessory) {
                let accList = [...this.accessories];
                let variation = accessory.variations.find((x) => x.featured == true);
                let acc = {
                    ...accessory,
                };
                acc.variations = [variation];
                accList.push(acc);
                this.$store.dispatch("cart/addToCart", {
                    product: accList,
                    key: "accessories",
                    price: accessory.price,
                }).then(() => {
                    console.log(this.accessories);
                });
            },
            checkAccessoryCart(a) {
                if (this.accessories.find((x) => x.id == a.id) != undefined) {
                    return true;
                } else return false;
            },
            selectVariation(index, product) {
                if (product.variations[index].featured == true) {
                    return;
                }
                this.$refs['variationLoader' + product.id][0].classList.remove('d-none');
                this.$refs['variationImage' + product.id][0].classList.add('d-none');
                product.variations.forEach((element) => {
                    element.featured = false;
                });
                product.variations[index].featured = true;
            },
            removeAccessory(accessory) {
                let accList = [...this.accessories];
                let index = accList.findIndex((item) => item.id === accessory.id);
                accList.splice(index, 1);
                this.$store.dispatch("cart/addToCart", {
                    product: accList,
                    key: "accessories",
                    price: -accessory.price,
                }).then(() => {
                    console.log(this.accessories);
                });
            },
            nextStep() {
                this.$store.dispatch("cart/updateStep", {
                    step: 9,
                }).then(() => {
                    this.$router.replace("/checkout/insurance");
                });
            }
        },
    };

</script>
