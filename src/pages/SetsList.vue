<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Ваши сеты</h2>
      </header>
      <ul v-if="hasSets">
        <sets-item
            v-for="set in userSets"
            :key="set.id"
            :id="set.id"
            :name="set.name"></sets-item>
      </ul>
      <h3 v-else>Создайте сет и начните добавлять карточки!</h3>
    </base-card>
  </section>
</template>

<script>
import SetsItem from "@/components/sets/SetsItem";
import BaseCard from "@/components/ui/BaseCard";

export default {
  components: {
    SetsItem,
    BaseCard
  },
  data() {
    return {
      error: null,
    }
  },
  computed: {
    userSets() {
      return this.$store.getters['cards/sets']
    },
    hasSets() {
      return this.$store.getters['cards/hasSets']
    }
  },
  created() {
    this.loadSets()
    this.loadCards()
  },
  methods: {
    loadSets() {
      this.$store.dispatch('cards/loadSets')
    },
    loadCards() {
      this.$store.dispatch('cards/loadCards')
    },
    handleError() {
      this.error = null;
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>