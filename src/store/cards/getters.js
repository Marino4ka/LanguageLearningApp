export default {
    sets(state) {
       return state.sets
    },
    cards(state) {
        return state.user.cards
    },
    user(state) {
        return state.newUser
    },
    hasCards (state) {
        return state.user.cards && state.user.cards.length > 0
    },
    hasSets (state) {
        return state.user.sets && state.user.sets.length > 0
    },
    isUser(_, getters, _2, rootGetters) {
        const user = getters.user
        const userId = rootGetters.userId
        return user.id === userId
    }
}