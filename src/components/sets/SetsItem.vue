<template>
  <li>
    <div>{{ name }}</div>
    <div>{{ id }}</div>
    <div>{{ countMembers }}</div>
    <base-button mode="outline" link :to="learnSetLink">Учить{{ id }}</base-button>
  </li>
</template>

<script>
  export default {
    props: ['name', 'members', 'id'],
    computed: {
      countMembers() {
        return this.members.length
      },
      learnSetLink() {
        return this.$route.path + '/' + 'learn' + '/' + this.id
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