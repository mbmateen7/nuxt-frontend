const resource = '/cart'
export default ($axios) => ({

    getCart() {
        return $axios.get(`${resource}`);
    },

    clear() {
        return $axios.get(`${resource}/clear-cart`);
    },

    update(payload = {}) {
        return $axios.post(`${resource}/update`, payload);
    },

    getDeliveryTypes() {
        return $axios.get(`${resource}/deliveries`);
    },
    getWarranties() {
        return $axios.get(`${resource}/warranties`);
    },

    getMemberships() {
        return $axios.get(`${resource}/memberships`);
    },

    getInsurances() {
        return $axios.get(`${resource}/insurances`);
    },

    uploadLicense(payload = {}) {
        return $axios.post(`${resource}/upload-license`, payload);
    },

    placeOrder(payload = {}) {
        return $axios.post(`${resource}/place-order`, payload);
    },
})
