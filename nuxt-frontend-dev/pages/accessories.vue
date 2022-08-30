<template>
    <div class="main-body">
        <div class="accessories-main-page">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-heading-box-sec mb-5">
                            <h1 class="main-heading-sec">
                                Accessories
                            </h1>
                            <p class="afford-text-sec">Premium brands at Bermuda’s best prices!</p>
                        </div>
                        <nav id="#navbar" class="navbar   p-0 justify-content-center margin-mobile-resposive" v-if="products.length">
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
                                        <div class="col-md-12 px-0">
                                            <div class="unscroll">
                                                <div class="card-main-helmet">
                                                    <NuxtLink :to="`/product/accessories/${a.id}`" class="card-helmet bullets-size" v-for="a in catProducts(cat.id)" :key="a.id">
                                                        <div class="helmet-top">
                                                            <div class="helmet-img img-suit">
                                                                <img class="img-fluid" :src="featuredVariationImage(a)" alt="img">
                                                            </div>
                                                            <div class="radio-color-box">
                                                                <div class="outer-line mx-2" v-for="v in a.variations" :key="v.id">
                                                                    <div class="inner-background" :style="{ backgroundColor : v.code }"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="helmet-card-body">
                                                            <div class="access-flex d-block">
                                                                <div class="tile-left">
                                                                    <h3 class="access-title">{{ a.title }}</h3>
                                                                    <p class="access-pr">{{ a.price | currencyFormat }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NuxtLink>
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
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            bodyAttrs: {
                "data-spy": "scroll",
                "data-target": ".navbar",
                "data-offset": "0",
                "class": "bg-color"
            }
        },
        data() {
            return {
                products: [],
                categories: []
            }
        },
        mounted() {
            this.$repositories.product.getAccessoriesCategories().then(cats => {
                this.categories = cats.data.data;
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
                return product.variations.find(x => x.featured == true).image;
            },
            catProducts(catId) {
                return this.products.filter(element => {
                    if (element.categories.length) {
                        return element.categories[0].id == catId
                    } else return false
                });
            }
        }

    }

</script>

<style>
    .card-helmet .helmet-img.img-suit {
        align-items: unset;
    }

</style>
