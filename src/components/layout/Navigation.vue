<template>
  <div class="nav">
    <div class="nav__content-box">
      <div class="nav__logo-box">
        <a href class="nav__logo">Social</a>
      </div>
      <nav class="nav__nav-content">
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
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &__content-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 70px;
  }

  &__content-box,
  &__logo-box,
  &__nav-content,
  &__items-list {
    display: flex;
  }

  &__logo-box {
    padding: 10px;
  }

  &__logo {
    font-size: 20px;
    text-decoration: none;
    color: #303030;
    font-weight: 700;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    display: block;
    padding: 10px;
    border: 2px solid #303030;
  }

  &__nav-content {
    padding: 16px 10px 10px 10px;
  }

  &__logo-box,
  &__nav-content,
  &__items-list {
    justify-content: center;
    align-items: center;
  }

  &__single-item {
    margin: 0 10px;
    padding: 5px;

    &:last-child {
      margin-right: 0px;
    }

    & a {
      font-weight: 500;
      color: #303030;
      font-family: Rubik, Arial, Helvetica, sans-serif;
      text-decoration: none;
      margin-top: 6px;
      transition: color 0.3s ease-in-out;

      &::after {
        display: block;
        content: "";
        height: 2px;
        width: 0%;
        background-color: #428bca;
        margin-top: 2px;
        opacity: 0;
        transition: opacity 0.1s ease-in-out, width 0.3s ease-in-out;
      }

      &:hover {
        color: #428bca;
      }

      &:hover::after {
        opacity: 1;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .nav {
      &__logo {
        font-size: 16px;
        padding: 5px;
      }

      &__nav-content {
        padding: 16px 10px 10px 0px;
      }
    }
  }
}
</style>

