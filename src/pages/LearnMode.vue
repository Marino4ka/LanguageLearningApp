<template>
  <base-card>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">Экзамен {{ name }}</h1>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <transition name="flip" mode="out-in">
            <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
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

export default {
  props:['id'],
  data() {
    return {
      selectedSet: null,
      mode: 'app-question'
    }
  },
  computed: {
    name () {
      return this.selectedSet.name
    }
  },
  methods: {
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
    BaseCard,
    appQuestion: Question,
    appAnswer: Answer
  },
  created() {
    this.selectedSet = this.$store.getters['cards/sets'].find(set => set.id === this.id)
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

