<template>
  <ul>
    <sets-item
      v-for="set in sets"
      :key="set.id"
      :id="set.id"
      :name="set.name"
      :member-count="set.members.length"
    ></sets-item>
  </ul>
</template>

<script>
import SetsItem from './SetsItem.vue';

export default {
  components: {
    SetsItem,
  },
  inject: ['sets'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>