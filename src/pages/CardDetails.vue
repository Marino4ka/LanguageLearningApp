<template>
  <base-card>
    <h1>детали карточки{{ id }}</h1>
    <h1>{{ ru }}</h1>
    <h1>{{ eng }}</h1>
    <h1>{{ status }}</h1>
    <base-badge :key="status" :type="status" :title="status"></base-badge>
    <base-button mode="outline" link :to="editLink">Изменить</base-button>
  </base-card>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
import BaseBadge from "@/components/ui/BaseBadge";
export default {
  components: {BaseBadge, BaseButton, BaseCard},
  props: ['id'],
  data() {
    return {
      selectedCard: null
    }
  },
  computed: {
    editLink() {
      return this.$route.path + '/edit'
    },
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