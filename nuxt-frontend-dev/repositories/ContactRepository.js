const resource = '/contact'
export default ($axios) => ({

    getInTouch(payload = {}) {
        return $axios.post(`${resource}/send-contact-mail`, payload)
    }
})
