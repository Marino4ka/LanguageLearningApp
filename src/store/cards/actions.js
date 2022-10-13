export default {
    async addCard(context, payload) {
        const userId = context.rootGetters.userId
        const CardData = {
            ru: payload.ru,
            eng: payload.eng,
            status: payload.status,
            sets: payload.sets
        }

        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/cards.json`, {
            method: 'POST',
            body: JSON.stringify(CardData)
        });

        const responseData = await response.json()
        const id = responseData.name

        // if (!response.ok) {
        //    console.log(responseData.name)
        // }

        await context.dispatch('addToSet', { cardData: payload, id: id, userId: userId })

        context.commit('addCard', {
            ...CardData,
            id: id
        })
    },
    async addSet(context, payload) {
        const userId = context.rootGetters.userId
        const setData = {
            name: payload.name
        }

        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/sets.json`, {
            method: 'POST',
            body: JSON.stringify(setData)
        });

        const responseData = await response.json()
        const id = responseData.name

        // if (!response.ok) {
        //    console.log(responseData.name)
        // }

        context.commit('addSet', {
            ...setData,
            id: id
        })
    },
    async addToSet(context, payload) {
        const cardId = payload.id
        const setsId = payload.cardData.sets
        const userId = payload.userId
        console.log('addToSet' + cardId)
        console.log('addToSet' + setsId)
        const sets = context.getters.sets
        const setData = []
        setData.push(sets)
        console.log(setData)
        setsId.forEach((elem, index) => {
            for(index=0; index<sets.length; ++index){
                if(elem === sets[index].id) {
                    sets[index].members.push(cardId)
                }
                else return
            }
        })
        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/sets.json`, {
            method: 'POST',
            body: JSON.stringify(setData)
        });

        const responseData = await response.json()
        console.log(responseData)

        context.commit('addToSet', setData);
    },
    addUser(context, data) {
        const userData = {
            id: context.rootGetters.userId,
            login: data.login,
            email: data.email,
            password: data.password
        }
        context.commit('addUser', userData)
    },
    async loadSets(context) {
        const userId = context.rootGetters.userId
        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/sets.json`)
        const responseData = await response.json();

        // if(!response.ok) {
        //
        // }

        const sets = [];
        console.log(sets)

        for (const key in responseData) {
            const set = {
                name: responseData[key].name,
                id: key
            }
            sets.push(set)
        }

        context.commit('setSets', sets)

    },
    async loadCards(context) {
        const userId = context.rootGetters.userId
        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/cards.json`)
        const responseData = await response.json();

        // if(!response.ok) {
        //
        // }

        const cards = [];

        for (const key in responseData) {
            const card = {
                ru: responseData[key].ru,
                eng: responseData[key].eng,
                status: responseData[key].status,
                sets: responseData[key].sets,
                id: key
            }
            cards.push(card)
        }

        context.commit('setCards', cards)

    }
}