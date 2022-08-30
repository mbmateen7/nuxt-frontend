<template>
    <div>
        <Header />
        <Cart />
        <Nuxt />
        <CheckoutStep />
    </div>
</template>
<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        middleware: ['auth'],
        computed: {
            ...mapGetters({
                step: 'cart/getActiveStep'
            })
        },
        mounted() {
            this.getUserCart();
        },
        methods: {
            getUserCart() {
                this.$store.dispatch('cart/getUserCart').then(res => {})
            }
        }
    }

</script>

<style lang="scss">
    .save-btn-continue {
        &:hover {
            &:disabled {
                background-color: #AEAEAE;
            }

            &:enabled {
                background-color: #FBB343
            }
        }

        &:enabled {
            background-color: #0B4AA6
        }
    }

</style>
