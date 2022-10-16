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
    setSets(state, payload) {
        state.users.sets = payload
    },
    setCards(state, payload) {
        state.users.cards = payload
    },
    setSelectedSet(state, payload) {
        state.users.selectedSet = payload
    },
    shuffleCards(state, payload) {
        state.users.examCards = payload
    }
}