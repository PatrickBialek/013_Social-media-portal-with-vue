<template>
  <div class="goodbay">
    <div class="goodbay__content">
      <div class="goodbay__box">
        <h2 class="goodbay__title">Goodbay!</h2>
        <p>Hope to see you here again!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goodbay",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.goodbay {
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 70px);
  align-items: center;
  padding: 20px 10px;

  &,
  &__content,
  &__box {
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

  &__box {
    flex-direction: column;
    text-align: center;

    & h2,
    & p {
      color: #303030;
      font-family: Rubik, Arial, Helvetica, sans-serif;
    }

    & h2 {
      font-size: 24px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    & p {
      font-size: 16px;
    }
  }
}
</style>

