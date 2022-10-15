<template>
  <li>
    <div>{{ name }}</div>
    <div>{{ id }}</div>
    <base-button mode="outline" link :to="learnSetLink" :id="setId">Учить{{ id }}</base-button>
  </li>
</template>

<script>
  export default {
    props: ['name', 'members', 'id'],
    data () {
      return {
        setId: this.id
      }
    },
    computed: {
      learnSetLink() {
        return this.$route.path + '/' + 'learn' + '/' + this.setId
      }
    }
  }
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>