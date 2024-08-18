<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  :value="userData.email"
                  @input="(event) => (userData.email = event.target.value)"
                  @change="checkEmail"
                  class="form-control"
                  id="email"
                  required
                />
                <p v-if="errors.email" class="error">{{ errors.email }}</p>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  :value="userData.password"
                  @input="(event) => (userData.password = event.target.value)"
                  class="form-control"
                  id="password"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="passwordConfirm" class="form-label">
                  password Confirm
                </label>
                <input
                  type="passwordConfirm"
                  :value="userData.passwordConfirm"
                  @input="
                    (event) => (userData.passwordConfirm = event.target.value)
                  "
                  class="form-control"
                  id="passwordConfirm"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const userData = {
  email: '',
  password: '',
  passwordConfirm: '',
}
const errors = {
  email: '',
  password: '',
  passwordConfirm: '',
}
const password = ref('')
const router = useRouter()

const checkEmail = () => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(String(userData.email).toLowerCase())) {
    errors.email = 'Veuillez entrer un email valide'
  } else {
    errors.email = ''
  }
}
const login = () => {
  const { email, password, passwordConfirm } = userData
  if (email && password && passwordConfirm)
    router.push({ name: 'movies', query: { email: email.value } })
  else alert('Please fill in all fields.')
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>
