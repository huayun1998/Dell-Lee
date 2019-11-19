export default {
    incerment(state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (error) {}
    }
}