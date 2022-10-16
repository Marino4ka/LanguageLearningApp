import { createStore } from 'vuex';

import cardsModule from './cards/index'
import authModule from './auth/index'

const store = createStore({
    modules: {
        cards: cardsModule,
        auth: authModule
    }
});

export default store
