<template>
  <base-card>
    <form @submit.prevent="registerUser">
      <div class="form-control" :class="{invalid: !login.isValid}">
        <label for="login">Логин</label>
        <input type="text" id="login" v-model.trim="login.val" @blur="clearValidity('login')"/>
        <p v-if="!login.isValid">Поле логин не должно быть пустым</p>
      </div>
       <div class="form-control" :class="{invalid: !email.isValid}">
        <label for="email">e-mail</label>
        <input type="text" id="email" v-model.trim="email.val" @blur="clearValidity('email')"/>
         <p v-if="!email.isValid">Поле e-mail не должно быть пустым</p>
      </div>
      <div class="form-control" :class="{invalid: !password.isValid}">
        <label for="password">Пароль</label>
        <input type="text" id="password" v-model.trim="password.val" @blur="clearValidity('password')"/>
        <p v-if="!password.isValid">Поле пароль не должно быть пустым</p>
      </div>
      <div>
        <p v-if="!formIsValid">Некорректные данные! Попробуйте ещё раз.</p>
        <base-button v-if="!isUser">Зарегистрировать</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
import BaseCard from "@/components/ui/BaseCard";

export default {
  components: {BaseCard, BaseButton},
  data() {
    return {
      login: {
        val: '',
        isValid: true
      },
      email: {
        val: '',
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  computed: {
    isUser() {
      return this.$store.getters['cards/isUser']
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true;
      if(this.login.val === '') {
        this.login.isValid = false
        this.formIsValid = false
      }
      if(this.email.val === '') {
        this.email.isValid = false
        this.formIsValid = false
      }
      if(this.password.val === '') {
        this.password.isValid = false
        this.formIsValid = false
      }
    },
    registerUser() {
      this.validateForm();

      if (!this.formIsValid) {
        return
      }

      const formData = {
        login: this.login.val,
        email: this.email.val,
        password: this.password.val
      }
      this.$store.dispatch('cards/addUser', formData)
      this.$router.replace('/cards')
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