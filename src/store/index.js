import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '北京'
    },
    mutations: {
        incerment(state, city) {
            state.city = city
        }
    }
})