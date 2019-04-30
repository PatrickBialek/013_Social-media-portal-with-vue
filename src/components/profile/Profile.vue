<template>
  <div class="user">
    <div v-if="profile" class="user__content">
      <h2 class="user__name">{{ title }}</h2>
      <div class="user__references">
        <h3>User references:</h3>
        <form class="user__form" @submit.prevent="addReference">
          <label class="user__label" for="add-reference"></label>
          <input class="user__text-field" type="text" name="add-reference" v-model="newReference">
          <p class="user__error" v-if="feedback">{{ feedback }}</p>
        </form>
        <div class="user__references-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Profile",
  data() {
    return {
      profile: null,
      title: null,
      newReference: null,
      feedback: null
    };
  },
  created() {
    let ref = db.collection("users");
    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        this.profile = user.data();
      })
      .then(() => {
        this.title =
          this.profile.nick.charAt(0).toUpperCase() +
          this.profile.nick.slice(1);
      });
  },
  methods: {
    addReference() {}
  }
};
</script>

<style lang="scss" scoped>
</style>


