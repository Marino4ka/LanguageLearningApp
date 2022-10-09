<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="ru">Русский</label>
      <textarea id="ru" v-model.trim="ru" rows="5"></textarea>
    </div>
    <div class="form-control">
      <label for="eng">English</label>
      <textarea id="eng" v-model.trim="eng" rows="5"></textarea>
    </div>
    <div class="form-control">
      <h3>Сет</h3>
      <div>
        <input type="checkbox" id="Vegetables" v-model="sets" value="Vegetables">
        <label>Vegetables</label>
      </div>
      <div>
        <input type="checkbox" id="Colors" v-model="sets" value="Colors">
        <label>Colors</label>
      </div>
      <div>
        <input type="checkbox" id="Animals" v-model="sets" value="Animals">
        <label>Animals</label>
      </div>
      <base-button>Сохранить</base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";

export default {
  components: {BaseButton},
  emits: ['save-data'],
  data() {
    return {
      ru: '',
      eng: '',
      sets: []
    }
  },
  methods: {
    submitForm() {
      const formData = {
        ru: this.ru,
        eng: this.eng,
        status: 'learn',
        sets: this.sets
      }
      this.$emit('save-data', formData)
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>