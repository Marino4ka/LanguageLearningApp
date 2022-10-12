<template>
  <base-card><form @submit.prevent="registerSet">
    <div class="form-control">
      <label for="name">Название</label>
      <input type="text" id="name" v-model.trim="name"/>
    </div>
    <div class="form-control">
      <base-button>Сохранить</base-button>
    </div>
  </form></base-card>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
import BaseCard from "@/components/ui/BaseCard";

export default {
  components: {BaseCard, BaseButton},
  emits: ['save-data'],
  data() {
    return {
      name: '',
      members: ['1']
    }
  },
  methods: {
   registerSet() {
      const SetData = {
        name: this.name,
        members: this.members

      }
     this.$store.dispatch('cards/addSet', SetData)
     this.$router.replace('/sets')
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