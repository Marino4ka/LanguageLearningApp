export default {
    sets(state) {
       return state.sets
    },
    cards(state) {
        return state.cards
    },
    hasCards (state) {
        return state.cards && state.cards.length > 0
    }
}