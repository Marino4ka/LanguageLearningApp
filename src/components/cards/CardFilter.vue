<template>
  <base-card>
    <h2>Выберите карточки</h2>
    <span class="filter-option">
      <input type="checkbox" id="learn" checked @change="setFilter"/>
      <label for="learn">Не знаю</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="done" checked @change="setFilter"/>
      <label for="done">Знаю</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="repeat" checked @change="setFilter"/>
      <label for="repeat">Повторить</label>
    </span>
  </base-card>
</template>
<script>
import BaseCard from "@/components/ui/BaseCard";
export default {
  components: {BaseCard},
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        learn: true,
        done: true,
        repeat: true
      }
    }
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      }
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters)
    }
  }
}

</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>