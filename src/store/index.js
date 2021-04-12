import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            latitude: 0,
            longitude: 0,
            count: 0,
        }
    },
    mutations: {
        updateLocation(state, position) {
            state.latitude = position.coords.latitude.toFixed(6)
            state.longitude = position.coords.longitude.toFixed(6)
        },
    },
    actions: {},
    modules: {},
})
