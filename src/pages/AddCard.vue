<template>
  <base-card>
    <h2>добавить карту</h2>
    <card-form @save-data="saveData"></card-form>
  </base-card>
</template>

<script>
import CardForm from "@/components/cards/CardForm";

export default {
  components: { CardForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('cards/addCard', data)
      // this.$store.dispatch('cards/addToSet', data)
      this.$router.replace('/cards')
    }
  }
}
</script>