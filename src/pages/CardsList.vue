<template>
  <section>
    <card-filter @change-filter="setFilters"></card-filter>
  </section>
    <base-card>
      <ul v-if="hasCards">
        <card-item v-for="card in filteredCards"
                   :key="card.id"
                   :ru="card.ru"
                   :eng="card.eng"
                   :status="card.status"
                   :id="card.id">
        </card-item>
      </ul>
      <h3 v-else>Начните добавлять карточки!</h3>
    </base-card>
</template>

<script>
import CardItem from '../components/cards/CardItem.vue';
import CardFilter from "@/components/cards/CardFilter";

export default {
  components: {
    CardItem,
    CardFilter
  },
  data() {
    return {
      activeFilters: {
        learn: true,
        done: true,
        repeat: true,
      }
    }
  },
  computed: {
    filteredCards () {
      const cards = this.$store.getters['cards/cards'];
      return cards.filter(card => {
        if (this.activeFilters.learn && card.status.includes('learn')){
          return true
        }
        if (this.activeFilters.done && card.status.includes('done')){
          return true
        }
        if (this.activeFilters.repeat && card.status.includes('repeat')){
          return true
        }
        return false
      })
    },
    hasCards() {
      return this.$store.getters['cards/hasCards']
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}

h3 {
  margin: 2rem auto;
  max-width: 15rem;
  padding: 0;
}
</style>