import { createStore } from 'vuex';

import cardsModule from './cards/index'

const store = createStore({
    modules: {
        cards: cardsModule
    },
    state() {
        return {
            userId: 'auth1'
        };
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
});

export default store
