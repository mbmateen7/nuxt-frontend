<template>
    <div>
        <div class="accessories-main-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-heading-box-sec">
                            <h1 class="main-heading-sec">
                                In Stock Bikes
                            </h1>
                            <p class="afford-text-sec">Premium brands at Bermuda’s best prices!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="filter-main">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mobile-filter">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            Filter
                                        </a>
                                    </div>
                                    <div id="collapseOne" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            <div class="filter-accordian">
                                                <!-- <div class="filter-dropdown-ctm">
                                                    <div class="dropdown">
                                                        <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                                            Price Range
                                                        </a>
                                                        <div class="dropdown-menu">
                                                            <div class="range-main">
                                                                <div class="range-slide">
                                                                    <div class="slide">
                                                                        <div class="line" id="line2" style="left: 0%; right: 0%;"></div>
                                                                        <span class="thumb" id="thumbMin2" style="left: 0%;"></span>
                                                                        <span class="thumb" id="thumbMax2" style="left: 100%;"></span>
                                                                    </div>
                                                                    <input id="rangeMin2" type="range" max="100" min="10" step="5" value="0">
                                                                    <input id="rangeMax2" type="range" max="100" min="10" step="5" value="100">
                                                                </div>
                                                                <div class="display">
                                                                    <div class="left-bulliet-box">
                                                                        <p class="dollor">$</p>
                                                                        <div class="value-change" id="min2">10</div>
                                                                    </div>

                                                                    <div class="left-bulliet-box">
                                                                        <p class="dollor">$</p>
                                                                        <div class="value-change" id="max2">100</div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <div class="filter-dropdown-ctm">
                                                    <div class="dropdown">
                                                        <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                                            {{ license }}
                                                        </a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0)" @click="filter('license',null);license='License Required'" v-if="!filter.license">All</a>
                                                            <a class="dropdown-item" @click="filter('license','Auxiliary Cycle');license='Auxiliary Cycle - Age 16+'" href=" javascript:void(0)">Auxiliary Cycle - Age 16+</a>
                                                            <a class="dropdown-item" @click="filter('license','Motorcycle');license='Motorcycle - Age 18+'" href=" javascript:void(0)">Motorcycle - Age 18+</a>
                                                            <a class="dropdown-item" @click="filter('license','N/a');license='No License Required'" href=" javascript:void(0)">No License Required</a>
                                                            <a class="dropdown-item" v-for="b in licenses" :key="b.id" @click="filter('license',b);license=b" href=" javascript:void(0)">{{ b }}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="filter-dropdown-ctm">
                                                    <div class="dropdown">
                                                        <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                                            {{ category }}
                                                        </a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0)" @click="filter('category_id',null);category='Bike Type'" v-if="!filter.category_id">All</a>
                                                            <a v-for="cat in categories" :key="cat.id" class="dropdown-item" @click="filter('category_id',cat.id);category=cat.name" href=" javascript:void(0)">{{ cat.name }}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="filter-dropdown-ctm">
                                                    <div class="dropdown">
                                                        <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                                            {{ brandName }}
                                                        </a>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0)" @click="filter('brand_id',null);brandName='Brand'" v-if="!filter.brand_id">All</a>
                                                            <a v-for="b in brands" :key="b.id" class="dropdown-item" href="javascript:void(0)" @click="filter('brand_id',b);brandName=b">{{ b }}</a>
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
                    <!-- <div class="col-md-4">
                        <div class="filter-dropdown-ctm">
                            <div class="dropdown">
                                <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                    Price Range
                                </a>
                                <div class="dropdown-menu">
                                    <div class="range-main">
                                        <div class="range-slide">
                                            <div class="slide">
                                                <div class="line" id="line" style="left: 0%; right: 0%;"></div>
                                                <span class="thumb" id="thumbMin" style="left: 0%;"></span>
                                                <span class="thumb" id="thumbMax" style="left: 100%;"></span>
                                            </div>
                                            <input id="rangeMin" type="range" max="10000" min="0" step="500" v-model="filters.range.min">
                                            <input id="rangeMax" type="range" max="10000" min="0" step="500" v-model="filters.range.max">
                                        </div>
                                        <div class="display">
                                            <div class="left-bulliet-box">
                                                <p class="dollor">$</p>
                                                <div class="value-change" id="min">{{ filters.range.min }}</div>
                                            </div>

                                            <div class="left-bulliet-box">
                                                <p class="dollor">$</p>
                                                <div class="value-change" id="max">{{ filters.range.max }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="col-md-4">
                        <div class="filter-dropdown-ctm">
                            <div class="dropdown">
                                <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                    {{ license }}
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)" @click="filter('license',null);license='License Required'" v-if="!filter.license">All</a>
                                    <a class="dropdown-item" @click="filter('license','Motorcycle');license='Motorcycle - Age 18+'" href=" javascript:void(0)">Motorcycle - Age 18+</a>
                                    <a class="dropdown-item" @click="filter('license','Auxiliary Cycle');license='Auxiliary Cycle - Age 16+'" href=" javascript:void(0)">Auxiliary Cycle - Age 16+</a>
                                    <a class="dropdown-item" @click="filter('license','N/a');license='No License Required'" href=" javascript:void(0)">No License Required</a>
                                    <a class="dropdown-item" v-for="b in licenses" :key="b.id" @click="filter('license',b);license=b" href=" javascript:void(0)">{{ b }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="filter-dropdown-ctm">
                            <div class="dropdown">
                                <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                    {{ category }}
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)" @click="filter('category_id',null);category='Bike Type'" v-if="!filter.category_id">All</a>
                                    <a v-for="cat in categories" :key="cat.id" class="dropdown-item" @click="filter('category_id',cat.id);category=cat.name" href=" javascript:void(0)">{{ cat.name }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="filter-dropdown-ctm">
                            <div class="dropdown">
                                <a class="filter-drop dropdown-toggle" data-toggle="dropdown">
                                    {{ brandName }}
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)" @click="filter('brand_id',null);brandName='Brand'" v-if="!filter.brand_id">All</a>
                                    <a v-for="b in brands" :key="b.id" class="dropdown-item" href="javascript:void(0)" @click="filter('brand_id',b);brandName=b">{{ b }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="stock-main-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-12">
                        <div class="flex-product-paage">
                            <NuxtLink :to="`/product/bike/${p.id}`" class="card-accessories-main card-product bullets-size" v-for="p in products" :key="p.id">
                                <div class="helmet-top">
                                    <div class="helmet-img">
                                        <img class="img-fluid" :src="featuredVariationImage(p)" alt="img">
                                    </div>
                                    <div class="radio-color-box">
                                        <div class="outer-line mx-2" v-for="v in p.variations" :key="v.id">
                                            <div class="inner-background" :style="{ backgroundColor : v.code }"></div>
                                        </div>
                                    </div>

                                </div>

                                <div class="helmet-card-body">
                                    <div class="card-body-accessories-heading">
                                        <div class=" shine-upper">
                                            <h2 class="headingsecond">{{ p.title }}</h2>
                                            <div class="img-shine">
                                            </div>
                                        </div>

                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="align-left">
                                            <h4 class="heading-product-secondary">Price: <span>{{ p.price | currencyFormat }}</span> </h4>
                                        </div>
                                    </div>

                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <GetInTouch /> -->
        </section>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getFilters();
            this.getProducts();
        },
        data() {
            return {
                products: [],
                categories: [],
                brands: [],
                licenses: [],
                filters: {
                    range: {
                        min: 0,
                        max: 10000,
                    },
                    brand_id: null,
                    category_id: null,
                    license: null
                },
                category: 'Bike Type',
                brandName: 'Brand',
                license: 'License Required'
            }
        },
        methods: {
            filter(type, id) {
                this.filters[type] = id;
                this.getProducts();
            },
            getProducts() {
                this.$repositories.product.listing(this.filters).then(res => {
                    console.log('data', new Date().getUTCMilliseconds());
                    this.products = res.data
                }).catch(error => {
                    console.log('Products Error =>', error);
                })
            },
            getFilters() {
                this.$repositories.product.getFiltersData().then(res => {
                    this.categories = res.data.categories
                    this.brands = res.data.brands
                    this.licenses = res.data.licenses
                }).catch(error => {
                    console.log('Products Error =>', error);
                })
            },
            featuredVariationImage(product) {
                return product.variations.find(x => x.featured == true).image
            }
        }
    }

</script>

<style>

</style>
