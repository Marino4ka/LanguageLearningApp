export default {
    async addCard(context, payload) {
        const token = context.rootGetters.token
        const userId = context.rootGetters.userId
        const CardData = {
            ru: payload.ru,
            eng: payload.eng,
            status: payload.status,
            sets: payload.sets
        }

        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/cards.json?auth=` + token, {
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
        const token = context.rootGetters.token
        const userId = context.rootGetters.userId
        const setData = {
            name: payload.name
        }

        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/sets.json?auth=` + token, {
            method: 'POST',
            body: JSON.stringify(setData)
        });

        const responseData = await response.json()
        const id = responseData.name

        if(!response.ok) {
            const error = new Error(responseData.message || 'Не удалось загрузить!');
            throw error
        }

        context.commit('addSet', {
            ...setData,
            id: id
        })
    },
    async addToSet(context, payload) {
        const token = context.rootGetters.token
        const cardId = payload.id
        const setsId = payload.cardData.sets
        const userId = payload.userId
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
        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/sets.json?auth=` + token, {
            method: 'POST',
            body: JSON.stringify(setData)
        });

        const responseData = await response.json()
        console.log(responseData)

        context.commit('addToSet', setData);
    },
    async loadSets(context) {
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token
        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/sets.json?auth=` + token)
        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Не удалось загрузить!');
            throw error
        }

        const sets = [];

        for (const key in responseData) {
            const set = {
                name: responseData[key].name,
                id: key
            }
            sets.push(set)
        }
        console.log(sets)
        context.commit('setSets', sets)

    },
    async loadCards(context) {
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token
        const response = await fetch(`https://diplom-lang-app-vue-default-rtdb.firebaseio.com/users/${userId}/cards.json?auth=` + token)
        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Не удалось загрузить!');
            throw error
        }

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
        console.log(cards)
        context.commit('setCards', cards)

    },
    loadSelectedSet(context, payload) {
        const  cards = context.getters.cards
        console.log('actions/loadSelectedSet' + cards[0].id)
        const id = payload.id
        let cardsData = []
        cards.forEach((card, index) => {
            console.log(card.id + 'cardId')
            for(index=0; index<cards.length-1 ; ++index){
                console.log(card.sets + "(((((())))))")
                card.sets.find(element => element === id)
                cardsData.push(card)
                return cardsData
            }
        })
        console.log('id:' + id)
        console.log('cards:' + cards)

        context.commit('setSelectedSet', cardsData)
    },
    shuffleCards(context, payload) {
        const set = payload.set
        for (let i = set.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [set[i], set[j]] = [set[j], set[i]];
        }
        console.log("shuffled" + set[0])

        context.commit('shuffleCards', set)
    }
}