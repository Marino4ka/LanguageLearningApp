import { createStore } from 'vuex';

import cardsModule from './cards/index'

const store = createStore({
    modules: {
        cards: cardsModule
    }
});

export default store
