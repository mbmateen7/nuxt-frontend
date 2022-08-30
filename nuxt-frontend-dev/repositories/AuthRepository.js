const resource = '/auth'
export default ($axios) => ({

    register(payload) {
        return $axios.post(`${resource}/register`, payload)
    },

    updateProfile(payload) {
        return $axios.post(`${resource}/update-profile`, payload)
    },

    orders() {
        return $axios.get(`orders`);
    },

    ordersDetails(payload = {}) {
        return $axios.post(`order-details`, payload)
    },
})
