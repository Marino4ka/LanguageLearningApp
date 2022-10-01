<template>
  <li>
    <h3>{{ ru }}</h3>
    <div class="role">{{ eng }}</div>
  </li>
</template>

<script>
export default {
  props: ['ru', 'eng']
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