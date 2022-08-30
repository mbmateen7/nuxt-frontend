export default function ({
    $axios,
    store,
    app
}) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
        store.dispatch('loader/addLoaderCount').then(res => {
            store._vm.$nextTick(() => {
                store._vm.$nuxt.$loading.start();
                return config;
            })
        });
    })

    $axios.onError(async error => {
        store.dispatch('loader/removeLoaderCount').then(res => {
            if (res <= 0) {
                store._vm.$nextTick(() => {
                    store._vm.$nuxt.$loading.finish()
                });
            }
        });
        const code = parseInt(error.response && error.response.status)

        if (code === 401) {
            await app.$auth.logout()
            redirect('/login')
        }

        return Promise.reject(error.response.data);
    })

    $axios.onResponse((response) => {
        store.dispatch('loader/removeLoaderCount').then(res => {
            if (res <= 0) {
                store._vm.$nextTick(() => {
                    store._vm.$nuxt.$loading.finish()
                });
            }
        });
        return response.data;
    })
}
