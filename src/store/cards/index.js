import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            users: {
                id: 'c1',
                sets: [],
                cards: [],
                selectedSet: [],
                examCards: []
            },
        }
    },
    mutations,
    actions,
    getters
};