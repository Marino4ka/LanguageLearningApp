<template>
  <section>
    <div class="controls">
      <base-button link to="#">Зарегестрироваться</base-button>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 3rem;
}

.controls {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<script>
import BaseButton from "@/components/ui/BaseButton";
export default {
  components: {BaseButton}
}
</script>