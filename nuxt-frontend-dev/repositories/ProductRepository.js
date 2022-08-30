const resource = '/products'
export default ($axios) => ({

    featured(payload = {}) {
        return $axios.get(`${resource}/featured`, payload)
    },

    listing(payload = {}) {
        return $axios.post(`${resource}/listing`, payload)
    },

    details(payload = {}) {
        return $axios.post(`${resource}/details`, payload)
    },

    getFiltersData(payload = {}) {
        return $axios.get(`${resource}/filters-data`, payload)
    },

    getAccessoriesList() {
        return $axios.get(`${resource}/accessories`)
    },

    getAccessoriesCategories() {
        return $axios.get(`${resource}/accessories-categories`)
    }

})
