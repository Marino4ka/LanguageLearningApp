<template>
  <base-card>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">Выбирите правильный ответ!</h1>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <transition name="flip" mode="out-in">
            <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'" :selectedSet="selectedSet"></component>
          </transition>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
import Question from '@/components/exam/Question';
import Answer from '@/components/exam/Answer';
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";

export default {
  props:['id'],
  data() {
    return {
      mode: 'app-question',
    }
  },
  computed: {
    cards () {
      return this.$store.getters['cards/cards']
    },
    sets() {
      return this.$store.getters['cards/sets']
    },
    selectedSet() {
      const cards = []
      const set = this.$store.getters['cards/selectedSet']
      for(let index=0; index<set.length; ++index) {
        cards.push(set[index].id)
      }
      return { set, cards }
    }
  },
  methods: {
    loadCards() {
      this.$store.dispatch('cards/loadCards')
    },
    loadSets() {
      this.$store.dispatch('cards/loadSets')
      this.loadSelectedSet()
    },
    loadSelectedSet() {
      this.$store.dispatch('cards/loadSelectedSet', { id: this.$route.params.id, cards: this.cards })
    },
    // loadSelectedSet() {
    //   const  cards = this.cards
    //   const id = this.id
    //   let cardsData = []
    //   cards.forEach((cardId, index) => {
    //     for(index=0; index<cards.length; ++index){
    //       cardId.sets.find(element => element === id)
    //       cardsData.push(cardId)
    //       return cardsData
    //     }
    //   })
    //   console.log("SelectedCards" + cardsData)
    // },
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer';
      } else {
        this.mode = 'app-question';
        alert('Wrong, try again!');
      }
    }
  },
  components: {
    BaseButton,
    BaseCard,
    appQuestion: Question,
    appAnswer: Answer
  },
  created() {
    this.loadCards()
    this.loadSets()
  }
}
</script>

<style scoped>

.flip-enter {
  /*transform: rotateY(0deg);*/
}

.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave {
  /*transform: rotateY(0deg);*/
}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

</style>

