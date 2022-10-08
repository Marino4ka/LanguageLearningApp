<template>
  <base-card>
    <h1>Страница редактирования {{ id }}</h1>
    <h1>{{ ru }}</h1>
    <h1>{{ eng }}</h1>
    <h1>{{ status }}</h1>
  </base-card>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
export default {
  components: {BaseCard},
  props: ['id'],
  data() {
    return {
      selectedCard: null
    }
  },
  computed: {
    ru() {
      return this.selectedCard.ru
    },
    eng() {
      return this.selectedCard.eng
    },
    status() {
      return this.selectedCard.status
    }
  },
  created() {
    this.selectedCard = this.$store.getters['cards/cards'].find(card => card.id === this.id)
  }
}
</script>