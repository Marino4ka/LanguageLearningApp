export default {
    sets(state) {
       return state.users.sets
    },
    cards(state) {
        return state.users.cards
    },
    user(state) {
        return state.newUser
    },
    hasCards (state) {
        return state.users.cards && state.users.cards.length > 0
    },
    hasSets (state) {
        return state.users.sets && state.users.sets.length > 0
    },
    isUser(_, getters, _2, rootGetters) {
        const user = getters.user
        const userId = rootGetters.userId
        return user.id === userId
    }
}