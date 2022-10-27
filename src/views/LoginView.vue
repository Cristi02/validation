<script setup lang="ts">
import { ref } from "vue";
import useFormValidation from "../composables/useFormValidation";

const username = ref("");
const password = ref("");

const { errors, validateUsername, validatePassword } = useFormValidation();
const validateInput = () => {
  validateUsername("username", username.value);
  validatePassword("password", password.value);
};
</script>

<template>
  <div class="wrapper">
    <!-- <div class="form-group">
      <label class="col-form-label mt-4" for="inputDefault"
        >Default input</label
      >
      <input
        type="text"
        class="form-control"
        placeholder="Default input"
        id="inputDefault"
      />
    </div> -->
    <div class="header">
      <img
        class="header__logo"
        src="@/assets/Endava_Logo.png"
        alt="Endava Logo"
      />
      <h1>Book Sharing</h1>
    </div>
    <form @submit.prevent="validateInput" class="form">
      <h1>Login</h1>
      <h2>Don't have an account yet? <a href="#">Sign up</a></h2>
      <div class="form-group">
        <label class="col-form-label mt-4" for="username">Username:</label>
        <input
          type="text"
          :class="`form-control ${errors.username ? 'is-invalid' : ''}`"
          id="username"
        />
        <div v-if="errors.username" class="invalid-feedback">
          {{ errors.username }}
        </div>
      </div>
      <div class="form-group">
        <label class="col-form-label mt-4" for="password">Password:</label>
        <input
          type="password"
          :class="`form-control ${errors.password ? 'is-invalid' : ''}`"
          id="password"
        />
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password }}
        </div>
      </div>

      <h2>Forgot your password?</h2>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<style scoped>
@import "../assets/base.css";
/* .wrapper {
  display: flex;
  align-content: stretch;
  align-items: center;
  height: 100vh;
}
.header {
  width: 40vw;
  height: 100vh;
  background-color: var(--color-background);
}

.form {
  width: 60vw;
}*/
.header__logo {
  width: 200px;
}
</style>
