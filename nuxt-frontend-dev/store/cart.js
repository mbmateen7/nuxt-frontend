import Vue from "vue";

export default {
    state: {
        cart: {},
        activeStep: 1,
        stepName: 'Choose a Color',
        stepTitle: 'Select a color for your bike',
        price: 0,
        selectedProduct: null
    },
    getters: {
        getCart: (state) => {
            return state.cart
        },
        getSelectedProduct: (state, getters) => {
            return state.selectedProduct || false
        },
        getProduct: (state, getters) => {
            return getters.getCart.product;
        },
        getVariation: (state, getters) => {
            return getters.getCart.variation;
        },
        getPersonalDetails: (state, getters) => {
            return getters.getCart.personal_details;
        },
        getDeliveryPickup: (state, getters) => {
            return getters.getCart.delivery;
        },
        getProtection: (state, getters) => {
            return getters.getCart.warranty;
        },
        getMembership: (state, getters) => {
            return getters.getCart.membership;
        },
        getRustProofing: (state, getters) => {
            return getters.getCart.rust_proofing;
        },
        getSecurity: (state, getters) => {
            return getters.getCart.security;
        },
        getAccessories: (state, getters) => {
            return getters.getCart.accessories || [];
        },
        getInsurance: (state, getters) => {
            return getters.getCart.insurance;
        },
        getLicenseFront: (state, getters) => {
            return getters.getCart.license_front;
        },
        getLicenseBack: (state, getters) => {
            return getters.getCart.license_back;
        },
        getCartValue: (state, getters) => {
            let value = 0;
            for (var e of Object.keys(state.cart)) {
                if (state.cart[e] && state.cart[e].price)
                    value += parseFloat(state.cart[e].price);
                if (Array.isArray(state.cart[e])) {
                    state.cart[e].forEach(element => {
                        value += parseFloat(element.price)
                    });
                }
            }
            return value;
        },
        getActiveStep: (state) => {
            return state.activeStep
        },
        getStepName: (state) => {
            return state.stepName
        },
        getStepTitle: (state) => {
            return state.stepTitle
        }
    },
    actions: {
        async getUserCart({
            commit
        }) {
            await this.$repositories.cart.getCart().then(res => {
                commit('setCart', res.data)
                commit('updateStep', res.data);
            }).catch(err => {
                console.log(err);
            });
        },

        async selectProduct({
            commit
        }, payload) {
            commit('selectProduct', payload);
        },

        async addToCart({
            commit
        }, payload) {
            await this.$repositories.cart.update({
                [payload.key]: payload.product,
                step: payload.step
            }).then(res => {
                commit('addProductToCart', payload);
                commit('setCart', res.data)
            }).catch(error => {
                console.log(error);
            })
        },

        async updateLicense({
            commit
        }, payload) {
            await this.$repositories.cart.uploadLicense(payload).then(res => {
                payload = {
                    front: res.data.license_front,
                    back: res.data.license_back
                }
                commit('licenseImages', res.data);
                commit('updateStep', res.data);
            }).catch(error => {
                console.log(error);
            })
        },

        async updateStep({
            commit
        }, payload) {
            await this.$repositories.cart.update({
                step: payload.step
            }).then(res => {
                commit('updateStep', res.data)
            }).catch(error => {
                console.log(error);
            })
        },

        async clear({
            commit
        }) {
            await this.$repositories.cart.clear().then(res => {
                commit('clearCart');
            }).catch(err => {
                console.log(err);
            })
        },

        resetCart({
            commit
        }) {
            commit('clearCart');
        }
    },
    mutations: {
        setCart: (state, cart) => {
            state.cart = cart
        },
        addProductToCart: (state, payload) => {
            Vue.set(state.cart, payload.key, payload.product)
        },
        licenseImages: (state, payload) => {
            Vue.set(state.cart, 'license_front', payload.license_front)
            Vue.set(state.cart, 'license_back', payload.license_back)
        },
        selectProduct: (state, payload) => {
            state.selectedProduct = payload.product
        },
        clearCart: (state) => {
            state.cart = {}
            state.stepName = "Choose a Color"
            state.stepTitle = 'Select a color for your bike'
            state.activeStep = 1
        },
        updateStep: (state, payload) => {
            state.activeStep = payload.step
            state.stepName = payload.name
            state.stepTitle = payload.title
        },
    }
}
