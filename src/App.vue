<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      sets: [
        { id: 't1', name: 'Vegetables', members: ['u1', 'u2'] },
        { id: 't2', name: 'Colors', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Animals', members: ['u4', 'u5'] },
      ],
      cards: [
        { id: 'u1', ru: 'кот', eng: 'cat' },
        { id: 'u2', ru: 'пёс', eng: 'dog' },
        { id: 'u3', ru: 'яблоко', eng: 'apple' },
        { id: 'u4', ru: 'апельсин', eng: 'orange' },
        { id: 'u5', ru: 'жёлтый', eng: 'yellow' },
      ],
    };
  },
  provide() {
    return {
      sets: this.sets,
      cards: this.cards,
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>