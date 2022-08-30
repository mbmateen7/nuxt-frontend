<template>
    <div class=" main-header-us">
        <header class="header-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-main-all-nav d-flex align-items-center">
                            <div class="mobile-navabr-custom">
                                <div class="bars-ctm" @click="openNav()">
                                    <!-- <span  onclick="openNav()">&#9776;</span> -->
                                    <span><i class="fa fa-bars"></i></span>
                                </div>

                                <div id="mySidenav" class="sidenav">
                                    <div class="logo-2 text-center mx-auto" @click="closeNav()">
                                        <NuxtLink class="ancher-h" to="/"><img src="/logo-2.png" class="img-fluid"></NuxtLink>
                                    </div>
                                    <div @click="closeNav()">
                                        <a class="closebtn">&times;</a>
                                    </div>

                                    <ul class="navbar-nav ml-auto for-rtl-padding-ul">
                                        <li class="nav-item">
                                            <div class="custom-design-drop">
                                                <a id="dropDown" class="nav-link " href="javascript:void(0)">Buy</a>
                                                <div class="custom-drop-menu-items">
                                                    <ul class="items-list-menu">
                                                        <li class="items-menu" @click="closeNav()">
                                                            <NuxtLink class="nav-link-menu" to="/buy-new">Buy a new bike</NuxtLink>
                                                        </li>
                                                        <li class="items-menu" @click="closeNav()">
                                                            <NuxtLink class="nav-link-menu" to="/buy-used">Buy a used bike</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </li>
                                        <li class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link active" to="/sell">Sell</NuxtLink>
                                        </li>
                                        <li class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link" to="/accessories">Accessories</NuxtLink>
                                        </li>
                                        <li class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link" to="/services">Services</NuxtLink>
                                        </li>
                                        <!-- <li class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link" to="/blog">Blog </NuxtLink>
                                        </li> -->
                                        <li class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link" to="/contact-us">Contact Us </NuxtLink>
                                        </li>
                                        <li v-if="$auth.loggedIn" class="menu-seperator"></li>
                                        <li v-if="$auth.loggedIn" class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link" to="/profile">Profile</NuxtLink>
                                        </li>
                                        <!-- <li v-if="$auth.loggedIn" class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link" to="/orders">Orders </NuxtLink>
                                        </li>
                                        <li v-if="$auth.loggedIn" class="nav-item" @click="closeNav()">
                                            <NuxtLink class="nav-link" to="/carts">Abandoned Carts </NuxtLink>
                                        </li> -->

                                    </ul>
                                    <!-- <div class="logs-btns">
                                        <a href="javascript:void(0)" class="logs-mobile-btn">Login</a>
                                        <a href="javascript:void(0)" class="logs-mobile-btn2">Signup</a>
                                    </div> -->
                                </div>
                            </div>
                            <div class="logo">
                                <NuxtLink to="/"><img src="/logo.png" class="img-fluid"></NuxtLink>
                            </div>
                            <div class="main-nav-and sub-nav ml-auto">
                                <nav class="navbar navbar-expand-lg ">
                                    <div class="nav-bar-adjustment">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                            <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
                                        </button>

                                        <!-- Navbar links -->
                                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                            <ul class="navbar-nav ml-auto for-rtl-padding-ul">
                                                <li class="nav-item active">
                                                    <div class="dropdown dropdown-custom">
                                                        <a class="cursor-pointer nav-link dropdown-toggle" data-toggle="dropdown" :class="{'nuxt-link-active':($route.name == 'buy-new' || $route.name == 'buy-used')}">
                                                            Buy
                                                        </a>
                                                        <div class="dropdown-menu">
                                                            <NuxtLink class="dropdown-item" to="/buy-new">Buy a new bike</NuxtLink>
                                                            <NuxtLink class="dropdown-item" to="/buy-used">Buy a used bike</NuxtLink>
                                                        </div>
                                                    </div>

                                                </li>
                                                <!-- <li class="nav-item">
                                                    <NuxtLink class="nav-link" to="/buy-new">Buy</NuxtLink>
                                                </li> -->
                                                <li class="nav-item">
                                                    <NuxtLink class="nav-link" to="/sell">Sell</NuxtLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NuxtLink class="nav-link" to="/accessories">Accessories</NuxtLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NuxtLink class="nav-link" to="/services">Services</NuxtLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NuxtLink class="nav-link" to="/contact-us">Contact Us </NuxtLink>
                                                </li>
                                            </ul>
                                            <div class="log-in" v-if="!$auth.loggedIn">
                                                <NuxtLink class="login-link" to="/login">Login</NuxtLink>
                                            </div>
                                            <div class="log-in" v-if="$auth.loggedIn">
                                                <div class="dropdown dropdown-custom dropdown-custom-login">
                                                    <a type="button" class="nav-link   dropdown-toggle" data-toggle="dropdown">
                                                        <div class="login-pic">
                                                            <img class="img-fluid" :src="profilePicture" alt="img">
                                                        </div>
                                                    </a>
                                                    <div class="dropdown-menu">
                                                        <NuxtLink to="/profile" class="dropdown-item">Profile</NuxtLink>
                                                        <a class="dropdown-item" @click="logout()">Logout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Toggler/collapsibe Button -->
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </header>
    </div>
</template>

<script>
    export default {
        computed: {
            profilePicture() {
                return this.$auth.user.image;
            }
        },
        methods: {
            logout: function () {
                this.$auth.logout().then(res => {}).catch(error => {
                    console.log(error);
                })
            },
            openNav() {
                document.getElementById("mySidenav").style.width = "100%";
            },
            closeNav() {
                console.log(this.$route.name);
                document.getElementById("mySidenav").style.width = "0px";
            }
        }
    }

</script>

<style>
    .dropdown-item {
        cursor: pointer;
    }

</style>
