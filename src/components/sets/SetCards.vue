<template>
  <section>
    <h2>{{ setName }}</h2>
    <ul>
      <card-item
        v-for="member in members"
        :key="member.id"
        :ru="member.ru"
        :eng="member.eng"
      ></card-item>
      <router-link to="/sets/t2">Do to animals</router-link>
    </ul>
  </section>
</template>

<script>
import CardItem from '../cards/CardItem.vue';

export default {
  inject: ['sets', 'cards'],
  components: {
    CardItem
  },
  data() {
    return {
      setName: '',
      members: []
    };
  },
  methods: {
    loadSetsMembers(route) {
      const setId = route.params.setId;
      const selectedSet = this.sets.find(set => set.id === setId);
      console.log(selectedSet)
      const members = selectedSet.members;
      console.log(members)
      const selectedMembers = [];
      for (const member of members) {
        const selectedCard = this.cards.find(card => card.id === member)
        selectedMembers.push(selectedCard)
      }
      this.members = selectedMembers
      this.setName = selectedSet.name
    }
  },
  created() {
    this.loadSetsMembers(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadSetsMembers(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>