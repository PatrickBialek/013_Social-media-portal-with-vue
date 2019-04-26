<template>
  <div class="login">
    <div class="login__content">
      <form class="login__form" @submit.prevent="login">
        <div class="login__box">
          <label for="login-mail">Email adress:</label>
          <input type="text" name="login-mail" v-model="email">
        </div>
        <div class="login__box">
          <label for="login-passowrd">Passowrd:</label>
          <input type="password" name="login-passowrd" v-model="password">
        </div>
        <p class="error" v-if="feedback">{{ feedback }}</p>
        <button class="login__btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.login {
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 70px);
  align-items: center;
  padding: 20px 10px;

  &,
  &__content,
  &__box,
  &__form {
    display: flex;
    justify-content: center;
  }

  &__content {
    width: 100%;
    max-width: 350px;
    padding: 30px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &__form {
    flex-direction: column;
    width: 90%;
    max-width: 250px;
  }

  &__box {
    flex-direction: column;
    margin-bottom: 20px;

    & > label {
      margin-bottom: 4px;
      font-size: 15px;
      line-height: 1.7;
      color: #7d7c7c;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & > input[type="text"],
    & > input[type="password"] {
      border: 1px solid #e4e4e4;
      background-color: #fff;
      outline: none;
      padding: 8px 12px;
      font-size: 16px;
      color: #303030;
    }
  }

  &__btn {
    background-color: #428bca;
    color: #fff;
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #186eb9;
    }
  }
}

.error {
  color: red;
  margin-bottom: 20px;
}
</style>

