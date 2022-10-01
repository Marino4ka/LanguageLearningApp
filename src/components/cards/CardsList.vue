<template>
  <ul>
    <card-item v-for="card in cards" :key="card.id" :ru="card.ru" :eng="card.eng"></card-item>
  </ul>
</template>

<script>
import CardItem from './CardItem.vue';

export default {
  components: {
    CardItem,
  },
  inject: ['cards'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>