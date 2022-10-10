<template>
  <section>
    <base-card>
      <header>
        <h2>Сеты карточек</h2>
      </header>
      <ul v-if="hasSets">
        <sets-item
            v-for="set in userSets"
            :key="set.id"
            :id="set.id"
            :name="set.name"
            :members="set.members"></sets-item>
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
  computed: {
    userSets() {
      return this.$store.getters['cards/sets']
    },
    hasSets() {
      return this.$store.getters['cards/hasSets']
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