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
            <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'" :cardIds="selectedSet.cards" :set="selectedSet.set"></component>
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
      setId: this.id,
      // cards: this.$store.getters['cards/cards'],
      // sets: this.$store.getters['cards/sets']
    }
  },
  computed: {
    selectedSet() {
      const cards = []
      const set = this.$store.getters['cards/selectedSet']
      for(let index=0; index<set.length; ++index) {
        cards.push(set[index].id)
      }
      this.$store.dispatch('cards/shuffleCards', {set: set})
      return { set, cards }
    }
  },
  methods: {
    loadSets() {
      this.$store.dispatch('cards/loadSets')
    },
    loadCards() {
      this.$store.dispatch('cards/loadCards')
    },
    loadSelectedSet() {
      this.$store.dispatch('cards/loadSelectedSet', { id: this.setId })
    },
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
    this.loadSets()
    this.loadCards()
    this.loadSelectedSet()
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

