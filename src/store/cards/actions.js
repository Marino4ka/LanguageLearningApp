export default {
    addCard(context, payload) {
        // id: context.rootGetters.userId,
        const cardData = {
            userId: context.rootGetters.userId,
            id: new Date().toISOString(),
            ru: payload.ru,
            eng: payload.eng,
            status: payload.status,
            sets: payload.sets
        };
        context.commit('addCard', cardData);
    },
    addUser(context, data) {
        const userData = {
            id: context.rootGetters.userId,
            login: data.login,
            email: data.email,
            password: data.password
        }
        context.commit('addUser', userData)
    }
}