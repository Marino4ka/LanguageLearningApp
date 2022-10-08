import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            sets: [
                { id: 't1', name: 'Vegetables', members: ['u1', 'u2'] },
                { id: 't2', name: 'Colors', members: ['u1', 'u2', 'u3'] },
                { id: 't3', name: 'Animals', members: ['u4', 'u5'] },
            ],
            cards: [
                { id: 'u1', ru: 'кот', eng: 'cat', status: 'learn' },
                { id: 'u2', ru: 'пёс', eng: 'dog', status: 'repeat'},
                { id: 'u3', ru: 'яблоко', eng: 'apple', status: 'done'},
                { id: 'u4', ru: 'апельсин', eng: 'orange', status: 'learn'},
                { id: 'u5', ru: 'жёлтый', eng: 'yellow', status: 'done'},
            ]
        }
    },
    mutations,
    actions,
    getters
};