import Vue from "vue";

export default {
    state: {
        loaderCount: 0
    },
    getters: {
        getLoaderCount: (state) => {
            return state.loaderCount
        },
    },
    actions: {
        addLoaderCount({
            commit
        }) {
            commit('addLoaderCount')
        },
        removeLoaderCount({
            commit,
            getters
        }) {
            commit('removeLoaderCount');
            return getters.getLoaderCount
        },
        finish({
            commit
        }) {
            commit('finishLoader');
        }
    },
    mutations: {
        addLoaderCount: (state) => {
            state.loaderCount += 1;
        },
        removeLoaderCount: (state) => {
            state.loaderCount -= 1;
        },
        finishLoader: (state) => {
            state.loaderCount = 0;
        }
    }
}
