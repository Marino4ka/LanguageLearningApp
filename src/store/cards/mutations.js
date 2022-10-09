export default {
    addCard(state, payload) {
        state.user.cards.push(payload)
    },
    addUser(state, payload) {
        state.newUser = payload
        console.log(state.newUser)
    }
}