<template>
  <div>
    <base-dialog :show="!!error" title="Что-то пошло не так" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">e-mail</label>
          <input type="email" id="email" v-model.trim="email"/>
        </div>
        <div class="form-control">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model.trim="password"/>
        </div>
        <div>
          <p
              v-if="!formIsValid"
          >Пожалуйста введите email и пароль (пароль должен включать не менее 6 символов)</p>
          <base-button>{{ submitButtonCaption }}</base-button>
          <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
import BaseCard from "@/components/ui/BaseCard";
import BaseDialog from "@/components/ui/BaseDialog";

export default {
  components: {BaseDialog, BaseCard, BaseButton},
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead'
      } else {
        return 'Login instead'
      }
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
          this.email === '' ||
          // !this.email.includes('@') ||
          this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try{
        if (this.mode === 'login') {
          await this.$store.dispatch('login', formData)
        } else {
          await this.$store.dispatch('signup', formData)
        }
        this.$router.replace('/sets')
      } catch(err) {
        this.error = err.message || 'Неудалось зарегестрироваться, попробуйте позднее!'
      }

    },
    switchAuthMode() {
      if(this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null
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

</style>