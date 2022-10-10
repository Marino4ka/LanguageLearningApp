export default {
    addCard(context, payload) {
        // id: context.rootGetters.userId,
        const cardData = {
            userId: context.rootGetters.userId,
            id: payload.id,
            ru: payload.ru,
            eng: payload.eng,
            status: payload.status,
            sets: payload.sets
        };
        context.commit('addCard', cardData);
    },
    addToSet(context, payload) {
        const cardId = payload.id
        console.log(cardId)
        const setsId = payload.sets
        console.log(setsId)
        const sets = context.getters.sets
        console.log(sets)
        for(const elem in setsId) {
            const setId = setsId[elem]
            console.log(setId)
            if(setsId[elem] === sets[elem].id) {
                sets[elem].members.push(cardId)
                console.log(cardId + ' pushed to ' + setsId[elem])
            }
        }
        console.log(sets)
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