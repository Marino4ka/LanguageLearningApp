import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            newUser: {
                id: '',
                login: '',
                email: '',
                password: '',
            },
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