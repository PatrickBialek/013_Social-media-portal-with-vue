<template>
  <div class="nav">
    <div class="nav__logo-box">
      <a href class="nav__logo"></a>
    </div>
    <nav class="nav__content">
      <ul class="nav__items-list">
        <li class="nav__single-item">
          <a href>Singup</a>
        </li>
        <li class="nav__single-item">
          <a href>Login</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  date() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &__logo-box {
  }
}
</style>

