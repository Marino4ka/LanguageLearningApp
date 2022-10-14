export default {
    addCard(state, payload) {
        state.users.cards.push(payload)
    },
    addSet(state, payload) {
        state.users.sets.push(payload)
    },
    addToSet(state, payload) {
        state.sets = payload
    },
    addUser(state, payload) {
        state.newUser = payload
        console.log(state.newUser)
    },
    setSets(state, payload) {
        state.users.sets = payload
    },
    setCards(state, payload) {
        state.users.cards = payload
    },
    setSelectedSet(state, payload) {
        state.users.selectedSet = payload
    },
}