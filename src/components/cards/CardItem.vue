<template>
  <li>
    <h3>{{ ru }}</h3>
    <h3>{{ eng }}</h3>
    <h3>{{ status }}</h3>
    <div>
      <base-button mode="outline" link :to="cardEditLink">Edit{{ id }}</base-button>
      <base-button link :to="cardDetailsLink">Details{{ id }}</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
export default {
  components: { BaseButton },
  props: ['ru', 'eng', 'id', 'status'],
  computed: {
    cardEditLink() {
      return this.$route.path + '/' + 'details' + '/' + this.id + '/edit'
    },
    cardDetailsLink() {
      return this.$route.path + '/' + 'details' + '/' + this.id
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

</style>